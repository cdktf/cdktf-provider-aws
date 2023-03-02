# `cloudtrail` Submodule <a name="`cloudtrail` Submodule" id="@cdktf/provider-aws.cloudtrail"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Cloudtrail <a name="Cloudtrail" id="@cdktf/provider-aws.cloudtrail.Cloudtrail"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail aws_cloudtrail}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudtrail.Cloudtrail;

Cloudtrail.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .s3BucketName(java.lang.String)
//  .advancedEventSelector(IResolvable)
//  .advancedEventSelector(java.util.List<CloudtrailAdvancedEventSelector>)
//  .cloudWatchLogsGroupArn(java.lang.String)
//  .cloudWatchLogsRoleArn(java.lang.String)
//  .enableLogFileValidation(java.lang.Boolean)
//  .enableLogFileValidation(IResolvable)
//  .enableLogging(java.lang.Boolean)
//  .enableLogging(IResolvable)
//  .eventSelector(IResolvable)
//  .eventSelector(java.util.List<CloudtrailEventSelector>)
//  .id(java.lang.String)
//  .includeGlobalServiceEvents(java.lang.Boolean)
//  .includeGlobalServiceEvents(IResolvable)
//  .insightSelector(IResolvable)
//  .insightSelector(java.util.List<CloudtrailInsightSelector>)
//  .isMultiRegionTrail(java.lang.Boolean)
//  .isMultiRegionTrail(IResolvable)
//  .isOrganizationTrail(java.lang.Boolean)
//  .isOrganizationTrail(IResolvable)
//  .kmsKeyId(java.lang.String)
//  .s3KeyPrefix(java.lang.String)
//  .snsTopicName(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#name Cloudtrail#name}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.s3BucketName">s3BucketName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#s3_bucket_name Cloudtrail#s3_bucket_name}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.advancedEventSelector">advancedEventSelector</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector">CloudtrailAdvancedEventSelector</a>></code> | advanced_event_selector block. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.cloudWatchLogsGroupArn">cloudWatchLogsGroupArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#cloud_watch_logs_group_arn Cloudtrail#cloud_watch_logs_group_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.cloudWatchLogsRoleArn">cloudWatchLogsRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#cloud_watch_logs_role_arn Cloudtrail#cloud_watch_logs_role_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.enableLogFileValidation">enableLogFileValidation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#enable_log_file_validation Cloudtrail#enable_log_file_validation}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.enableLogging">enableLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#enable_logging Cloudtrail#enable_logging}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.eventSelector">eventSelector</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector">CloudtrailEventSelector</a>></code> | event_selector block. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#id Cloudtrail#id}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.includeGlobalServiceEvents">includeGlobalServiceEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#include_global_service_events Cloudtrail#include_global_service_events}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.insightSelector">insightSelector</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelector">CloudtrailInsightSelector</a>></code> | insight_selector block. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.isMultiRegionTrail">isMultiRegionTrail</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#is_multi_region_trail Cloudtrail#is_multi_region_trail}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.isOrganizationTrail">isOrganizationTrail</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#is_organization_trail Cloudtrail#is_organization_trail}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#kms_key_id Cloudtrail#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.s3KeyPrefix">s3KeyPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#s3_key_prefix Cloudtrail#s3_key_prefix}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.snsTopicName">snsTopicName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#sns_topic_name Cloudtrail#sns_topic_name}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#tags Cloudtrail#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#tags_all Cloudtrail#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#name Cloudtrail#name}.

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.s3BucketName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#s3_bucket_name Cloudtrail#s3_bucket_name}.

---

##### `advancedEventSelector`<sup>Optional</sup> <a name="advancedEventSelector" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.advancedEventSelector"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector">CloudtrailAdvancedEventSelector</a>>

advanced_event_selector block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#advanced_event_selector Cloudtrail#advanced_event_selector}

---

##### `cloudWatchLogsGroupArn`<sup>Optional</sup> <a name="cloudWatchLogsGroupArn" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.cloudWatchLogsGroupArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#cloud_watch_logs_group_arn Cloudtrail#cloud_watch_logs_group_arn}.

---

##### `cloudWatchLogsRoleArn`<sup>Optional</sup> <a name="cloudWatchLogsRoleArn" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.cloudWatchLogsRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#cloud_watch_logs_role_arn Cloudtrail#cloud_watch_logs_role_arn}.

---

##### `enableLogFileValidation`<sup>Optional</sup> <a name="enableLogFileValidation" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.enableLogFileValidation"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#enable_log_file_validation Cloudtrail#enable_log_file_validation}.

---

##### `enableLogging`<sup>Optional</sup> <a name="enableLogging" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.enableLogging"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#enable_logging Cloudtrail#enable_logging}.

---

##### `eventSelector`<sup>Optional</sup> <a name="eventSelector" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.eventSelector"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector">CloudtrailEventSelector</a>>

event_selector block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#event_selector Cloudtrail#event_selector}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#id Cloudtrail#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeGlobalServiceEvents`<sup>Optional</sup> <a name="includeGlobalServiceEvents" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.includeGlobalServiceEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#include_global_service_events Cloudtrail#include_global_service_events}.

---

##### `insightSelector`<sup>Optional</sup> <a name="insightSelector" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.insightSelector"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelector">CloudtrailInsightSelector</a>>

insight_selector block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#insight_selector Cloudtrail#insight_selector}

---

##### `isMultiRegionTrail`<sup>Optional</sup> <a name="isMultiRegionTrail" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.isMultiRegionTrail"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#is_multi_region_trail Cloudtrail#is_multi_region_trail}.

---

##### `isOrganizationTrail`<sup>Optional</sup> <a name="isOrganizationTrail" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.isOrganizationTrail"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#is_organization_trail Cloudtrail#is_organization_trail}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#kms_key_id Cloudtrail#kms_key_id}.

---

##### `s3KeyPrefix`<sup>Optional</sup> <a name="s3KeyPrefix" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.s3KeyPrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#s3_key_prefix Cloudtrail#s3_key_prefix}.

---

##### `snsTopicName`<sup>Optional</sup> <a name="snsTopicName" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.snsTopicName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#sns_topic_name Cloudtrail#sns_topic_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#tags Cloudtrail#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#tags_all Cloudtrail#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.putAdvancedEventSelector">putAdvancedEventSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.putEventSelector">putEventSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.putInsightSelector">putInsightSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetAdvancedEventSelector">resetAdvancedEventSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetCloudWatchLogsGroupArn">resetCloudWatchLogsGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetCloudWatchLogsRoleArn">resetCloudWatchLogsRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetEnableLogFileValidation">resetEnableLogFileValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetEnableLogging">resetEnableLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetEventSelector">resetEventSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetIncludeGlobalServiceEvents">resetIncludeGlobalServiceEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetInsightSelector">resetInsightSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetIsMultiRegionTrail">resetIsMultiRegionTrail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetIsOrganizationTrail">resetIsOrganizationTrail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetS3KeyPrefix">resetS3KeyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetSnsTopicName">resetSnsTopicName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAdvancedEventSelector` <a name="putAdvancedEventSelector" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.putAdvancedEventSelector"></a>

```java
public void putAdvancedEventSelector(IResolvable OR java.util.List<CloudtrailAdvancedEventSelector> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.putAdvancedEventSelector.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector">CloudtrailAdvancedEventSelector</a>>

---

##### `putEventSelector` <a name="putEventSelector" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.putEventSelector"></a>

```java
public void putEventSelector(IResolvable OR java.util.List<CloudtrailEventSelector> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.putEventSelector.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector">CloudtrailEventSelector</a>>

---

##### `putInsightSelector` <a name="putInsightSelector" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.putInsightSelector"></a>

```java
public void putInsightSelector(IResolvable OR java.util.List<CloudtrailInsightSelector> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.putInsightSelector.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelector">CloudtrailInsightSelector</a>>

---

##### `resetAdvancedEventSelector` <a name="resetAdvancedEventSelector" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetAdvancedEventSelector"></a>

```java
public void resetAdvancedEventSelector()
```

##### `resetCloudWatchLogsGroupArn` <a name="resetCloudWatchLogsGroupArn" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetCloudWatchLogsGroupArn"></a>

```java
public void resetCloudWatchLogsGroupArn()
```

##### `resetCloudWatchLogsRoleArn` <a name="resetCloudWatchLogsRoleArn" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetCloudWatchLogsRoleArn"></a>

```java
public void resetCloudWatchLogsRoleArn()
```

##### `resetEnableLogFileValidation` <a name="resetEnableLogFileValidation" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetEnableLogFileValidation"></a>

```java
public void resetEnableLogFileValidation()
```

##### `resetEnableLogging` <a name="resetEnableLogging" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetEnableLogging"></a>

```java
public void resetEnableLogging()
```

##### `resetEventSelector` <a name="resetEventSelector" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetEventSelector"></a>

```java
public void resetEventSelector()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetId"></a>

```java
public void resetId()
```

##### `resetIncludeGlobalServiceEvents` <a name="resetIncludeGlobalServiceEvents" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetIncludeGlobalServiceEvents"></a>

```java
public void resetIncludeGlobalServiceEvents()
```

##### `resetInsightSelector` <a name="resetInsightSelector" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetInsightSelector"></a>

```java
public void resetInsightSelector()
```

##### `resetIsMultiRegionTrail` <a name="resetIsMultiRegionTrail" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetIsMultiRegionTrail"></a>

```java
public void resetIsMultiRegionTrail()
```

##### `resetIsOrganizationTrail` <a name="resetIsOrganizationTrail" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetIsOrganizationTrail"></a>

```java
public void resetIsOrganizationTrail()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetS3KeyPrefix` <a name="resetS3KeyPrefix" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetS3KeyPrefix"></a>

```java
public void resetS3KeyPrefix()
```

##### `resetSnsTopicName` <a name="resetSnsTopicName" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetSnsTopicName"></a>

```java
public void resetSnsTopicName()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudtrail.Cloudtrail;

Cloudtrail.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudtrail.Cloudtrail;

Cloudtrail.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudtrail.Cloudtrail;

Cloudtrail.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.advancedEventSelector">advancedEventSelector</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList">CloudtrailAdvancedEventSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.eventSelector">eventSelector</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList">CloudtrailEventSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.homeRegion">homeRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.insightSelector">insightSelector</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList">CloudtrailInsightSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.advancedEventSelectorInput">advancedEventSelectorInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector">CloudtrailAdvancedEventSelector</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.cloudWatchLogsGroupArnInput">cloudWatchLogsGroupArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.cloudWatchLogsRoleArnInput">cloudWatchLogsRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.enableLogFileValidationInput">enableLogFileValidationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.enableLoggingInput">enableLoggingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.eventSelectorInput">eventSelectorInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector">CloudtrailEventSelector</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.includeGlobalServiceEventsInput">includeGlobalServiceEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.insightSelectorInput">insightSelectorInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelector">CloudtrailInsightSelector</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.isMultiRegionTrailInput">isMultiRegionTrailInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.isOrganizationTrailInput">isOrganizationTrailInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.s3BucketNameInput">s3BucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.s3KeyPrefixInput">s3KeyPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.snsTopicNameInput">snsTopicNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.cloudWatchLogsGroupArn">cloudWatchLogsGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.cloudWatchLogsRoleArn">cloudWatchLogsRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.enableLogFileValidation">enableLogFileValidation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.enableLogging">enableLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.includeGlobalServiceEvents">includeGlobalServiceEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.isMultiRegionTrail">isMultiRegionTrail</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.isOrganizationTrail">isOrganizationTrail</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.s3BucketName">s3BucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.s3KeyPrefix">s3KeyPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.snsTopicName">snsTopicName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `advancedEventSelector`<sup>Required</sup> <a name="advancedEventSelector" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.advancedEventSelector"></a>

```java
public CloudtrailAdvancedEventSelectorList getAdvancedEventSelector();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList">CloudtrailAdvancedEventSelectorList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `eventSelector`<sup>Required</sup> <a name="eventSelector" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.eventSelector"></a>

```java
public CloudtrailEventSelectorList getEventSelector();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList">CloudtrailEventSelectorList</a>

---

##### `homeRegion`<sup>Required</sup> <a name="homeRegion" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.homeRegion"></a>

```java
public java.lang.String getHomeRegion();
```

- *Type:* java.lang.String

---

##### `insightSelector`<sup>Required</sup> <a name="insightSelector" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.insightSelector"></a>

```java
public CloudtrailInsightSelectorList getInsightSelector();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList">CloudtrailInsightSelectorList</a>

---

##### `advancedEventSelectorInput`<sup>Optional</sup> <a name="advancedEventSelectorInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.advancedEventSelectorInput"></a>

```java
public java.lang.Object getAdvancedEventSelectorInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector">CloudtrailAdvancedEventSelector</a>>

---

##### `cloudWatchLogsGroupArnInput`<sup>Optional</sup> <a name="cloudWatchLogsGroupArnInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.cloudWatchLogsGroupArnInput"></a>

```java
public java.lang.String getCloudWatchLogsGroupArnInput();
```

- *Type:* java.lang.String

---

##### `cloudWatchLogsRoleArnInput`<sup>Optional</sup> <a name="cloudWatchLogsRoleArnInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.cloudWatchLogsRoleArnInput"></a>

```java
public java.lang.String getCloudWatchLogsRoleArnInput();
```

- *Type:* java.lang.String

---

##### `enableLogFileValidationInput`<sup>Optional</sup> <a name="enableLogFileValidationInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.enableLogFileValidationInput"></a>

```java
public java.lang.Object getEnableLogFileValidationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableLoggingInput`<sup>Optional</sup> <a name="enableLoggingInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.enableLoggingInput"></a>

```java
public java.lang.Object getEnableLoggingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `eventSelectorInput`<sup>Optional</sup> <a name="eventSelectorInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.eventSelectorInput"></a>

```java
public java.lang.Object getEventSelectorInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector">CloudtrailEventSelector</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `includeGlobalServiceEventsInput`<sup>Optional</sup> <a name="includeGlobalServiceEventsInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.includeGlobalServiceEventsInput"></a>

```java
public java.lang.Object getIncludeGlobalServiceEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `insightSelectorInput`<sup>Optional</sup> <a name="insightSelectorInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.insightSelectorInput"></a>

```java
public java.lang.Object getInsightSelectorInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelector">CloudtrailInsightSelector</a>>

---

##### `isMultiRegionTrailInput`<sup>Optional</sup> <a name="isMultiRegionTrailInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.isMultiRegionTrailInput"></a>

```java
public java.lang.Object getIsMultiRegionTrailInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isOrganizationTrailInput`<sup>Optional</sup> <a name="isOrganizationTrailInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.isOrganizationTrailInput"></a>

```java
public java.lang.Object getIsOrganizationTrailInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `s3BucketNameInput`<sup>Optional</sup> <a name="s3BucketNameInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.s3BucketNameInput"></a>

```java
public java.lang.String getS3BucketNameInput();
```

- *Type:* java.lang.String

---

##### `s3KeyPrefixInput`<sup>Optional</sup> <a name="s3KeyPrefixInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.s3KeyPrefixInput"></a>

```java
public java.lang.String getS3KeyPrefixInput();
```

- *Type:* java.lang.String

---

##### `snsTopicNameInput`<sup>Optional</sup> <a name="snsTopicNameInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.snsTopicNameInput"></a>

```java
public java.lang.String getSnsTopicNameInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `cloudWatchLogsGroupArn`<sup>Required</sup> <a name="cloudWatchLogsGroupArn" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.cloudWatchLogsGroupArn"></a>

```java
public java.lang.String getCloudWatchLogsGroupArn();
```

- *Type:* java.lang.String

---

##### `cloudWatchLogsRoleArn`<sup>Required</sup> <a name="cloudWatchLogsRoleArn" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.cloudWatchLogsRoleArn"></a>

```java
public java.lang.String getCloudWatchLogsRoleArn();
```

- *Type:* java.lang.String

---

##### `enableLogFileValidation`<sup>Required</sup> <a name="enableLogFileValidation" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.enableLogFileValidation"></a>

```java
public java.lang.Object getEnableLogFileValidation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableLogging`<sup>Required</sup> <a name="enableLogging" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.enableLogging"></a>

```java
public java.lang.Object getEnableLogging();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `includeGlobalServiceEvents`<sup>Required</sup> <a name="includeGlobalServiceEvents" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.includeGlobalServiceEvents"></a>

```java
public java.lang.Object getIncludeGlobalServiceEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isMultiRegionTrail`<sup>Required</sup> <a name="isMultiRegionTrail" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.isMultiRegionTrail"></a>

```java
public java.lang.Object getIsMultiRegionTrail();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isOrganizationTrail`<sup>Required</sup> <a name="isOrganizationTrail" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.isOrganizationTrail"></a>

```java
public java.lang.Object getIsOrganizationTrail();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.s3BucketName"></a>

```java
public java.lang.String getS3BucketName();
```

- *Type:* java.lang.String

---

##### `s3KeyPrefix`<sup>Required</sup> <a name="s3KeyPrefix" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.s3KeyPrefix"></a>

```java
public java.lang.String getS3KeyPrefix();
```

- *Type:* java.lang.String

---

##### `snsTopicName`<sup>Required</sup> <a name="snsTopicName" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.snsTopicName"></a>

```java
public java.lang.String getSnsTopicName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudtrailAdvancedEventSelector <a name="CloudtrailAdvancedEventSelector" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudtrail.CloudtrailAdvancedEventSelector;

CloudtrailAdvancedEventSelector.builder()
    .fieldSelector(IResolvable)
    .fieldSelector(java.util.List<CloudtrailAdvancedEventSelectorFieldSelector>)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector.property.fieldSelector">fieldSelector</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector">CloudtrailAdvancedEventSelectorFieldSelector</a>></code> | field_selector block. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#name Cloudtrail#name}. |

---

##### `fieldSelector`<sup>Required</sup> <a name="fieldSelector" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector.property.fieldSelector"></a>

```java
public java.lang.Object getFieldSelector();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector">CloudtrailAdvancedEventSelectorFieldSelector</a>>

field_selector block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#field_selector Cloudtrail#field_selector}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#name Cloudtrail#name}.

---

### CloudtrailAdvancedEventSelectorFieldSelector <a name="CloudtrailAdvancedEventSelectorFieldSelector" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector;

CloudtrailAdvancedEventSelectorFieldSelector.builder()
    .field(java.lang.String)
//  .endsWith(java.util.List<java.lang.String>)
//  .equalTo(java.util.List<java.lang.String>)
//  .notEndsWith(java.util.List<java.lang.String>)
//  .notEquals(java.util.List<java.lang.String>)
//  .notStartsWith(java.util.List<java.lang.String>)
//  .startsWith(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.field">field</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#field Cloudtrail#field}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.endsWith">endsWith</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#ends_with Cloudtrail#ends_with}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.equalTo">equalTo</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#equals Cloudtrail#equals}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.notEndsWith">notEndsWith</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#not_ends_with Cloudtrail#not_ends_with}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.notEquals">notEquals</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#not_equals Cloudtrail#not_equals}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.notStartsWith">notStartsWith</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#not_starts_with Cloudtrail#not_starts_with}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.startsWith">startsWith</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#starts_with Cloudtrail#starts_with}. |

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#field Cloudtrail#field}.

---

##### `endsWith`<sup>Optional</sup> <a name="endsWith" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.endsWith"></a>

```java
public java.util.List<java.lang.String> getEndsWith();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#ends_with Cloudtrail#ends_with}.

---

##### `equalTo`<sup>Optional</sup> <a name="equalTo" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.equalTo"></a>

```java
public java.util.List<java.lang.String> getEqualTo();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#equals Cloudtrail#equals}.

---

##### `notEndsWith`<sup>Optional</sup> <a name="notEndsWith" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.notEndsWith"></a>

```java
public java.util.List<java.lang.String> getNotEndsWith();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#not_ends_with Cloudtrail#not_ends_with}.

---

##### `notEquals`<sup>Optional</sup> <a name="notEquals" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.notEquals"></a>

```java
public java.util.List<java.lang.String> getNotEquals();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#not_equals Cloudtrail#not_equals}.

---

##### `notStartsWith`<sup>Optional</sup> <a name="notStartsWith" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.notStartsWith"></a>

```java
public java.util.List<java.lang.String> getNotStartsWith();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#not_starts_with Cloudtrail#not_starts_with}.

---

##### `startsWith`<sup>Optional</sup> <a name="startsWith" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.startsWith"></a>

```java
public java.util.List<java.lang.String> getStartsWith();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#starts_with Cloudtrail#starts_with}.

---

### CloudtrailConfig <a name="CloudtrailConfig" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudtrail.CloudtrailConfig;

CloudtrailConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .s3BucketName(java.lang.String)
//  .advancedEventSelector(IResolvable)
//  .advancedEventSelector(java.util.List<CloudtrailAdvancedEventSelector>)
//  .cloudWatchLogsGroupArn(java.lang.String)
//  .cloudWatchLogsRoleArn(java.lang.String)
//  .enableLogFileValidation(java.lang.Boolean)
//  .enableLogFileValidation(IResolvable)
//  .enableLogging(java.lang.Boolean)
//  .enableLogging(IResolvable)
//  .eventSelector(IResolvable)
//  .eventSelector(java.util.List<CloudtrailEventSelector>)
//  .id(java.lang.String)
//  .includeGlobalServiceEvents(java.lang.Boolean)
//  .includeGlobalServiceEvents(IResolvable)
//  .insightSelector(IResolvable)
//  .insightSelector(java.util.List<CloudtrailInsightSelector>)
//  .isMultiRegionTrail(java.lang.Boolean)
//  .isMultiRegionTrail(IResolvable)
//  .isOrganizationTrail(java.lang.Boolean)
//  .isOrganizationTrail(IResolvable)
//  .kmsKeyId(java.lang.String)
//  .s3KeyPrefix(java.lang.String)
//  .snsTopicName(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#name Cloudtrail#name}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.s3BucketName">s3BucketName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#s3_bucket_name Cloudtrail#s3_bucket_name}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.advancedEventSelector">advancedEventSelector</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector">CloudtrailAdvancedEventSelector</a>></code> | advanced_event_selector block. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.cloudWatchLogsGroupArn">cloudWatchLogsGroupArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#cloud_watch_logs_group_arn Cloudtrail#cloud_watch_logs_group_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.cloudWatchLogsRoleArn">cloudWatchLogsRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#cloud_watch_logs_role_arn Cloudtrail#cloud_watch_logs_role_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.enableLogFileValidation">enableLogFileValidation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#enable_log_file_validation Cloudtrail#enable_log_file_validation}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.enableLogging">enableLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#enable_logging Cloudtrail#enable_logging}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.eventSelector">eventSelector</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector">CloudtrailEventSelector</a>></code> | event_selector block. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#id Cloudtrail#id}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.includeGlobalServiceEvents">includeGlobalServiceEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#include_global_service_events Cloudtrail#include_global_service_events}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.insightSelector">insightSelector</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelector">CloudtrailInsightSelector</a>></code> | insight_selector block. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.isMultiRegionTrail">isMultiRegionTrail</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#is_multi_region_trail Cloudtrail#is_multi_region_trail}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.isOrganizationTrail">isOrganizationTrail</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#is_organization_trail Cloudtrail#is_organization_trail}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#kms_key_id Cloudtrail#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.s3KeyPrefix">s3KeyPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#s3_key_prefix Cloudtrail#s3_key_prefix}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.snsTopicName">snsTopicName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#sns_topic_name Cloudtrail#sns_topic_name}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#tags Cloudtrail#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#tags_all Cloudtrail#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#name Cloudtrail#name}.

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.s3BucketName"></a>

```java
public java.lang.String getS3BucketName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#s3_bucket_name Cloudtrail#s3_bucket_name}.

---

##### `advancedEventSelector`<sup>Optional</sup> <a name="advancedEventSelector" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.advancedEventSelector"></a>

```java
public java.lang.Object getAdvancedEventSelector();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector">CloudtrailAdvancedEventSelector</a>>

advanced_event_selector block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#advanced_event_selector Cloudtrail#advanced_event_selector}

---

##### `cloudWatchLogsGroupArn`<sup>Optional</sup> <a name="cloudWatchLogsGroupArn" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.cloudWatchLogsGroupArn"></a>

```java
public java.lang.String getCloudWatchLogsGroupArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#cloud_watch_logs_group_arn Cloudtrail#cloud_watch_logs_group_arn}.

---

##### `cloudWatchLogsRoleArn`<sup>Optional</sup> <a name="cloudWatchLogsRoleArn" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.cloudWatchLogsRoleArn"></a>

```java
public java.lang.String getCloudWatchLogsRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#cloud_watch_logs_role_arn Cloudtrail#cloud_watch_logs_role_arn}.

---

##### `enableLogFileValidation`<sup>Optional</sup> <a name="enableLogFileValidation" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.enableLogFileValidation"></a>

```java
public java.lang.Object getEnableLogFileValidation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#enable_log_file_validation Cloudtrail#enable_log_file_validation}.

---

##### `enableLogging`<sup>Optional</sup> <a name="enableLogging" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.enableLogging"></a>

```java
public java.lang.Object getEnableLogging();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#enable_logging Cloudtrail#enable_logging}.

---

##### `eventSelector`<sup>Optional</sup> <a name="eventSelector" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.eventSelector"></a>

```java
public java.lang.Object getEventSelector();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector">CloudtrailEventSelector</a>>

event_selector block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#event_selector Cloudtrail#event_selector}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#id Cloudtrail#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeGlobalServiceEvents`<sup>Optional</sup> <a name="includeGlobalServiceEvents" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.includeGlobalServiceEvents"></a>

```java
public java.lang.Object getIncludeGlobalServiceEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#include_global_service_events Cloudtrail#include_global_service_events}.

---

##### `insightSelector`<sup>Optional</sup> <a name="insightSelector" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.insightSelector"></a>

```java
public java.lang.Object getInsightSelector();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelector">CloudtrailInsightSelector</a>>

insight_selector block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#insight_selector Cloudtrail#insight_selector}

---

##### `isMultiRegionTrail`<sup>Optional</sup> <a name="isMultiRegionTrail" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.isMultiRegionTrail"></a>

```java
public java.lang.Object getIsMultiRegionTrail();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#is_multi_region_trail Cloudtrail#is_multi_region_trail}.

---

##### `isOrganizationTrail`<sup>Optional</sup> <a name="isOrganizationTrail" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.isOrganizationTrail"></a>

```java
public java.lang.Object getIsOrganizationTrail();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#is_organization_trail Cloudtrail#is_organization_trail}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#kms_key_id Cloudtrail#kms_key_id}.

---

##### `s3KeyPrefix`<sup>Optional</sup> <a name="s3KeyPrefix" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.s3KeyPrefix"></a>

```java
public java.lang.String getS3KeyPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#s3_key_prefix Cloudtrail#s3_key_prefix}.

---

##### `snsTopicName`<sup>Optional</sup> <a name="snsTopicName" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.snsTopicName"></a>

```java
public java.lang.String getSnsTopicName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#sns_topic_name Cloudtrail#sns_topic_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#tags Cloudtrail#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#tags_all Cloudtrail#tags_all}.

---

### CloudtrailEventSelector <a name="CloudtrailEventSelector" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudtrail.CloudtrailEventSelector;

CloudtrailEventSelector.builder()
//  .dataResource(IResolvable)
//  .dataResource(java.util.List<CloudtrailEventSelectorDataResource>)
//  .excludeManagementEventSources(java.util.List<java.lang.String>)
//  .includeManagementEvents(java.lang.Boolean)
//  .includeManagementEvents(IResolvable)
//  .readWriteType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector.property.dataResource">dataResource</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource">CloudtrailEventSelectorDataResource</a>></code> | data_resource block. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector.property.excludeManagementEventSources">excludeManagementEventSources</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#exclude_management_event_sources Cloudtrail#exclude_management_event_sources}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector.property.includeManagementEvents">includeManagementEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#include_management_events Cloudtrail#include_management_events}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector.property.readWriteType">readWriteType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#read_write_type Cloudtrail#read_write_type}. |

---

##### `dataResource`<sup>Optional</sup> <a name="dataResource" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector.property.dataResource"></a>

```java
public java.lang.Object getDataResource();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource">CloudtrailEventSelectorDataResource</a>>

data_resource block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#data_resource Cloudtrail#data_resource}

---

##### `excludeManagementEventSources`<sup>Optional</sup> <a name="excludeManagementEventSources" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector.property.excludeManagementEventSources"></a>

```java
public java.util.List<java.lang.String> getExcludeManagementEventSources();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#exclude_management_event_sources Cloudtrail#exclude_management_event_sources}.

---

##### `includeManagementEvents`<sup>Optional</sup> <a name="includeManagementEvents" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector.property.includeManagementEvents"></a>

```java
public java.lang.Object getIncludeManagementEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#include_management_events Cloudtrail#include_management_events}.

---

##### `readWriteType`<sup>Optional</sup> <a name="readWriteType" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector.property.readWriteType"></a>

```java
public java.lang.String getReadWriteType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#read_write_type Cloudtrail#read_write_type}.

---

### CloudtrailEventSelectorDataResource <a name="CloudtrailEventSelectorDataResource" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudtrail.CloudtrailEventSelectorDataResource;

CloudtrailEventSelectorDataResource.builder()
    .type(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#type Cloudtrail#type}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#values Cloudtrail#values}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#type Cloudtrail#type}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#values Cloudtrail#values}.

---

### CloudtrailInsightSelector <a name="CloudtrailInsightSelector" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelector.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudtrail.CloudtrailInsightSelector;

CloudtrailInsightSelector.builder()
    .insightType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelector.property.insightType">insightType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#insight_type Cloudtrail#insight_type}. |

---

##### `insightType`<sup>Required</sup> <a name="insightType" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelector.property.insightType"></a>

```java
public java.lang.String getInsightType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#insight_type Cloudtrail#insight_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudtrailAdvancedEventSelectorFieldSelectorList <a name="CloudtrailAdvancedEventSelectorFieldSelectorList" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList;

new CloudtrailAdvancedEventSelectorFieldSelectorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.get"></a>

```java
public CloudtrailAdvancedEventSelectorFieldSelectorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector">CloudtrailAdvancedEventSelectorFieldSelector</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector">CloudtrailAdvancedEventSelectorFieldSelector</a>>

---


### CloudtrailAdvancedEventSelectorFieldSelectorOutputReference <a name="CloudtrailAdvancedEventSelectorFieldSelectorOutputReference" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference;

new CloudtrailAdvancedEventSelectorFieldSelectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resetEndsWith">resetEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resetEqualTo">resetEqualTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resetNotEndsWith">resetNotEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resetNotEquals">resetNotEquals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resetNotStartsWith">resetNotStartsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resetStartsWith">resetStartsWith</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndsWith` <a name="resetEndsWith" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resetEndsWith"></a>

```java
public void resetEndsWith()
```

##### `resetEqualTo` <a name="resetEqualTo" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resetEqualTo"></a>

```java
public void resetEqualTo()
```

##### `resetNotEndsWith` <a name="resetNotEndsWith" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resetNotEndsWith"></a>

```java
public void resetNotEndsWith()
```

##### `resetNotEquals` <a name="resetNotEquals" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resetNotEquals"></a>

```java
public void resetNotEquals()
```

##### `resetNotStartsWith` <a name="resetNotStartsWith" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resetNotStartsWith"></a>

```java
public void resetNotStartsWith()
```

##### `resetStartsWith` <a name="resetStartsWith" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resetStartsWith"></a>

```java
public void resetStartsWith()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.endsWithInput">endsWithInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.equalToInput">equalToInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.fieldInput">fieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.notEndsWithInput">notEndsWithInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.notEqualsInput">notEqualsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.notStartsWithInput">notStartsWithInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.startsWithInput">startsWithInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.endsWith">endsWith</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.equalTo">equalTo</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.field">field</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.notEndsWith">notEndsWith</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.notEquals">notEquals</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.notStartsWith">notStartsWith</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.startsWith">startsWith</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector">CloudtrailAdvancedEventSelectorFieldSelector</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endsWithInput`<sup>Optional</sup> <a name="endsWithInput" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.endsWithInput"></a>

```java
public java.util.List<java.lang.String> getEndsWithInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `equalToInput`<sup>Optional</sup> <a name="equalToInput" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.equalToInput"></a>

```java
public java.util.List<java.lang.String> getEqualToInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.fieldInput"></a>

```java
public java.lang.String getFieldInput();
```

- *Type:* java.lang.String

---

##### `notEndsWithInput`<sup>Optional</sup> <a name="notEndsWithInput" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.notEndsWithInput"></a>

```java
public java.util.List<java.lang.String> getNotEndsWithInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `notEqualsInput`<sup>Optional</sup> <a name="notEqualsInput" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.notEqualsInput"></a>

```java
public java.util.List<java.lang.String> getNotEqualsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `notStartsWithInput`<sup>Optional</sup> <a name="notStartsWithInput" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.notStartsWithInput"></a>

```java
public java.util.List<java.lang.String> getNotStartsWithInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `startsWithInput`<sup>Optional</sup> <a name="startsWithInput" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.startsWithInput"></a>

```java
public java.util.List<java.lang.String> getStartsWithInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `endsWith`<sup>Required</sup> <a name="endsWith" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.endsWith"></a>

```java
public java.util.List<java.lang.String> getEndsWith();
```

- *Type:* java.util.List<java.lang.String>

---

##### `equalTo`<sup>Required</sup> <a name="equalTo" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.equalTo"></a>

```java
public java.util.List<java.lang.String> getEqualTo();
```

- *Type:* java.util.List<java.lang.String>

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

---

##### `notEndsWith`<sup>Required</sup> <a name="notEndsWith" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.notEndsWith"></a>

```java
public java.util.List<java.lang.String> getNotEndsWith();
```

- *Type:* java.util.List<java.lang.String>

---

##### `notEquals`<sup>Required</sup> <a name="notEquals" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.notEquals"></a>

```java
public java.util.List<java.lang.String> getNotEquals();
```

- *Type:* java.util.List<java.lang.String>

---

##### `notStartsWith`<sup>Required</sup> <a name="notStartsWith" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.notStartsWith"></a>

```java
public java.util.List<java.lang.String> getNotStartsWith();
```

- *Type:* java.util.List<java.lang.String>

---

##### `startsWith`<sup>Required</sup> <a name="startsWith" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.startsWith"></a>

```java
public java.util.List<java.lang.String> getStartsWith();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector">CloudtrailAdvancedEventSelectorFieldSelector</a> OR com.hashicorp.cdktf.IResolvable

---


### CloudtrailAdvancedEventSelectorList <a name="CloudtrailAdvancedEventSelectorList" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudtrail.CloudtrailAdvancedEventSelectorList;

new CloudtrailAdvancedEventSelectorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.get"></a>

```java
public CloudtrailAdvancedEventSelectorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector">CloudtrailAdvancedEventSelector</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector">CloudtrailAdvancedEventSelector</a>>

---


### CloudtrailAdvancedEventSelectorOutputReference <a name="CloudtrailAdvancedEventSelectorOutputReference" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference;

new CloudtrailAdvancedEventSelectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.putFieldSelector">putFieldSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFieldSelector` <a name="putFieldSelector" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.putFieldSelector"></a>

```java
public void putFieldSelector(IResolvable OR java.util.List<CloudtrailAdvancedEventSelectorFieldSelector> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.putFieldSelector.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector">CloudtrailAdvancedEventSelectorFieldSelector</a>>

---

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.fieldSelector">fieldSelector</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList">CloudtrailAdvancedEventSelectorFieldSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.fieldSelectorInput">fieldSelectorInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector">CloudtrailAdvancedEventSelectorFieldSelector</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector">CloudtrailAdvancedEventSelector</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldSelector`<sup>Required</sup> <a name="fieldSelector" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.fieldSelector"></a>

```java
public CloudtrailAdvancedEventSelectorFieldSelectorList getFieldSelector();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList">CloudtrailAdvancedEventSelectorFieldSelectorList</a>

---

##### `fieldSelectorInput`<sup>Optional</sup> <a name="fieldSelectorInput" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.fieldSelectorInput"></a>

```java
public java.lang.Object getFieldSelectorInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector">CloudtrailAdvancedEventSelectorFieldSelector</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector">CloudtrailAdvancedEventSelector</a> OR com.hashicorp.cdktf.IResolvable

---


### CloudtrailEventSelectorDataResourceList <a name="CloudtrailEventSelectorDataResourceList" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudtrail.CloudtrailEventSelectorDataResourceList;

new CloudtrailEventSelectorDataResourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.get"></a>

```java
public CloudtrailEventSelectorDataResourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource">CloudtrailEventSelectorDataResource</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource">CloudtrailEventSelectorDataResource</a>>

---


### CloudtrailEventSelectorDataResourceOutputReference <a name="CloudtrailEventSelectorDataResourceOutputReference" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference;

new CloudtrailEventSelectorDataResourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource">CloudtrailEventSelectorDataResource</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource">CloudtrailEventSelectorDataResource</a> OR com.hashicorp.cdktf.IResolvable

---


### CloudtrailEventSelectorList <a name="CloudtrailEventSelectorList" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudtrail.CloudtrailEventSelectorList;

new CloudtrailEventSelectorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.get"></a>

```java
public CloudtrailEventSelectorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector">CloudtrailEventSelector</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector">CloudtrailEventSelector</a>>

---


### CloudtrailEventSelectorOutputReference <a name="CloudtrailEventSelectorOutputReference" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudtrail.CloudtrailEventSelectorOutputReference;

new CloudtrailEventSelectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.putDataResource">putDataResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.resetDataResource">resetDataResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.resetExcludeManagementEventSources">resetExcludeManagementEventSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.resetIncludeManagementEvents">resetIncludeManagementEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.resetReadWriteType">resetReadWriteType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataResource` <a name="putDataResource" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.putDataResource"></a>

```java
public void putDataResource(IResolvable OR java.util.List<CloudtrailEventSelectorDataResource> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.putDataResource.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource">CloudtrailEventSelectorDataResource</a>>

---

##### `resetDataResource` <a name="resetDataResource" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.resetDataResource"></a>

```java
public void resetDataResource()
```

##### `resetExcludeManagementEventSources` <a name="resetExcludeManagementEventSources" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.resetExcludeManagementEventSources"></a>

```java
public void resetExcludeManagementEventSources()
```

##### `resetIncludeManagementEvents` <a name="resetIncludeManagementEvents" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.resetIncludeManagementEvents"></a>

```java
public void resetIncludeManagementEvents()
```

##### `resetReadWriteType` <a name="resetReadWriteType" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.resetReadWriteType"></a>

```java
public void resetReadWriteType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.dataResource">dataResource</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList">CloudtrailEventSelectorDataResourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.dataResourceInput">dataResourceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource">CloudtrailEventSelectorDataResource</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.excludeManagementEventSourcesInput">excludeManagementEventSourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.includeManagementEventsInput">includeManagementEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.readWriteTypeInput">readWriteTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.excludeManagementEventSources">excludeManagementEventSources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.includeManagementEvents">includeManagementEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.readWriteType">readWriteType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector">CloudtrailEventSelector</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataResource`<sup>Required</sup> <a name="dataResource" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.dataResource"></a>

```java
public CloudtrailEventSelectorDataResourceList getDataResource();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList">CloudtrailEventSelectorDataResourceList</a>

---

##### `dataResourceInput`<sup>Optional</sup> <a name="dataResourceInput" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.dataResourceInput"></a>

```java
public java.lang.Object getDataResourceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource">CloudtrailEventSelectorDataResource</a>>

---

##### `excludeManagementEventSourcesInput`<sup>Optional</sup> <a name="excludeManagementEventSourcesInput" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.excludeManagementEventSourcesInput"></a>

```java
public java.util.List<java.lang.String> getExcludeManagementEventSourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeManagementEventsInput`<sup>Optional</sup> <a name="includeManagementEventsInput" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.includeManagementEventsInput"></a>

```java
public java.lang.Object getIncludeManagementEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `readWriteTypeInput`<sup>Optional</sup> <a name="readWriteTypeInput" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.readWriteTypeInput"></a>

```java
public java.lang.String getReadWriteTypeInput();
```

- *Type:* java.lang.String

---

##### `excludeManagementEventSources`<sup>Required</sup> <a name="excludeManagementEventSources" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.excludeManagementEventSources"></a>

```java
public java.util.List<java.lang.String> getExcludeManagementEventSources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeManagementEvents`<sup>Required</sup> <a name="includeManagementEvents" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.includeManagementEvents"></a>

```java
public java.lang.Object getIncludeManagementEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `readWriteType`<sup>Required</sup> <a name="readWriteType" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.readWriteType"></a>

```java
public java.lang.String getReadWriteType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector">CloudtrailEventSelector</a> OR com.hashicorp.cdktf.IResolvable

---


### CloudtrailInsightSelectorList <a name="CloudtrailInsightSelectorList" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudtrail.CloudtrailInsightSelectorList;

new CloudtrailInsightSelectorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.get"></a>

```java
public CloudtrailInsightSelectorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelector">CloudtrailInsightSelector</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelector">CloudtrailInsightSelector</a>>

---


### CloudtrailInsightSelectorOutputReference <a name="CloudtrailInsightSelectorOutputReference" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudtrail.CloudtrailInsightSelectorOutputReference;

new CloudtrailInsightSelectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.property.insightTypeInput">insightTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.property.insightType">insightType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelector">CloudtrailInsightSelector</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `insightTypeInput`<sup>Optional</sup> <a name="insightTypeInput" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.property.insightTypeInput"></a>

```java
public java.lang.String getInsightTypeInput();
```

- *Type:* java.lang.String

---

##### `insightType`<sup>Required</sup> <a name="insightType" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.property.insightType"></a>

```java
public java.lang.String getInsightType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelector">CloudtrailInsightSelector</a> OR com.hashicorp.cdktf.IResolvable

---



