// https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html
// generated from terraform resource schema

/*
{
  "version": 1,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "destination": {
        "type": "string",
        "required": true
      },
      "destination_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "version_id": {
        "type": "string",
        "optional": true,
        "computed": true
      }
    },
    "block_types": {
      "elasticsearch_configuration": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "buffering_interval": {
              "type": "number",
              "optional": true
            },
            "buffering_size": {
              "type": "number",
              "optional": true
            },
            "domain_arn": {
              "type": "string",
              "required": true
            },
            "index_name": {
              "type": "string",
              "required": true
            },
            "index_rotation_period": {
              "type": "string",
              "optional": true
            },
            "retry_duration": {
              "type": "number",
              "optional": true
            },
            "role_arn": {
              "type": "string",
              "required": true
            },
            "s3_backup_mode": {
              "type": "string",
              "optional": true
            },
            "type_name": {
              "type": "string",
              "optional": true
            }
          },
          "block_types": {
            "cloudwatch_logging_options": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "enabled": {
                    "type": "bool",
                    "optional": true
                  },
                  "log_group_name": {
                    "type": "string",
                    "optional": true
                  },
                  "log_stream_name": {
                    "type": "string",
                    "optional": true
                  }
                }
              },
              "max_items": 1
            },
            "processing_configuration": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "enabled": {
                    "type": "bool",
                    "optional": true
                  }
                },
                "block_types": {
                  "processors": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "type": {
                          "type": "string",
                          "required": true
                        }
                      },
                      "block_types": {
                        "parameters": {
                          "nesting_mode": "list",
                          "block": {
                            "attributes": {
                              "parameter_name": {
                                "type": "string",
                                "required": true
                              },
                              "parameter_value": {
                                "type": "string",
                                "required": true
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "max_items": 1
            }
          }
        },
        "max_items": 1
      },
      "extended_s3_configuration": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "bucket_arn": {
              "type": "string",
              "required": true
            },
            "buffer_interval": {
              "type": "number",
              "optional": true
            },
            "buffer_size": {
              "type": "number",
              "optional": true
            },
            "compression_format": {
              "type": "string",
              "optional": true
            },
            "error_output_prefix": {
              "type": "string",
              "optional": true
            },
            "kms_key_arn": {
              "type": "string",
              "optional": true
            },
            "prefix": {
              "type": "string",
              "optional": true
            },
            "role_arn": {
              "type": "string",
              "required": true
            },
            "s3_backup_mode": {
              "type": "string",
              "optional": true
            }
          },
          "block_types": {
            "cloudwatch_logging_options": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "enabled": {
                    "type": "bool",
                    "optional": true
                  },
                  "log_group_name": {
                    "type": "string",
                    "optional": true
                  },
                  "log_stream_name": {
                    "type": "string",
                    "optional": true
                  }
                }
              },
              "max_items": 1
            },
            "data_format_conversion_configuration": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "enabled": {
                    "type": "bool",
                    "optional": true
                  }
                },
                "block_types": {
                  "input_format_configuration": {
                    "nesting_mode": "list",
                    "block": {
                      "block_types": {
                        "deserializer": {
                          "nesting_mode": "list",
                          "block": {
                            "block_types": {
                              "hive_json_ser_de": {
                                "nesting_mode": "list",
                                "block": {
                                  "attributes": {
                                    "timestamp_formats": {
                                      "type": [
                                        "list",
                                        "string"
                                      ],
                                      "optional": true
                                    }
                                  }
                                },
                                "max_items": 1
                              },
                              "open_x_json_ser_de": {
                                "nesting_mode": "list",
                                "block": {
                                  "attributes": {
                                    "case_insensitive": {
                                      "type": "bool",
                                      "optional": true
                                    },
                                    "column_to_json_key_mappings": {
                                      "type": [
                                        "map",
                                        "string"
                                      ],
                                      "optional": true
                                    },
                                    "convert_dots_in_json_keys_to_underscores": {
                                      "type": "bool",
                                      "optional": true
                                    }
                                  }
                                },
                                "max_items": 1
                              }
                            }
                          },
                          "min_items": 1,
                          "max_items": 1
                        }
                      }
                    },
                    "min_items": 1,
                    "max_items": 1
                  },
                  "output_format_configuration": {
                    "nesting_mode": "list",
                    "block": {
                      "block_types": {
                        "serializer": {
                          "nesting_mode": "list",
                          "block": {
                            "block_types": {
                              "orc_ser_de": {
                                "nesting_mode": "list",
                                "block": {
                                  "attributes": {
                                    "block_size_bytes": {
                                      "type": "number",
                                      "optional": true
                                    },
                                    "bloom_filter_columns": {
                                      "type": [
                                        "list",
                                        "string"
                                      ],
                                      "optional": true
                                    },
                                    "bloom_filter_false_positive_probability": {
                                      "type": "number",
                                      "optional": true
                                    },
                                    "compression": {
                                      "type": "string",
                                      "optional": true
                                    },
                                    "dictionary_key_threshold": {
                                      "type": "number",
                                      "optional": true
                                    },
                                    "enable_padding": {
                                      "type": "bool",
                                      "optional": true
                                    },
                                    "format_version": {
                                      "type": "string",
                                      "optional": true
                                    },
                                    "padding_tolerance": {
                                      "type": "number",
                                      "optional": true
                                    },
                                    "row_index_stride": {
                                      "type": "number",
                                      "optional": true
                                    },
                                    "stripe_size_bytes": {
                                      "type": "number",
                                      "optional": true
                                    }
                                  }
                                },
                                "max_items": 1
                              },
                              "parquet_ser_de": {
                                "nesting_mode": "list",
                                "block": {
                                  "attributes": {
                                    "block_size_bytes": {
                                      "type": "number",
                                      "optional": true
                                    },
                                    "compression": {
                                      "type": "string",
                                      "optional": true
                                    },
                                    "enable_dictionary_compression": {
                                      "type": "bool",
                                      "optional": true
                                    },
                                    "max_padding_bytes": {
                                      "type": "number",
                                      "optional": true
                                    },
                                    "page_size_bytes": {
                                      "type": "number",
                                      "optional": true
                                    },
                                    "writer_version": {
                                      "type": "string",
                                      "optional": true
                                    }
                                  }
                                },
                                "max_items": 1
                              }
                            }
                          },
                          "min_items": 1,
                          "max_items": 1
                        }
                      }
                    },
                    "min_items": 1,
                    "max_items": 1
                  },
                  "schema_configuration": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "catalog_id": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "database_name": {
                          "type": "string",
                          "required": true
                        },
                        "region": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "role_arn": {
                          "type": "string",
                          "required": true
                        },
                        "table_name": {
                          "type": "string",
                          "required": true
                        },
                        "version_id": {
                          "type": "string",
                          "optional": true
                        }
                      }
                    },
                    "min_items": 1,
                    "max_items": 1
                  }
                }
              },
              "max_items": 1
            },
            "processing_configuration": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "enabled": {
                    "type": "bool",
                    "optional": true
                  }
                },
                "block_types": {
                  "processors": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "type": {
                          "type": "string",
                          "required": true
                        }
                      },
                      "block_types": {
                        "parameters": {
                          "nesting_mode": "list",
                          "block": {
                            "attributes": {
                              "parameter_name": {
                                "type": "string",
                                "required": true
                              },
                              "parameter_value": {
                                "type": "string",
                                "required": true
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "max_items": 1
            },
            "s3_backup_configuration": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "bucket_arn": {
                    "type": "string",
                    "required": true
                  },
                  "buffer_interval": {
                    "type": "number",
                    "optional": true
                  },
                  "buffer_size": {
                    "type": "number",
                    "optional": true
                  },
                  "compression_format": {
                    "type": "string",
                    "optional": true
                  },
                  "kms_key_arn": {
                    "type": "string",
                    "optional": true
                  },
                  "prefix": {
                    "type": "string",
                    "optional": true
                  },
                  "role_arn": {
                    "type": "string",
                    "required": true
                  }
                },
                "block_types": {
                  "cloudwatch_logging_options": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "enabled": {
                          "type": "bool",
                          "optional": true
                        },
                        "log_group_name": {
                          "type": "string",
                          "optional": true
                        },
                        "log_stream_name": {
                          "type": "string",
                          "optional": true
                        }
                      }
                    },
                    "max_items": 1
                  }
                }
              },
              "max_items": 1
            }
          }
        },
        "max_items": 1
      },
      "kinesis_source_configuration": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "kinesis_stream_arn": {
              "type": "string",
              "required": true
            },
            "role_arn": {
              "type": "string",
              "required": true
            }
          }
        },
        "max_items": 1
      },
      "redshift_configuration": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "cluster_jdbcurl": {
              "type": "string",
              "required": true
            },
            "copy_options": {
              "type": "string",
              "optional": true
            },
            "data_table_columns": {
              "type": "string",
              "optional": true
            },
            "data_table_name": {
              "type": "string",
              "required": true
            },
            "password": {
              "type": "string",
              "required": true,
              "sensitive": true
            },
            "retry_duration": {
              "type": "number",
              "optional": true
            },
            "role_arn": {
              "type": "string",
              "required": true
            },
            "s3_backup_mode": {
              "type": "string",
              "optional": true
            },
            "username": {
              "type": "string",
              "required": true
            }
          },
          "block_types": {
            "cloudwatch_logging_options": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "enabled": {
                    "type": "bool",
                    "optional": true
                  },
                  "log_group_name": {
                    "type": "string",
                    "optional": true
                  },
                  "log_stream_name": {
                    "type": "string",
                    "optional": true
                  }
                }
              },
              "max_items": 1
            },
            "processing_configuration": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "enabled": {
                    "type": "bool",
                    "optional": true
                  }
                },
                "block_types": {
                  "processors": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "type": {
                          "type": "string",
                          "required": true
                        }
                      },
                      "block_types": {
                        "parameters": {
                          "nesting_mode": "list",
                          "block": {
                            "attributes": {
                              "parameter_name": {
                                "type": "string",
                                "required": true
                              },
                              "parameter_value": {
                                "type": "string",
                                "required": true
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "max_items": 1
            },
            "s3_backup_configuration": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "bucket_arn": {
                    "type": "string",
                    "required": true
                  },
                  "buffer_interval": {
                    "type": "number",
                    "optional": true
                  },
                  "buffer_size": {
                    "type": "number",
                    "optional": true
                  },
                  "compression_format": {
                    "type": "string",
                    "optional": true
                  },
                  "kms_key_arn": {
                    "type": "string",
                    "optional": true
                  },
                  "prefix": {
                    "type": "string",
                    "optional": true
                  },
                  "role_arn": {
                    "type": "string",
                    "required": true
                  }
                },
                "block_types": {
                  "cloudwatch_logging_options": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "enabled": {
                          "type": "bool",
                          "optional": true
                        },
                        "log_group_name": {
                          "type": "string",
                          "optional": true
                        },
                        "log_stream_name": {
                          "type": "string",
                          "optional": true
                        }
                      }
                    },
                    "max_items": 1
                  }
                }
              },
              "max_items": 1
            }
          }
        },
        "max_items": 1
      },
      "s3_configuration": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "bucket_arn": {
              "type": "string",
              "required": true
            },
            "buffer_interval": {
              "type": "number",
              "optional": true
            },
            "buffer_size": {
              "type": "number",
              "optional": true
            },
            "compression_format": {
              "type": "string",
              "optional": true
            },
            "kms_key_arn": {
              "type": "string",
              "optional": true
            },
            "prefix": {
              "type": "string",
              "optional": true
            },
            "role_arn": {
              "type": "string",
              "required": true
            }
          },
          "block_types": {
            "cloudwatch_logging_options": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "enabled": {
                    "type": "bool",
                    "optional": true
                  },
                  "log_group_name": {
                    "type": "string",
                    "optional": true
                  },
                  "log_stream_name": {
                    "type": "string",
                    "optional": true
                  }
                }
              },
              "max_items": 1
            }
          }
        },
        "max_items": 1
      },
      "server_side_encryption": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "enabled": {
              "type": "bool",
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "splunk_configuration": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "hec_acknowledgment_timeout": {
              "type": "number",
              "optional": true
            },
            "hec_endpoint": {
              "type": "string",
              "required": true
            },
            "hec_endpoint_type": {
              "type": "string",
              "optional": true
            },
            "hec_token": {
              "type": "string",
              "required": true
            },
            "retry_duration": {
              "type": "number",
              "optional": true
            },
            "s3_backup_mode": {
              "type": "string",
              "optional": true
            }
          },
          "block_types": {
            "cloudwatch_logging_options": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "enabled": {
                    "type": "bool",
                    "optional": true
                  },
                  "log_group_name": {
                    "type": "string",
                    "optional": true
                  },
                  "log_stream_name": {
                    "type": "string",
                    "optional": true
                  }
                }
              },
              "max_items": 1
            },
            "processing_configuration": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "enabled": {
                    "type": "bool",
                    "optional": true
                  }
                },
                "block_types": {
                  "processors": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "type": {
                          "type": "string",
                          "required": true
                        }
                      },
                      "block_types": {
                        "parameters": {
                          "nesting_mode": "list",
                          "block": {
                            "attributes": {
                              "parameter_name": {
                                "type": "string",
                                "required": true
                              },
                              "parameter_value": {
                                "type": "string",
                                "required": true
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "max_items": 1
            }
          }
        },
        "max_items": 1
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface KinesisFirehoseDeliveryStreamConfig extends TerraformMetaArguments {
  readonly destination: string;
  readonly destinationId?: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  readonly versionId?: string;
  /** elasticsearch_configuration block */
  readonly elasticsearchConfiguration?: KinesisFirehoseDeliveryStreamElasticsearchConfiguration[];
  /** extended_s3_configuration block */
  readonly extendedS3Configuration?: KinesisFirehoseDeliveryStreamExtendedS3Configuration[];
  /** kinesis_source_configuration block */
  readonly kinesisSourceConfiguration?: KinesisFirehoseDeliveryStreamKinesisSourceConfiguration[];
  /** redshift_configuration block */
  readonly redshiftConfiguration?: KinesisFirehoseDeliveryStreamRedshiftConfiguration[];
  /** s3_configuration block */
  readonly s3Configuration?: KinesisFirehoseDeliveryStreamS3Configuration[];
  /** server_side_encryption block */
  readonly serverSideEncryption?: KinesisFirehoseDeliveryStreamServerSideEncryption[];
  /** splunk_configuration block */
  readonly splunkConfiguration?: KinesisFirehoseDeliveryStreamSplunkConfiguration[];
}
export interface KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptions {
  readonly enabled?: boolean;
  readonly logGroupName?: string;
  readonly logStreamName?: string;
}
export interface KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParameters {
  readonly parameterName: string;
  readonly parameterValue: string;
}
export interface KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessors {
  readonly type: string;
  /** parameters block */
  readonly parameters?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParameters[];
}
export interface KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration {
  readonly enabled?: boolean;
  /** processors block */
  readonly processors?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessors[];
}
export interface KinesisFirehoseDeliveryStreamElasticsearchConfiguration {
  readonly bufferingInterval?: number;
  readonly bufferingSize?: number;
  readonly domainArn: string;
  readonly indexName: string;
  readonly indexRotationPeriod?: string;
  readonly retryDuration?: number;
  readonly roleArn: string;
  readonly s3BackupMode?: string;
  readonly typeName?: string;
  /** cloudwatch_logging_options block */
  readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptions[];
  /** processing_configuration block */
  readonly processingConfiguration?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration[];
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions {
  readonly enabled?: boolean;
  readonly logGroupName?: string;
  readonly logStreamName?: string;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe {
  readonly timestampFormats?: string[];
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe {
  readonly caseInsensitive?: boolean;
  readonly columnToJsonKeyMappings?: { [key: string]: string };
  readonly convertDotsInJsonKeysToUnderscores?: boolean;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer {
  /** hive_json_ser_de block */
  readonly hiveJsonSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe[];
  /** open_x_json_ser_de block */
  readonly openXJsonSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe[];
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration {
  /** deserializer block */
  readonly deserializer: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer[];
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe {
  readonly blockSizeBytes?: number;
  readonly bloomFilterColumns?: string[];
  readonly bloomFilterFalsePositiveProbability?: number;
  readonly compression?: string;
  readonly dictionaryKeyThreshold?: number;
  readonly enablePadding?: boolean;
  readonly formatVersion?: string;
  readonly paddingTolerance?: number;
  readonly rowIndexStride?: number;
  readonly stripeSizeBytes?: number;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe {
  readonly blockSizeBytes?: number;
  readonly compression?: string;
  readonly enableDictionaryCompression?: boolean;
  readonly maxPaddingBytes?: number;
  readonly pageSizeBytes?: number;
  readonly writerVersion?: string;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer {
  /** orc_ser_de block */
  readonly orcSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe[];
  /** parquet_ser_de block */
  readonly parquetSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe[];
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration {
  /** serializer block */
  readonly serializer: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer[];
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration {
  readonly catalogId?: string;
  readonly databaseName: string;
  readonly region?: string;
  readonly roleArn: string;
  readonly tableName: string;
  readonly versionId?: string;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration {
  readonly enabled?: boolean;
  /** input_format_configuration block */
  readonly inputFormatConfiguration: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration[];
  /** output_format_configuration block */
  readonly outputFormatConfiguration: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration[];
  /** schema_configuration block */
  readonly schemaConfiguration: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration[];
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParameters {
  readonly parameterName: string;
  readonly parameterValue: string;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessors {
  readonly type: string;
  /** parameters block */
  readonly parameters?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParameters[];
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration {
  readonly enabled?: boolean;
  /** processors block */
  readonly processors?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessors[];
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions {
  readonly enabled?: boolean;
  readonly logGroupName?: string;
  readonly logStreamName?: string;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration {
  readonly bucketArn: string;
  readonly bufferInterval?: number;
  readonly bufferSize?: number;
  readonly compressionFormat?: string;
  readonly kmsKeyArn?: string;
  readonly prefix?: string;
  readonly roleArn: string;
  /** cloudwatch_logging_options block */
  readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions[];
}
export interface KinesisFirehoseDeliveryStreamExtendedS3Configuration {
  readonly bucketArn: string;
  readonly bufferInterval?: number;
  readonly bufferSize?: number;
  readonly compressionFormat?: string;
  readonly errorOutputPrefix?: string;
  readonly kmsKeyArn?: string;
  readonly prefix?: string;
  readonly roleArn: string;
  readonly s3BackupMode?: string;
  /** cloudwatch_logging_options block */
  readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions[];
  /** data_format_conversion_configuration block */
  readonly dataFormatConversionConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration[];
  /** processing_configuration block */
  readonly processingConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration[];
  /** s3_backup_configuration block */
  readonly s3BackupConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration[];
}
export interface KinesisFirehoseDeliveryStreamKinesisSourceConfiguration {
  readonly kinesisStreamArn: string;
  readonly roleArn: string;
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions {
  readonly enabled?: boolean;
  readonly logGroupName?: string;
  readonly logStreamName?: string;
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParameters {
  readonly parameterName: string;
  readonly parameterValue: string;
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessors {
  readonly type: string;
  /** parameters block */
  readonly parameters?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParameters[];
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration {
  readonly enabled?: boolean;
  /** processors block */
  readonly processors?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessors[];
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions {
  readonly enabled?: boolean;
  readonly logGroupName?: string;
  readonly logStreamName?: string;
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration {
  readonly bucketArn: string;
  readonly bufferInterval?: number;
  readonly bufferSize?: number;
  readonly compressionFormat?: string;
  readonly kmsKeyArn?: string;
  readonly prefix?: string;
  readonly roleArn: string;
  /** cloudwatch_logging_options block */
  readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions[];
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfiguration {
  readonly clusterJdbcurl: string;
  readonly copyOptions?: string;
  readonly dataTableColumns?: string;
  readonly dataTableName: string;
  readonly password: string;
  readonly retryDuration?: number;
  readonly roleArn: string;
  readonly s3BackupMode?: string;
  readonly username: string;
  /** cloudwatch_logging_options block */
  readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions[];
  /** processing_configuration block */
  readonly processingConfiguration?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration[];
  /** s3_backup_configuration block */
  readonly s3BackupConfiguration?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration[];
}
export interface KinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptions {
  readonly enabled?: boolean;
  readonly logGroupName?: string;
  readonly logStreamName?: string;
}
export interface KinesisFirehoseDeliveryStreamS3Configuration {
  readonly bucketArn: string;
  readonly bufferInterval?: number;
  readonly bufferSize?: number;
  readonly compressionFormat?: string;
  readonly kmsKeyArn?: string;
  readonly prefix?: string;
  readonly roleArn: string;
  /** cloudwatch_logging_options block */
  readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptions[];
}
export interface KinesisFirehoseDeliveryStreamServerSideEncryption {
  readonly enabled?: boolean;
}
export interface KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions {
  readonly enabled?: boolean;
  readonly logGroupName?: string;
  readonly logStreamName?: string;
}
export interface KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParameters {
  readonly parameterName: string;
  readonly parameterValue: string;
}
export interface KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessors {
  readonly type: string;
  /** parameters block */
  readonly parameters?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParameters[];
}
export interface KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration {
  readonly enabled?: boolean;
  /** processors block */
  readonly processors?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessors[];
}
export interface KinesisFirehoseDeliveryStreamSplunkConfiguration {
  readonly hecAcknowledgmentTimeout?: number;
  readonly hecEndpoint: string;
  readonly hecEndpointType?: string;
  readonly hecToken: string;
  readonly retryDuration?: number;
  readonly s3BackupMode?: string;
  /** cloudwatch_logging_options block */
  readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions[];
  /** processing_configuration block */
  readonly processingConfiguration?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration[];
}

// Resource

export class KinesisFirehoseDeliveryStream extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: KinesisFirehoseDeliveryStreamConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_kinesis_firehose_delivery_stream',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._destination = config.destination;
    this._destinationId = config.destinationId;
    this._name = config.name;
    this._tags = config.tags;
    this._versionId = config.versionId;
    this._elasticsearchConfiguration = config.elasticsearchConfiguration;
    this._extendedS3Configuration = config.extendedS3Configuration;
    this._kinesisSourceConfiguration = config.kinesisSourceConfiguration;
    this._redshiftConfiguration = config.redshiftConfiguration;
    this._s3Configuration = config.s3Configuration;
    this._serverSideEncryption = config.serverSideEncryption;
    this._splunkConfiguration = config.splunkConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: true, required: false
  private _arn?: string;
  public get arn() {
    return this._arn ?? this.getStringAttribute('arn');
  }
  public set arn(value: string | undefined) {
    this._arn = value;
  }

  // destination - computed: false, optional: false, required: true
  private _destination: string;
  public get destination() {
    return this._destination;
  }
  public set destination(value: string) {
    this._destination = value;
  }

  // destination_id - computed: true, optional: true, required: false
  private _destinationId?: string;
  public get destinationId() {
    return this._destinationId ?? this.getStringAttribute('destination_id');
  }
  public set destinationId(value: string | undefined) {
    this._destinationId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // version_id - computed: true, optional: true, required: false
  private _versionId?: string;
  public get versionId() {
    return this._versionId ?? this.getStringAttribute('version_id');
  }
  public set versionId(value: string | undefined) {
    this._versionId = value;
  }

  // elasticsearch_configuration - computed: false, optional: true, required: false
  private _elasticsearchConfiguration?: KinesisFirehoseDeliveryStreamElasticsearchConfiguration[];
  public get elasticsearchConfiguration() {
    return this._elasticsearchConfiguration;
  }
  public set elasticsearchConfiguration(value: KinesisFirehoseDeliveryStreamElasticsearchConfiguration[] | undefined) {
    this._elasticsearchConfiguration = value;
  }

  // extended_s3_configuration - computed: false, optional: true, required: false
  private _extendedS3Configuration?: KinesisFirehoseDeliveryStreamExtendedS3Configuration[];
  public get extendedS3Configuration() {
    return this._extendedS3Configuration;
  }
  public set extendedS3Configuration(value: KinesisFirehoseDeliveryStreamExtendedS3Configuration[] | undefined) {
    this._extendedS3Configuration = value;
  }

  // kinesis_source_configuration - computed: false, optional: true, required: false
  private _kinesisSourceConfiguration?: KinesisFirehoseDeliveryStreamKinesisSourceConfiguration[];
  public get kinesisSourceConfiguration() {
    return this._kinesisSourceConfiguration;
  }
  public set kinesisSourceConfiguration(value: KinesisFirehoseDeliveryStreamKinesisSourceConfiguration[] | undefined) {
    this._kinesisSourceConfiguration = value;
  }

  // redshift_configuration - computed: false, optional: true, required: false
  private _redshiftConfiguration?: KinesisFirehoseDeliveryStreamRedshiftConfiguration[];
  public get redshiftConfiguration() {
    return this._redshiftConfiguration;
  }
  public set redshiftConfiguration(value: KinesisFirehoseDeliveryStreamRedshiftConfiguration[] | undefined) {
    this._redshiftConfiguration = value;
  }

  // s3_configuration - computed: false, optional: true, required: false
  private _s3Configuration?: KinesisFirehoseDeliveryStreamS3Configuration[];
  public get s3Configuration() {
    return this._s3Configuration;
  }
  public set s3Configuration(value: KinesisFirehoseDeliveryStreamS3Configuration[] | undefined) {
    this._s3Configuration = value;
  }

  // server_side_encryption - computed: false, optional: true, required: false
  private _serverSideEncryption?: KinesisFirehoseDeliveryStreamServerSideEncryption[];
  public get serverSideEncryption() {
    return this._serverSideEncryption;
  }
  public set serverSideEncryption(value: KinesisFirehoseDeliveryStreamServerSideEncryption[] | undefined) {
    this._serverSideEncryption = value;
  }

  // splunk_configuration - computed: false, optional: true, required: false
  private _splunkConfiguration?: KinesisFirehoseDeliveryStreamSplunkConfiguration[];
  public get splunkConfiguration() {
    return this._splunkConfiguration;
  }
  public set splunkConfiguration(value: KinesisFirehoseDeliveryStreamSplunkConfiguration[] | undefined) {
    this._splunkConfiguration = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      destination: this._destination,
      destination_id: this._destinationId,
      name: this._name,
      tags: this._tags,
      version_id: this._versionId,
      elasticsearch_configuration: this._elasticsearchConfiguration,
      extended_s3_configuration: this._extendedS3Configuration,
      kinesis_source_configuration: this._kinesisSourceConfiguration,
      redshift_configuration: this._redshiftConfiguration,
      s3_configuration: this._s3Configuration,
      server_side_encryption: this._serverSideEncryption,
      splunk_configuration: this._splunkConfiguration,
    };
  }
}
