// https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "code": {
        "type": "string",
        "optional": true
      },
      "create_timestamp": {
        "type": "string",
        "computed": true
      },
      "description": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "last_update_timestamp": {
        "type": "string",
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "status": {
        "type": "string",
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "version": {
        "type": "number",
        "computed": true
      }
    },
    "block_types": {
      "cloudwatch_logging_options": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "id": {
              "type": "string",
              "computed": true
            },
            "log_stream_arn": {
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
      "inputs": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "id": {
              "type": "string",
              "computed": true
            },
            "name_prefix": {
              "type": "string",
              "required": true
            },
            "starting_position_configuration": {
              "type": [
                "list",
                [
                  "object",
                  {
                    "starting_position": "string"
                  }
                ]
              ],
              "computed": true
            },
            "stream_names": {
              "type": [
                "set",
                "string"
              ],
              "computed": true
            }
          },
          "block_types": {
            "kinesis_firehose": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "resource_arn": {
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
            "kinesis_stream": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "resource_arn": {
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
            "parallelism": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "count": {
                    "type": "number",
                    "required": true
                  }
                }
              },
              "max_items": 1
            },
            "processing_configuration": {
              "nesting_mode": "list",
              "block": {
                "block_types": {
                  "lambda": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "resource_arn": {
                          "type": "string",
                          "required": true
                        },
                        "role_arn": {
                          "type": "string",
                          "required": true
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
            "schema": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "record_encoding": {
                    "type": "string",
                    "optional": true
                  }
                },
                "block_types": {
                  "record_columns": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "mapping": {
                          "type": "string",
                          "optional": true
                        },
                        "name": {
                          "type": "string",
                          "required": true
                        },
                        "sql_type": {
                          "type": "string",
                          "required": true
                        }
                      }
                    },
                    "min_items": 1
                  },
                  "record_format": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "record_format_type": {
                          "type": "string",
                          "computed": true
                        }
                      },
                      "block_types": {
                        "mapping_parameters": {
                          "nesting_mode": "list",
                          "block": {
                            "block_types": {
                              "csv": {
                                "nesting_mode": "list",
                                "block": {
                                  "attributes": {
                                    "record_column_delimiter": {
                                      "type": "string",
                                      "required": true
                                    },
                                    "record_row_delimiter": {
                                      "type": "string",
                                      "required": true
                                    }
                                  }
                                },
                                "max_items": 1
                              },
                              "json": {
                                "nesting_mode": "list",
                                "block": {
                                  "attributes": {
                                    "record_row_path": {
                                      "type": "string",
                                      "required": true
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
                    "min_items": 1,
                    "max_items": 1
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
      "outputs": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "id": {
              "type": "string",
              "computed": true
            },
            "name": {
              "type": "string",
              "required": true
            }
          },
          "block_types": {
            "kinesis_firehose": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "resource_arn": {
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
            "kinesis_stream": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "resource_arn": {
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
            "lambda": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "resource_arn": {
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
            "schema": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "record_format_type": {
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
        "max_items": 3
      },
      "reference_data_sources": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "id": {
              "type": "string",
              "computed": true
            },
            "table_name": {
              "type": "string",
              "required": true
            }
          },
          "block_types": {
            "s3": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "bucket_arn": {
                    "type": "string",
                    "required": true
                  },
                  "file_key": {
                    "type": "string",
                    "required": true
                  },
                  "role_arn": {
                    "type": "string",
                    "required": true
                  }
                }
              },
              "min_items": 1,
              "max_items": 1
            },
            "schema": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "record_encoding": {
                    "type": "string",
                    "optional": true
                  }
                },
                "block_types": {
                  "record_columns": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "mapping": {
                          "type": "string",
                          "optional": true
                        },
                        "name": {
                          "type": "string",
                          "required": true
                        },
                        "sql_type": {
                          "type": "string",
                          "required": true
                        }
                      }
                    },
                    "min_items": 1
                  },
                  "record_format": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "record_format_type": {
                          "type": "string",
                          "computed": true
                        }
                      },
                      "block_types": {
                        "mapping_parameters": {
                          "nesting_mode": "list",
                          "block": {
                            "block_types": {
                              "csv": {
                                "nesting_mode": "list",
                                "block": {
                                  "attributes": {
                                    "record_column_delimiter": {
                                      "type": "string",
                                      "required": true
                                    },
                                    "record_row_delimiter": {
                                      "type": "string",
                                      "required": true
                                    }
                                  }
                                },
                                "max_items": 1
                              },
                              "json": {
                                "nesting_mode": "list",
                                "block": {
                                  "attributes": {
                                    "record_row_path": {
                                      "type": "string",
                                      "required": true
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
                    "min_items": 1,
                    "max_items": 1
                  }
                }
              },
              "min_items": 1,
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

export interface KinesisAnalyticsApplicationConfig extends TerraformMetaArguments {
  readonly code?: string;
  readonly description?: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** cloudwatch_logging_options block */
  readonly cloudwatchLoggingOptions?: KinesisAnalyticsApplicationCloudwatchLoggingOptions[];
  /** inputs block */
  readonly inputs?: KinesisAnalyticsApplicationInputs[];
  /** outputs block */
  readonly outputs?: KinesisAnalyticsApplicationOutputs[];
  /** reference_data_sources block */
  readonly referenceDataSources?: KinesisAnalyticsApplicationReferenceDataSources[];
}
export interface KinesisAnalyticsApplicationCloudwatchLoggingOptions {
  readonly logStreamArn: string;
  readonly roleArn: string;
}
export interface KinesisAnalyticsApplicationInputsKinesisFirehose {
  readonly resourceArn: string;
  readonly roleArn: string;
}
export interface KinesisAnalyticsApplicationInputsKinesisStream {
  readonly resourceArn: string;
  readonly roleArn: string;
}
export interface KinesisAnalyticsApplicationInputsParallelism {
  readonly count: number;
}
export interface KinesisAnalyticsApplicationInputsProcessingConfigurationLambda {
  readonly resourceArn: string;
  readonly roleArn: string;
}
export interface KinesisAnalyticsApplicationInputsProcessingConfiguration {
  /** lambda block */
  readonly lambda: KinesisAnalyticsApplicationInputsProcessingConfigurationLambda[];
}
export interface KinesisAnalyticsApplicationInputsSchemaRecordColumns {
  readonly mapping?: string;
  readonly name: string;
  readonly sqlType: string;
}
export interface KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv {
  readonly recordColumnDelimiter: string;
  readonly recordRowDelimiter: string;
}
export interface KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson {
  readonly recordRowPath: string;
}
export interface KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters {
  /** csv block */
  readonly csv?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv[];
  /** json block */
  readonly json?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson[];
}
export interface KinesisAnalyticsApplicationInputsSchemaRecordFormat {
  /** mapping_parameters block */
  readonly mappingParameters?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters[];
}
export interface KinesisAnalyticsApplicationInputsSchema {
  readonly recordEncoding?: string;
  /** record_columns block */
  readonly recordColumns: KinesisAnalyticsApplicationInputsSchemaRecordColumns[];
  /** record_format block */
  readonly recordFormat: KinesisAnalyticsApplicationInputsSchemaRecordFormat[];
}
export interface KinesisAnalyticsApplicationInputs {
  readonly namePrefix: string;
  /** kinesis_firehose block */
  readonly kinesisFirehose?: KinesisAnalyticsApplicationInputsKinesisFirehose[];
  /** kinesis_stream block */
  readonly kinesisStream?: KinesisAnalyticsApplicationInputsKinesisStream[];
  /** parallelism block */
  readonly parallelism?: KinesisAnalyticsApplicationInputsParallelism[];
  /** processing_configuration block */
  readonly processingConfiguration?: KinesisAnalyticsApplicationInputsProcessingConfiguration[];
  /** schema block */
  readonly schema: KinesisAnalyticsApplicationInputsSchema[];
}
export interface KinesisAnalyticsApplicationOutputsKinesisFirehose {
  readonly resourceArn: string;
  readonly roleArn: string;
}
export interface KinesisAnalyticsApplicationOutputsKinesisStream {
  readonly resourceArn: string;
  readonly roleArn: string;
}
export interface KinesisAnalyticsApplicationOutputsLambda {
  readonly resourceArn: string;
  readonly roleArn: string;
}
export interface KinesisAnalyticsApplicationOutputsSchema {
  readonly recordFormatType?: string;
}
export interface KinesisAnalyticsApplicationOutputs {
  readonly name: string;
  /** kinesis_firehose block */
  readonly kinesisFirehose?: KinesisAnalyticsApplicationOutputsKinesisFirehose[];
  /** kinesis_stream block */
  readonly kinesisStream?: KinesisAnalyticsApplicationOutputsKinesisStream[];
  /** lambda block */
  readonly lambda?: KinesisAnalyticsApplicationOutputsLambda[];
  /** schema block */
  readonly schema: KinesisAnalyticsApplicationOutputsSchema[];
}
export interface KinesisAnalyticsApplicationReferenceDataSourcesS3 {
  readonly bucketArn: string;
  readonly fileKey: string;
  readonly roleArn: string;
}
export interface KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns {
  readonly mapping?: string;
  readonly name: string;
  readonly sqlType: string;
}
export interface KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv {
  readonly recordColumnDelimiter: string;
  readonly recordRowDelimiter: string;
}
export interface KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson {
  readonly recordRowPath: string;
}
export interface KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters {
  /** csv block */
  readonly csv?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv[];
  /** json block */
  readonly json?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson[];
}
export interface KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat {
  /** mapping_parameters block */
  readonly mappingParameters?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters[];
}
export interface KinesisAnalyticsApplicationReferenceDataSourcesSchema {
  readonly recordEncoding?: string;
  /** record_columns block */
  readonly recordColumns: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns[];
  /** record_format block */
  readonly recordFormat: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat[];
}
export interface KinesisAnalyticsApplicationReferenceDataSources {
  readonly tableName: string;
  /** s3 block */
  readonly s3: KinesisAnalyticsApplicationReferenceDataSourcesS3[];
  /** schema block */
  readonly schema: KinesisAnalyticsApplicationReferenceDataSourcesSchema[];
}

// Resource

export class KinesisAnalyticsApplication extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: KinesisAnalyticsApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_kinesis_analytics_application',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._code = config.code;
    this._description = config.description;
    this._name = config.name;
    this._tags = config.tags;
    this._cloudwatchLoggingOptions = config.cloudwatchLoggingOptions;
    this._inputs = config.inputs;
    this._outputs = config.outputs;
    this._referenceDataSources = config.referenceDataSources;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // code - computed: false, optional: true, required: false
  private _code?: string;
  public get code() {
    return this._code;
  }
  public set code(value: string | undefined) {
    this._code = value;
  }

  // create_timestamp - computed: true, optional: false, required: true
  public get createTimestamp() {
    return this.getStringAttribute('create_timestamp');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // last_update_timestamp - computed: true, optional: false, required: true
  public get lastUpdateTimestamp() {
    return this.getStringAttribute('last_update_timestamp');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getNumberAttribute('version');
  }

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions?: KinesisAnalyticsApplicationCloudwatchLoggingOptions[];
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }
  public set cloudwatchLoggingOptions(value: KinesisAnalyticsApplicationCloudwatchLoggingOptions[] | undefined) {
    this._cloudwatchLoggingOptions = value;
  }

  // inputs - computed: false, optional: true, required: false
  private _inputs?: KinesisAnalyticsApplicationInputs[];
  public get inputs() {
    return this._inputs;
  }
  public set inputs(value: KinesisAnalyticsApplicationInputs[] | undefined) {
    this._inputs = value;
  }

  // outputs - computed: false, optional: true, required: false
  private _outputs?: KinesisAnalyticsApplicationOutputs[];
  public get outputs() {
    return this._outputs;
  }
  public set outputs(value: KinesisAnalyticsApplicationOutputs[] | undefined) {
    this._outputs = value;
  }

  // reference_data_sources - computed: false, optional: true, required: false
  private _referenceDataSources?: KinesisAnalyticsApplicationReferenceDataSources[];
  public get referenceDataSources() {
    return this._referenceDataSources;
  }
  public set referenceDataSources(value: KinesisAnalyticsApplicationReferenceDataSources[] | undefined) {
    this._referenceDataSources = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      code: this._code,
      description: this._description,
      name: this._name,
      tags: this._tags,
      cloudwatch_logging_options: this._cloudwatchLoggingOptions,
      inputs: this._inputs,
      outputs: this._outputs,
      reference_data_sources: this._referenceDataSources,
    };
  }
}
