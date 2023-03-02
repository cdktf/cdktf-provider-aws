# `cloudtrail` Submodule <a name="`cloudtrail` Submodule" id="@cdktf/provider-aws.cloudtrail"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Cloudtrail <a name="Cloudtrail" id="@cdktf/provider-aws.cloudtrail.Cloudtrail"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail aws_cloudtrail}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudtrail

cloudtrail.Cloudtrail(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  s3_bucket_name: str,
  advanced_event_selector: typing.Union[IResolvable, typing.List[CloudtrailAdvancedEventSelector]] = None,
  cloud_watch_logs_group_arn: str = None,
  cloud_watch_logs_role_arn: str = None,
  enable_log_file_validation: typing.Union[bool, IResolvable] = None,
  enable_logging: typing.Union[bool, IResolvable] = None,
  event_selector: typing.Union[IResolvable, typing.List[CloudtrailEventSelector]] = None,
  id: str = None,
  include_global_service_events: typing.Union[bool, IResolvable] = None,
  insight_selector: typing.Union[IResolvable, typing.List[CloudtrailInsightSelector]] = None,
  is_multi_region_trail: typing.Union[bool, IResolvable] = None,
  is_organization_trail: typing.Union[bool, IResolvable] = None,
  kms_key_id: str = None,
  s3_key_prefix: str = None,
  sns_topic_name: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#name Cloudtrail#name}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#s3_bucket_name Cloudtrail#s3_bucket_name}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.advancedEventSelector">advanced_event_selector</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector">CloudtrailAdvancedEventSelector</a>]]</code> | advanced_event_selector block. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.cloudWatchLogsGroupArn">cloud_watch_logs_group_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#cloud_watch_logs_group_arn Cloudtrail#cloud_watch_logs_group_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.cloudWatchLogsRoleArn">cloud_watch_logs_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#cloud_watch_logs_role_arn Cloudtrail#cloud_watch_logs_role_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.enableLogFileValidation">enable_log_file_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#enable_log_file_validation Cloudtrail#enable_log_file_validation}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.enableLogging">enable_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#enable_logging Cloudtrail#enable_logging}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.eventSelector">event_selector</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector">CloudtrailEventSelector</a>]]</code> | event_selector block. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#id Cloudtrail#id}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.includeGlobalServiceEvents">include_global_service_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#include_global_service_events Cloudtrail#include_global_service_events}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.insightSelector">insight_selector</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelector">CloudtrailInsightSelector</a>]]</code> | insight_selector block. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.isMultiRegionTrail">is_multi_region_trail</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#is_multi_region_trail Cloudtrail#is_multi_region_trail}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.isOrganizationTrail">is_organization_trail</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#is_organization_trail Cloudtrail#is_organization_trail}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#kms_key_id Cloudtrail#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.s3KeyPrefix">s3_key_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#s3_key_prefix Cloudtrail#s3_key_prefix}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.snsTopicName">sns_topic_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#sns_topic_name Cloudtrail#sns_topic_name}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#tags Cloudtrail#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#tags_all Cloudtrail#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#name Cloudtrail#name}.

---

##### `s3_bucket_name`<sup>Required</sup> <a name="s3_bucket_name" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.s3BucketName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#s3_bucket_name Cloudtrail#s3_bucket_name}.

---

##### `advanced_event_selector`<sup>Optional</sup> <a name="advanced_event_selector" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.advancedEventSelector"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector">CloudtrailAdvancedEventSelector</a>]]

advanced_event_selector block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#advanced_event_selector Cloudtrail#advanced_event_selector}

---

##### `cloud_watch_logs_group_arn`<sup>Optional</sup> <a name="cloud_watch_logs_group_arn" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.cloudWatchLogsGroupArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#cloud_watch_logs_group_arn Cloudtrail#cloud_watch_logs_group_arn}.

---

##### `cloud_watch_logs_role_arn`<sup>Optional</sup> <a name="cloud_watch_logs_role_arn" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.cloudWatchLogsRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#cloud_watch_logs_role_arn Cloudtrail#cloud_watch_logs_role_arn}.

---

##### `enable_log_file_validation`<sup>Optional</sup> <a name="enable_log_file_validation" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.enableLogFileValidation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#enable_log_file_validation Cloudtrail#enable_log_file_validation}.

---

##### `enable_logging`<sup>Optional</sup> <a name="enable_logging" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.enableLogging"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#enable_logging Cloudtrail#enable_logging}.

---

##### `event_selector`<sup>Optional</sup> <a name="event_selector" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.eventSelector"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector">CloudtrailEventSelector</a>]]

event_selector block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#event_selector Cloudtrail#event_selector}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#id Cloudtrail#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_global_service_events`<sup>Optional</sup> <a name="include_global_service_events" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.includeGlobalServiceEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#include_global_service_events Cloudtrail#include_global_service_events}.

---

##### `insight_selector`<sup>Optional</sup> <a name="insight_selector" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.insightSelector"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelector">CloudtrailInsightSelector</a>]]

insight_selector block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#insight_selector Cloudtrail#insight_selector}

---

##### `is_multi_region_trail`<sup>Optional</sup> <a name="is_multi_region_trail" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.isMultiRegionTrail"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#is_multi_region_trail Cloudtrail#is_multi_region_trail}.

---

##### `is_organization_trail`<sup>Optional</sup> <a name="is_organization_trail" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.isOrganizationTrail"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#is_organization_trail Cloudtrail#is_organization_trail}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#kms_key_id Cloudtrail#kms_key_id}.

---

##### `s3_key_prefix`<sup>Optional</sup> <a name="s3_key_prefix" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.s3KeyPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#s3_key_prefix Cloudtrail#s3_key_prefix}.

---

##### `sns_topic_name`<sup>Optional</sup> <a name="sns_topic_name" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.snsTopicName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#sns_topic_name Cloudtrail#sns_topic_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#tags Cloudtrail#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#tags_all Cloudtrail#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.putAdvancedEventSelector">put_advanced_event_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.putEventSelector">put_event_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.putInsightSelector">put_insight_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetAdvancedEventSelector">reset_advanced_event_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetCloudWatchLogsGroupArn">reset_cloud_watch_logs_group_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetCloudWatchLogsRoleArn">reset_cloud_watch_logs_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetEnableLogFileValidation">reset_enable_log_file_validation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetEnableLogging">reset_enable_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetEventSelector">reset_event_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetIncludeGlobalServiceEvents">reset_include_global_service_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetInsightSelector">reset_insight_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetIsMultiRegionTrail">reset_is_multi_region_trail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetIsOrganizationTrail">reset_is_organization_trail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetS3KeyPrefix">reset_s3_key_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetSnsTopicName">reset_sns_topic_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_advanced_event_selector` <a name="put_advanced_event_selector" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.putAdvancedEventSelector"></a>

```python
def put_advanced_event_selector(
  value: typing.Union[IResolvable, typing.List[CloudtrailAdvancedEventSelector]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.putAdvancedEventSelector.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector">CloudtrailAdvancedEventSelector</a>]]

---

##### `put_event_selector` <a name="put_event_selector" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.putEventSelector"></a>

```python
def put_event_selector(
  value: typing.Union[IResolvable, typing.List[CloudtrailEventSelector]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.putEventSelector.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector">CloudtrailEventSelector</a>]]

---

##### `put_insight_selector` <a name="put_insight_selector" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.putInsightSelector"></a>

```python
def put_insight_selector(
  value: typing.Union[IResolvable, typing.List[CloudtrailInsightSelector]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.putInsightSelector.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelector">CloudtrailInsightSelector</a>]]

---

##### `reset_advanced_event_selector` <a name="reset_advanced_event_selector" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetAdvancedEventSelector"></a>

```python
def reset_advanced_event_selector() -> None
```

##### `reset_cloud_watch_logs_group_arn` <a name="reset_cloud_watch_logs_group_arn" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetCloudWatchLogsGroupArn"></a>

```python
def reset_cloud_watch_logs_group_arn() -> None
```

##### `reset_cloud_watch_logs_role_arn` <a name="reset_cloud_watch_logs_role_arn" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetCloudWatchLogsRoleArn"></a>

```python
def reset_cloud_watch_logs_role_arn() -> None
```

##### `reset_enable_log_file_validation` <a name="reset_enable_log_file_validation" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetEnableLogFileValidation"></a>

```python
def reset_enable_log_file_validation() -> None
```

##### `reset_enable_logging` <a name="reset_enable_logging" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetEnableLogging"></a>

```python
def reset_enable_logging() -> None
```

##### `reset_event_selector` <a name="reset_event_selector" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetEventSelector"></a>

```python
def reset_event_selector() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_include_global_service_events` <a name="reset_include_global_service_events" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetIncludeGlobalServiceEvents"></a>

```python
def reset_include_global_service_events() -> None
```

##### `reset_insight_selector` <a name="reset_insight_selector" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetInsightSelector"></a>

```python
def reset_insight_selector() -> None
```

##### `reset_is_multi_region_trail` <a name="reset_is_multi_region_trail" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetIsMultiRegionTrail"></a>

```python
def reset_is_multi_region_trail() -> None
```

##### `reset_is_organization_trail` <a name="reset_is_organization_trail" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetIsOrganizationTrail"></a>

```python
def reset_is_organization_trail() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_s3_key_prefix` <a name="reset_s3_key_prefix" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetS3KeyPrefix"></a>

```python
def reset_s3_key_prefix() -> None
```

##### `reset_sns_topic_name` <a name="reset_sns_topic_name" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetSnsTopicName"></a>

```python
def reset_sns_topic_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import cloudtrail

cloudtrail.Cloudtrail.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import cloudtrail

cloudtrail.Cloudtrail.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import cloudtrail

cloudtrail.Cloudtrail.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.advancedEventSelector">advanced_event_selector</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList">CloudtrailAdvancedEventSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.eventSelector">event_selector</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList">CloudtrailEventSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.homeRegion">home_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.insightSelector">insight_selector</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList">CloudtrailInsightSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.advancedEventSelectorInput">advanced_event_selector_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector">CloudtrailAdvancedEventSelector</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.cloudWatchLogsGroupArnInput">cloud_watch_logs_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.cloudWatchLogsRoleArnInput">cloud_watch_logs_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.enableLogFileValidationInput">enable_log_file_validation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.enableLoggingInput">enable_logging_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.eventSelectorInput">event_selector_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector">CloudtrailEventSelector</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.includeGlobalServiceEventsInput">include_global_service_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.insightSelectorInput">insight_selector_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelector">CloudtrailInsightSelector</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.isMultiRegionTrailInput">is_multi_region_trail_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.isOrganizationTrailInput">is_organization_trail_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.s3BucketNameInput">s3_bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.s3KeyPrefixInput">s3_key_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.snsTopicNameInput">sns_topic_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.cloudWatchLogsGroupArn">cloud_watch_logs_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.cloudWatchLogsRoleArn">cloud_watch_logs_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.enableLogFileValidation">enable_log_file_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.enableLogging">enable_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.includeGlobalServiceEvents">include_global_service_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.isMultiRegionTrail">is_multi_region_trail</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.isOrganizationTrail">is_organization_trail</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.s3KeyPrefix">s3_key_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.snsTopicName">sns_topic_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `advanced_event_selector`<sup>Required</sup> <a name="advanced_event_selector" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.advancedEventSelector"></a>

```python
advanced_event_selector: CloudtrailAdvancedEventSelectorList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList">CloudtrailAdvancedEventSelectorList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `event_selector`<sup>Required</sup> <a name="event_selector" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.eventSelector"></a>

```python
event_selector: CloudtrailEventSelectorList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList">CloudtrailEventSelectorList</a>

---

##### `home_region`<sup>Required</sup> <a name="home_region" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.homeRegion"></a>

```python
home_region: str
```

- *Type:* str

---

##### `insight_selector`<sup>Required</sup> <a name="insight_selector" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.insightSelector"></a>

```python
insight_selector: CloudtrailInsightSelectorList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList">CloudtrailInsightSelectorList</a>

---

##### `advanced_event_selector_input`<sup>Optional</sup> <a name="advanced_event_selector_input" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.advancedEventSelectorInput"></a>

```python
advanced_event_selector_input: typing.Union[IResolvable, typing.List[CloudtrailAdvancedEventSelector]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector">CloudtrailAdvancedEventSelector</a>]]

---

##### `cloud_watch_logs_group_arn_input`<sup>Optional</sup> <a name="cloud_watch_logs_group_arn_input" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.cloudWatchLogsGroupArnInput"></a>

```python
cloud_watch_logs_group_arn_input: str
```

- *Type:* str

---

##### `cloud_watch_logs_role_arn_input`<sup>Optional</sup> <a name="cloud_watch_logs_role_arn_input" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.cloudWatchLogsRoleArnInput"></a>

```python
cloud_watch_logs_role_arn_input: str
```

- *Type:* str

---

##### `enable_log_file_validation_input`<sup>Optional</sup> <a name="enable_log_file_validation_input" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.enableLogFileValidationInput"></a>

```python
enable_log_file_validation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_logging_input`<sup>Optional</sup> <a name="enable_logging_input" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.enableLoggingInput"></a>

```python
enable_logging_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `event_selector_input`<sup>Optional</sup> <a name="event_selector_input" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.eventSelectorInput"></a>

```python
event_selector_input: typing.Union[IResolvable, typing.List[CloudtrailEventSelector]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector">CloudtrailEventSelector</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `include_global_service_events_input`<sup>Optional</sup> <a name="include_global_service_events_input" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.includeGlobalServiceEventsInput"></a>

```python
include_global_service_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `insight_selector_input`<sup>Optional</sup> <a name="insight_selector_input" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.insightSelectorInput"></a>

```python
insight_selector_input: typing.Union[IResolvable, typing.List[CloudtrailInsightSelector]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelector">CloudtrailInsightSelector</a>]]

---

##### `is_multi_region_trail_input`<sup>Optional</sup> <a name="is_multi_region_trail_input" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.isMultiRegionTrailInput"></a>

```python
is_multi_region_trail_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_organization_trail_input`<sup>Optional</sup> <a name="is_organization_trail_input" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.isOrganizationTrailInput"></a>

```python
is_organization_trail_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `s3_bucket_name_input`<sup>Optional</sup> <a name="s3_bucket_name_input" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.s3BucketNameInput"></a>

```python
s3_bucket_name_input: str
```

- *Type:* str

---

##### `s3_key_prefix_input`<sup>Optional</sup> <a name="s3_key_prefix_input" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.s3KeyPrefixInput"></a>

```python
s3_key_prefix_input: str
```

- *Type:* str

---

##### `sns_topic_name_input`<sup>Optional</sup> <a name="sns_topic_name_input" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.snsTopicNameInput"></a>

```python
sns_topic_name_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `cloud_watch_logs_group_arn`<sup>Required</sup> <a name="cloud_watch_logs_group_arn" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.cloudWatchLogsGroupArn"></a>

```python
cloud_watch_logs_group_arn: str
```

- *Type:* str

---

##### `cloud_watch_logs_role_arn`<sup>Required</sup> <a name="cloud_watch_logs_role_arn" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.cloudWatchLogsRoleArn"></a>

```python
cloud_watch_logs_role_arn: str
```

- *Type:* str

---

##### `enable_log_file_validation`<sup>Required</sup> <a name="enable_log_file_validation" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.enableLogFileValidation"></a>

```python
enable_log_file_validation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_logging`<sup>Required</sup> <a name="enable_logging" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.enableLogging"></a>

```python
enable_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `include_global_service_events`<sup>Required</sup> <a name="include_global_service_events" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.includeGlobalServiceEvents"></a>

```python
include_global_service_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_multi_region_trail`<sup>Required</sup> <a name="is_multi_region_trail" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.isMultiRegionTrail"></a>

```python
is_multi_region_trail: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_organization_trail`<sup>Required</sup> <a name="is_organization_trail" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.isOrganizationTrail"></a>

```python
is_organization_trail: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `s3_bucket_name`<sup>Required</sup> <a name="s3_bucket_name" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.s3BucketName"></a>

```python
s3_bucket_name: str
```

- *Type:* str

---

##### `s3_key_prefix`<sup>Required</sup> <a name="s3_key_prefix" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.s3KeyPrefix"></a>

```python
s3_key_prefix: str
```

- *Type:* str

---

##### `sns_topic_name`<sup>Required</sup> <a name="sns_topic_name" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.snsTopicName"></a>

```python
sns_topic_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudtrailAdvancedEventSelector <a name="CloudtrailAdvancedEventSelector" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudtrail

cloudtrail.CloudtrailAdvancedEventSelector(
  field_selector: typing.Union[IResolvable, typing.List[CloudtrailAdvancedEventSelectorFieldSelector]],
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector.property.fieldSelector">field_selector</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector">CloudtrailAdvancedEventSelectorFieldSelector</a>]]</code> | field_selector block. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#name Cloudtrail#name}. |

---

##### `field_selector`<sup>Required</sup> <a name="field_selector" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector.property.fieldSelector"></a>

```python
field_selector: typing.Union[IResolvable, typing.List[CloudtrailAdvancedEventSelectorFieldSelector]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector">CloudtrailAdvancedEventSelectorFieldSelector</a>]]

field_selector block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#field_selector Cloudtrail#field_selector}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#name Cloudtrail#name}.

---

### CloudtrailAdvancedEventSelectorFieldSelector <a name="CloudtrailAdvancedEventSelectorFieldSelector" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudtrail

cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector(
  field: str,
  ends_with: typing.List[str] = None,
  equal_to: typing.List[str] = None,
  not_ends_with: typing.List[str] = None,
  not_equals: typing.List[str] = None,
  not_starts_with: typing.List[str] = None,
  starts_with: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.field">field</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#field Cloudtrail#field}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.endsWith">ends_with</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#ends_with Cloudtrail#ends_with}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.equalTo">equal_to</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#equals Cloudtrail#equals}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.notEndsWith">not_ends_with</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#not_ends_with Cloudtrail#not_ends_with}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.notEquals">not_equals</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#not_equals Cloudtrail#not_equals}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.notStartsWith">not_starts_with</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#not_starts_with Cloudtrail#not_starts_with}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.startsWith">starts_with</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#starts_with Cloudtrail#starts_with}. |

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.field"></a>

```python
field: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#field Cloudtrail#field}.

---

##### `ends_with`<sup>Optional</sup> <a name="ends_with" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.endsWith"></a>

```python
ends_with: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#ends_with Cloudtrail#ends_with}.

---

##### `equal_to`<sup>Optional</sup> <a name="equal_to" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.equalTo"></a>

```python
equal_to: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#equals Cloudtrail#equals}.

---

##### `not_ends_with`<sup>Optional</sup> <a name="not_ends_with" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.notEndsWith"></a>

```python
not_ends_with: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#not_ends_with Cloudtrail#not_ends_with}.

---

##### `not_equals`<sup>Optional</sup> <a name="not_equals" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.notEquals"></a>

```python
not_equals: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#not_equals Cloudtrail#not_equals}.

---

##### `not_starts_with`<sup>Optional</sup> <a name="not_starts_with" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.notStartsWith"></a>

```python
not_starts_with: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#not_starts_with Cloudtrail#not_starts_with}.

---

##### `starts_with`<sup>Optional</sup> <a name="starts_with" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.startsWith"></a>

```python
starts_with: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#starts_with Cloudtrail#starts_with}.

---

### CloudtrailConfig <a name="CloudtrailConfig" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudtrail

cloudtrail.CloudtrailConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  s3_bucket_name: str,
  advanced_event_selector: typing.Union[IResolvable, typing.List[CloudtrailAdvancedEventSelector]] = None,
  cloud_watch_logs_group_arn: str = None,
  cloud_watch_logs_role_arn: str = None,
  enable_log_file_validation: typing.Union[bool, IResolvable] = None,
  enable_logging: typing.Union[bool, IResolvable] = None,
  event_selector: typing.Union[IResolvable, typing.List[CloudtrailEventSelector]] = None,
  id: str = None,
  include_global_service_events: typing.Union[bool, IResolvable] = None,
  insight_selector: typing.Union[IResolvable, typing.List[CloudtrailInsightSelector]] = None,
  is_multi_region_trail: typing.Union[bool, IResolvable] = None,
  is_organization_trail: typing.Union[bool, IResolvable] = None,
  kms_key_id: str = None,
  s3_key_prefix: str = None,
  sns_topic_name: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#name Cloudtrail#name}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#s3_bucket_name Cloudtrail#s3_bucket_name}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.advancedEventSelector">advanced_event_selector</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector">CloudtrailAdvancedEventSelector</a>]]</code> | advanced_event_selector block. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.cloudWatchLogsGroupArn">cloud_watch_logs_group_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#cloud_watch_logs_group_arn Cloudtrail#cloud_watch_logs_group_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.cloudWatchLogsRoleArn">cloud_watch_logs_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#cloud_watch_logs_role_arn Cloudtrail#cloud_watch_logs_role_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.enableLogFileValidation">enable_log_file_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#enable_log_file_validation Cloudtrail#enable_log_file_validation}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.enableLogging">enable_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#enable_logging Cloudtrail#enable_logging}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.eventSelector">event_selector</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector">CloudtrailEventSelector</a>]]</code> | event_selector block. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#id Cloudtrail#id}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.includeGlobalServiceEvents">include_global_service_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#include_global_service_events Cloudtrail#include_global_service_events}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.insightSelector">insight_selector</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelector">CloudtrailInsightSelector</a>]]</code> | insight_selector block. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.isMultiRegionTrail">is_multi_region_trail</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#is_multi_region_trail Cloudtrail#is_multi_region_trail}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.isOrganizationTrail">is_organization_trail</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#is_organization_trail Cloudtrail#is_organization_trail}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#kms_key_id Cloudtrail#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.s3KeyPrefix">s3_key_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#s3_key_prefix Cloudtrail#s3_key_prefix}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.snsTopicName">sns_topic_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#sns_topic_name Cloudtrail#sns_topic_name}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#tags Cloudtrail#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#tags_all Cloudtrail#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#name Cloudtrail#name}.

---

##### `s3_bucket_name`<sup>Required</sup> <a name="s3_bucket_name" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.s3BucketName"></a>

```python
s3_bucket_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#s3_bucket_name Cloudtrail#s3_bucket_name}.

---

##### `advanced_event_selector`<sup>Optional</sup> <a name="advanced_event_selector" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.advancedEventSelector"></a>

```python
advanced_event_selector: typing.Union[IResolvable, typing.List[CloudtrailAdvancedEventSelector]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector">CloudtrailAdvancedEventSelector</a>]]

advanced_event_selector block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#advanced_event_selector Cloudtrail#advanced_event_selector}

---

##### `cloud_watch_logs_group_arn`<sup>Optional</sup> <a name="cloud_watch_logs_group_arn" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.cloudWatchLogsGroupArn"></a>

```python
cloud_watch_logs_group_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#cloud_watch_logs_group_arn Cloudtrail#cloud_watch_logs_group_arn}.

---

##### `cloud_watch_logs_role_arn`<sup>Optional</sup> <a name="cloud_watch_logs_role_arn" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.cloudWatchLogsRoleArn"></a>

```python
cloud_watch_logs_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#cloud_watch_logs_role_arn Cloudtrail#cloud_watch_logs_role_arn}.

---

##### `enable_log_file_validation`<sup>Optional</sup> <a name="enable_log_file_validation" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.enableLogFileValidation"></a>

```python
enable_log_file_validation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#enable_log_file_validation Cloudtrail#enable_log_file_validation}.

---

##### `enable_logging`<sup>Optional</sup> <a name="enable_logging" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.enableLogging"></a>

```python
enable_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#enable_logging Cloudtrail#enable_logging}.

---

##### `event_selector`<sup>Optional</sup> <a name="event_selector" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.eventSelector"></a>

```python
event_selector: typing.Union[IResolvable, typing.List[CloudtrailEventSelector]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector">CloudtrailEventSelector</a>]]

event_selector block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#event_selector Cloudtrail#event_selector}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#id Cloudtrail#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_global_service_events`<sup>Optional</sup> <a name="include_global_service_events" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.includeGlobalServiceEvents"></a>

```python
include_global_service_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#include_global_service_events Cloudtrail#include_global_service_events}.

---

##### `insight_selector`<sup>Optional</sup> <a name="insight_selector" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.insightSelector"></a>

```python
insight_selector: typing.Union[IResolvable, typing.List[CloudtrailInsightSelector]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelector">CloudtrailInsightSelector</a>]]

insight_selector block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#insight_selector Cloudtrail#insight_selector}

---

##### `is_multi_region_trail`<sup>Optional</sup> <a name="is_multi_region_trail" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.isMultiRegionTrail"></a>

```python
is_multi_region_trail: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#is_multi_region_trail Cloudtrail#is_multi_region_trail}.

---

##### `is_organization_trail`<sup>Optional</sup> <a name="is_organization_trail" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.isOrganizationTrail"></a>

```python
is_organization_trail: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#is_organization_trail Cloudtrail#is_organization_trail}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#kms_key_id Cloudtrail#kms_key_id}.

---

##### `s3_key_prefix`<sup>Optional</sup> <a name="s3_key_prefix" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.s3KeyPrefix"></a>

```python
s3_key_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#s3_key_prefix Cloudtrail#s3_key_prefix}.

---

##### `sns_topic_name`<sup>Optional</sup> <a name="sns_topic_name" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.snsTopicName"></a>

```python
sns_topic_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#sns_topic_name Cloudtrail#sns_topic_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#tags Cloudtrail#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#tags_all Cloudtrail#tags_all}.

---

### CloudtrailEventSelector <a name="CloudtrailEventSelector" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudtrail

cloudtrail.CloudtrailEventSelector(
  data_resource: typing.Union[IResolvable, typing.List[CloudtrailEventSelectorDataResource]] = None,
  exclude_management_event_sources: typing.List[str] = None,
  include_management_events: typing.Union[bool, IResolvable] = None,
  read_write_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector.property.dataResource">data_resource</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource">CloudtrailEventSelectorDataResource</a>]]</code> | data_resource block. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector.property.excludeManagementEventSources">exclude_management_event_sources</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#exclude_management_event_sources Cloudtrail#exclude_management_event_sources}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector.property.includeManagementEvents">include_management_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#include_management_events Cloudtrail#include_management_events}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector.property.readWriteType">read_write_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#read_write_type Cloudtrail#read_write_type}. |

---

##### `data_resource`<sup>Optional</sup> <a name="data_resource" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector.property.dataResource"></a>

```python
data_resource: typing.Union[IResolvable, typing.List[CloudtrailEventSelectorDataResource]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource">CloudtrailEventSelectorDataResource</a>]]

data_resource block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#data_resource Cloudtrail#data_resource}

---

##### `exclude_management_event_sources`<sup>Optional</sup> <a name="exclude_management_event_sources" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector.property.excludeManagementEventSources"></a>

```python
exclude_management_event_sources: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#exclude_management_event_sources Cloudtrail#exclude_management_event_sources}.

---

##### `include_management_events`<sup>Optional</sup> <a name="include_management_events" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector.property.includeManagementEvents"></a>

```python
include_management_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#include_management_events Cloudtrail#include_management_events}.

---

##### `read_write_type`<sup>Optional</sup> <a name="read_write_type" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector.property.readWriteType"></a>

```python
read_write_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#read_write_type Cloudtrail#read_write_type}.

---

### CloudtrailEventSelectorDataResource <a name="CloudtrailEventSelectorDataResource" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudtrail

cloudtrail.CloudtrailEventSelectorDataResource(
  type: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#type Cloudtrail#type}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#values Cloudtrail#values}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#type Cloudtrail#type}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#values Cloudtrail#values}.

---

### CloudtrailInsightSelector <a name="CloudtrailInsightSelector" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelector.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudtrail

cloudtrail.CloudtrailInsightSelector(
  insight_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelector.property.insightType">insight_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#insight_type Cloudtrail#insight_type}. |

---

##### `insight_type`<sup>Required</sup> <a name="insight_type" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelector.property.insightType"></a>

```python
insight_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#insight_type Cloudtrail#insight_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudtrailAdvancedEventSelectorFieldSelectorList <a name="CloudtrailAdvancedEventSelectorFieldSelectorList" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudtrail

cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudtrailAdvancedEventSelectorFieldSelectorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector">CloudtrailAdvancedEventSelectorFieldSelector</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudtrailAdvancedEventSelectorFieldSelector]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector">CloudtrailAdvancedEventSelectorFieldSelector</a>]]

---


### CloudtrailAdvancedEventSelectorFieldSelectorOutputReference <a name="CloudtrailAdvancedEventSelectorFieldSelectorOutputReference" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudtrail

cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resetEndsWith">reset_ends_with</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resetEqualTo">reset_equal_to</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resetNotEndsWith">reset_not_ends_with</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resetNotEquals">reset_not_equals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resetNotStartsWith">reset_not_starts_with</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resetStartsWith">reset_starts_with</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ends_with` <a name="reset_ends_with" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resetEndsWith"></a>

```python
def reset_ends_with() -> None
```

##### `reset_equal_to` <a name="reset_equal_to" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resetEqualTo"></a>

```python
def reset_equal_to() -> None
```

##### `reset_not_ends_with` <a name="reset_not_ends_with" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resetNotEndsWith"></a>

```python
def reset_not_ends_with() -> None
```

##### `reset_not_equals` <a name="reset_not_equals" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resetNotEquals"></a>

```python
def reset_not_equals() -> None
```

##### `reset_not_starts_with` <a name="reset_not_starts_with" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resetNotStartsWith"></a>

```python
def reset_not_starts_with() -> None
```

##### `reset_starts_with` <a name="reset_starts_with" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resetStartsWith"></a>

```python
def reset_starts_with() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.endsWithInput">ends_with_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.equalToInput">equal_to_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.fieldInput">field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.notEndsWithInput">not_ends_with_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.notEqualsInput">not_equals_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.notStartsWithInput">not_starts_with_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.startsWithInput">starts_with_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.endsWith">ends_with</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.equalTo">equal_to</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.field">field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.notEndsWith">not_ends_with</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.notEquals">not_equals</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.notStartsWith">not_starts_with</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.startsWith">starts_with</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector">CloudtrailAdvancedEventSelectorFieldSelector</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ends_with_input`<sup>Optional</sup> <a name="ends_with_input" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.endsWithInput"></a>

```python
ends_with_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `equal_to_input`<sup>Optional</sup> <a name="equal_to_input" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.equalToInput"></a>

```python
equal_to_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `field_input`<sup>Optional</sup> <a name="field_input" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.fieldInput"></a>

```python
field_input: str
```

- *Type:* str

---

##### `not_ends_with_input`<sup>Optional</sup> <a name="not_ends_with_input" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.notEndsWithInput"></a>

```python
not_ends_with_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `not_equals_input`<sup>Optional</sup> <a name="not_equals_input" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.notEqualsInput"></a>

```python
not_equals_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `not_starts_with_input`<sup>Optional</sup> <a name="not_starts_with_input" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.notStartsWithInput"></a>

```python
not_starts_with_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `starts_with_input`<sup>Optional</sup> <a name="starts_with_input" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.startsWithInput"></a>

```python
starts_with_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ends_with`<sup>Required</sup> <a name="ends_with" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.endsWith"></a>

```python
ends_with: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `equal_to`<sup>Required</sup> <a name="equal_to" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.equalTo"></a>

```python
equal_to: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.field"></a>

```python
field: str
```

- *Type:* str

---

##### `not_ends_with`<sup>Required</sup> <a name="not_ends_with" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.notEndsWith"></a>

```python
not_ends_with: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `not_equals`<sup>Required</sup> <a name="not_equals" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.notEquals"></a>

```python
not_equals: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `not_starts_with`<sup>Required</sup> <a name="not_starts_with" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.notStartsWith"></a>

```python
not_starts_with: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `starts_with`<sup>Required</sup> <a name="starts_with" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.startsWith"></a>

```python
starts_with: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudtrailAdvancedEventSelectorFieldSelector, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector">CloudtrailAdvancedEventSelectorFieldSelector</a>, cdktf.IResolvable]

---


### CloudtrailAdvancedEventSelectorList <a name="CloudtrailAdvancedEventSelectorList" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudtrail

cloudtrail.CloudtrailAdvancedEventSelectorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudtrailAdvancedEventSelectorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector">CloudtrailAdvancedEventSelector</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudtrailAdvancedEventSelector]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector">CloudtrailAdvancedEventSelector</a>]]

---


### CloudtrailAdvancedEventSelectorOutputReference <a name="CloudtrailAdvancedEventSelectorOutputReference" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudtrail

cloudtrail.CloudtrailAdvancedEventSelectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.putFieldSelector">put_field_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_field_selector` <a name="put_field_selector" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.putFieldSelector"></a>

```python
def put_field_selector(
  value: typing.Union[IResolvable, typing.List[CloudtrailAdvancedEventSelectorFieldSelector]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.putFieldSelector.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector">CloudtrailAdvancedEventSelectorFieldSelector</a>]]

---

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.fieldSelector">field_selector</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList">CloudtrailAdvancedEventSelectorFieldSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.fieldSelectorInput">field_selector_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector">CloudtrailAdvancedEventSelectorFieldSelector</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector">CloudtrailAdvancedEventSelector</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_selector`<sup>Required</sup> <a name="field_selector" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.fieldSelector"></a>

```python
field_selector: CloudtrailAdvancedEventSelectorFieldSelectorList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList">CloudtrailAdvancedEventSelectorFieldSelectorList</a>

---

##### `field_selector_input`<sup>Optional</sup> <a name="field_selector_input" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.fieldSelectorInput"></a>

```python
field_selector_input: typing.Union[IResolvable, typing.List[CloudtrailAdvancedEventSelectorFieldSelector]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector">CloudtrailAdvancedEventSelectorFieldSelector</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudtrailAdvancedEventSelector, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector">CloudtrailAdvancedEventSelector</a>, cdktf.IResolvable]

---


### CloudtrailEventSelectorDataResourceList <a name="CloudtrailEventSelectorDataResourceList" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudtrail

cloudtrail.CloudtrailEventSelectorDataResourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudtrailEventSelectorDataResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource">CloudtrailEventSelectorDataResource</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudtrailEventSelectorDataResource]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource">CloudtrailEventSelectorDataResource</a>]]

---


### CloudtrailEventSelectorDataResourceOutputReference <a name="CloudtrailEventSelectorDataResourceOutputReference" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudtrail

cloudtrail.CloudtrailEventSelectorDataResourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource">CloudtrailEventSelectorDataResource</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudtrailEventSelectorDataResource, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource">CloudtrailEventSelectorDataResource</a>, cdktf.IResolvable]

---


### CloudtrailEventSelectorList <a name="CloudtrailEventSelectorList" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudtrail

cloudtrail.CloudtrailEventSelectorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudtrailEventSelectorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector">CloudtrailEventSelector</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudtrailEventSelector]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector">CloudtrailEventSelector</a>]]

---


### CloudtrailEventSelectorOutputReference <a name="CloudtrailEventSelectorOutputReference" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudtrail

cloudtrail.CloudtrailEventSelectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.putDataResource">put_data_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.resetDataResource">reset_data_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.resetExcludeManagementEventSources">reset_exclude_management_event_sources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.resetIncludeManagementEvents">reset_include_management_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.resetReadWriteType">reset_read_write_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_data_resource` <a name="put_data_resource" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.putDataResource"></a>

```python
def put_data_resource(
  value: typing.Union[IResolvable, typing.List[CloudtrailEventSelectorDataResource]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.putDataResource.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource">CloudtrailEventSelectorDataResource</a>]]

---

##### `reset_data_resource` <a name="reset_data_resource" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.resetDataResource"></a>

```python
def reset_data_resource() -> None
```

##### `reset_exclude_management_event_sources` <a name="reset_exclude_management_event_sources" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.resetExcludeManagementEventSources"></a>

```python
def reset_exclude_management_event_sources() -> None
```

##### `reset_include_management_events` <a name="reset_include_management_events" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.resetIncludeManagementEvents"></a>

```python
def reset_include_management_events() -> None
```

##### `reset_read_write_type` <a name="reset_read_write_type" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.resetReadWriteType"></a>

```python
def reset_read_write_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.dataResource">data_resource</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList">CloudtrailEventSelectorDataResourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.dataResourceInput">data_resource_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource">CloudtrailEventSelectorDataResource</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.excludeManagementEventSourcesInput">exclude_management_event_sources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.includeManagementEventsInput">include_management_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.readWriteTypeInput">read_write_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.excludeManagementEventSources">exclude_management_event_sources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.includeManagementEvents">include_management_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.readWriteType">read_write_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector">CloudtrailEventSelector</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_resource`<sup>Required</sup> <a name="data_resource" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.dataResource"></a>

```python
data_resource: CloudtrailEventSelectorDataResourceList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList">CloudtrailEventSelectorDataResourceList</a>

---

##### `data_resource_input`<sup>Optional</sup> <a name="data_resource_input" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.dataResourceInput"></a>

```python
data_resource_input: typing.Union[IResolvable, typing.List[CloudtrailEventSelectorDataResource]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource">CloudtrailEventSelectorDataResource</a>]]

---

##### `exclude_management_event_sources_input`<sup>Optional</sup> <a name="exclude_management_event_sources_input" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.excludeManagementEventSourcesInput"></a>

```python
exclude_management_event_sources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_management_events_input`<sup>Optional</sup> <a name="include_management_events_input" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.includeManagementEventsInput"></a>

```python
include_management_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `read_write_type_input`<sup>Optional</sup> <a name="read_write_type_input" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.readWriteTypeInput"></a>

```python
read_write_type_input: str
```

- *Type:* str

---

##### `exclude_management_event_sources`<sup>Required</sup> <a name="exclude_management_event_sources" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.excludeManagementEventSources"></a>

```python
exclude_management_event_sources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_management_events`<sup>Required</sup> <a name="include_management_events" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.includeManagementEvents"></a>

```python
include_management_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `read_write_type`<sup>Required</sup> <a name="read_write_type" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.readWriteType"></a>

```python
read_write_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudtrailEventSelector, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector">CloudtrailEventSelector</a>, cdktf.IResolvable]

---


### CloudtrailInsightSelectorList <a name="CloudtrailInsightSelectorList" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudtrail

cloudtrail.CloudtrailInsightSelectorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudtrailInsightSelectorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelector">CloudtrailInsightSelector</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudtrailInsightSelector]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelector">CloudtrailInsightSelector</a>]]

---


### CloudtrailInsightSelectorOutputReference <a name="CloudtrailInsightSelectorOutputReference" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudtrail

cloudtrail.CloudtrailInsightSelectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.property.insightTypeInput">insight_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.property.insightType">insight_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelector">CloudtrailInsightSelector</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `insight_type_input`<sup>Optional</sup> <a name="insight_type_input" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.property.insightTypeInput"></a>

```python
insight_type_input: str
```

- *Type:* str

---

##### `insight_type`<sup>Required</sup> <a name="insight_type" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.property.insightType"></a>

```python
insight_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudtrailInsightSelector, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelector">CloudtrailInsightSelector</a>, cdktf.IResolvable]

---



