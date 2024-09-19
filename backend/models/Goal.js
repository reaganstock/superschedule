const mongoose = require('mongoose');

const metricSchema = mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  type: { type: String, enum: ['number', 'text'], required: true },
  current: { type: mongoose.Schema.Types.Mixed, required: true },
  target: { type: mongoose.Schema.Types.Mixed, required: true },
  includeInVisual: { type: Boolean, default: true },
});

const benchmarkSchema = mongoose.Schema({
  id: { type: String, required: true },
  date: { type: Date, required: true },
  value: { type: Number, required: true },
  metricId: { type: String, required: true },
});

const goalSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    description: { type: String },
    metrics: [metricSchema],
    benchmarks: [benchmarkSchema],
    deadline: { type: Date, required: true },
    startDate: { type: Date, required: true },
    priority: { type: String, enum: ['low', 'medium', 'high', 'urgent'], required: true },
    status: {
      type: String,
      enum: ['not_started', 'in_progress', 'completed', 'on_hold', 'cancelled'],
      required: true,
    },
    category: { type: String },
    isRecurring: { type: Boolean, default: false },
    recurringPeriod: { type: String, enum: ['daily', 'weekly', 'monthly', 'yearly'] },
    color: { type: String, default: '#000000' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Goal', goalSchema);