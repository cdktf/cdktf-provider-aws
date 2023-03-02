# `syntheticsCanary` Submodule <a name="`syntheticsCanary` Submodule" id="@cdktf/provider-aws.syntheticsCanary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsCanary <a name="SyntheticsCanary" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary aws_synthetics_canary}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.synthetics_canary.SyntheticsCanary;

SyntheticsCanary.Builder.create(Construct scope, java.lang.String id)
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
    .artifactS3Location(java.lang.String)
    .executionRoleArn(java.lang.String)
    .handler(java.lang.String)
    .name(java.lang.String)
    .runtimeVersion(java.lang.String)
    .schedule(SyntheticsCanarySchedule)
//  .artifactConfig(SyntheticsCanaryArtifactConfig)
//  .deleteLambda(java.lang.Boolean)
//  .deleteLambda(IResolvable)
//  .failureRetentionPeriod(java.lang.Number)
//  .id(java.lang.String)
//  .runConfig(SyntheticsCanaryRunConfig)
//  .s3Bucket(java.lang.String)
//  .s3Key(java.lang.String)
//  .s3Version(java.lang.String)
//  .startCanary(java.lang.Boolean)
//  .startCanary(IResolvable)
//  .successRetentionPeriod(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .vpcConfig(SyntheticsCanaryVpcConfig)
//  .zipFile(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.artifactS3Location">artifactS3Location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#artifact_s3_location SyntheticsCanary#artifact_s3_location}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#execution_role_arn SyntheticsCanary#execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.handler">handler</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#handler SyntheticsCanary#handler}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#name SyntheticsCanary#name}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.runtimeVersion">runtimeVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#runtime_version SyntheticsCanary#runtime_version}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.artifactConfig">artifactConfig</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a></code> | artifact_config block. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.deleteLambda">deleteLambda</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#delete_lambda SyntheticsCanary#delete_lambda}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.failureRetentionPeriod">failureRetentionPeriod</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#failure_retention_period SyntheticsCanary#failure_retention_period}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#id SyntheticsCanary#id}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.runConfig">runConfig</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a></code> | run_config block. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.s3Bucket">s3Bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#s3_bucket SyntheticsCanary#s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.s3Key">s3Key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#s3_key SyntheticsCanary#s3_key}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.s3Version">s3Version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#s3_version SyntheticsCanary#s3_version}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.startCanary">startCanary</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#start_canary SyntheticsCanary#start_canary}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.successRetentionPeriod">successRetentionPeriod</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#success_retention_period SyntheticsCanary#success_retention_period}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#tags SyntheticsCanary#tags}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#tags_all SyntheticsCanary#tags_all}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a></code> | vpc_config block. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.zipFile">zipFile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#zip_file SyntheticsCanary#zip_file}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `artifactS3Location`<sup>Required</sup> <a name="artifactS3Location" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.artifactS3Location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#artifact_s3_location SyntheticsCanary#artifact_s3_location}.

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.executionRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#execution_role_arn SyntheticsCanary#execution_role_arn}.

---

##### `handler`<sup>Required</sup> <a name="handler" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.handler"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#handler SyntheticsCanary#handler}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#name SyntheticsCanary#name}.

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.runtimeVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#runtime_version SyntheticsCanary#runtime_version}.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.schedule"></a>

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#schedule SyntheticsCanary#schedule}

---

##### `artifactConfig`<sup>Optional</sup> <a name="artifactConfig" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.artifactConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a>

artifact_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#artifact_config SyntheticsCanary#artifact_config}

---

##### `deleteLambda`<sup>Optional</sup> <a name="deleteLambda" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.deleteLambda"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#delete_lambda SyntheticsCanary#delete_lambda}.

---

##### `failureRetentionPeriod`<sup>Optional</sup> <a name="failureRetentionPeriod" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.failureRetentionPeriod"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#failure_retention_period SyntheticsCanary#failure_retention_period}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#id SyntheticsCanary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `runConfig`<sup>Optional</sup> <a name="runConfig" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.runConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a>

run_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#run_config SyntheticsCanary#run_config}

---

##### `s3Bucket`<sup>Optional</sup> <a name="s3Bucket" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.s3Bucket"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#s3_bucket SyntheticsCanary#s3_bucket}.

---

##### `s3Key`<sup>Optional</sup> <a name="s3Key" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.s3Key"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#s3_key SyntheticsCanary#s3_key}.

---

##### `s3Version`<sup>Optional</sup> <a name="s3Version" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.s3Version"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#s3_version SyntheticsCanary#s3_version}.

---

##### `startCanary`<sup>Optional</sup> <a name="startCanary" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.startCanary"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#start_canary SyntheticsCanary#start_canary}.

---

##### `successRetentionPeriod`<sup>Optional</sup> <a name="successRetentionPeriod" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.successRetentionPeriod"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#success_retention_period SyntheticsCanary#success_retention_period}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#tags SyntheticsCanary#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#tags_all SyntheticsCanary#tags_all}.

---

##### `vpcConfig`<sup>Optional</sup> <a name="vpcConfig" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.vpcConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a>

vpc_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#vpc_config SyntheticsCanary#vpc_config}

---

##### `zipFile`<sup>Optional</sup> <a name="zipFile" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.Initializer.parameter.zipFile"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#zip_file SyntheticsCanary#zip_file}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.putArtifactConfig">putArtifactConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.putRunConfig">putRunConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.putVpcConfig">putVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetArtifactConfig">resetArtifactConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetDeleteLambda">resetDeleteLambda</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetFailureRetentionPeriod">resetFailureRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetRunConfig">resetRunConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetS3Bucket">resetS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetS3Key">resetS3Key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetS3Version">resetS3Version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetStartCanary">resetStartCanary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetSuccessRetentionPeriod">resetSuccessRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetVpcConfig">resetVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetZipFile">resetZipFile</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putArtifactConfig` <a name="putArtifactConfig" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.putArtifactConfig"></a>

```java
public void putArtifactConfig(SyntheticsCanaryArtifactConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.putArtifactConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a>

---

##### `putRunConfig` <a name="putRunConfig" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.putRunConfig"></a>

```java
public void putRunConfig(SyntheticsCanaryRunConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.putRunConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a>

---

##### `putSchedule` <a name="putSchedule" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.putSchedule"></a>

```java
public void putSchedule(SyntheticsCanarySchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a>

---

##### `putVpcConfig` <a name="putVpcConfig" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.putVpcConfig"></a>

```java
public void putVpcConfig(SyntheticsCanaryVpcConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a>

---

##### `resetArtifactConfig` <a name="resetArtifactConfig" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetArtifactConfig"></a>

```java
public void resetArtifactConfig()
```

##### `resetDeleteLambda` <a name="resetDeleteLambda" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetDeleteLambda"></a>

```java
public void resetDeleteLambda()
```

##### `resetFailureRetentionPeriod` <a name="resetFailureRetentionPeriod" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetFailureRetentionPeriod"></a>

```java
public void resetFailureRetentionPeriod()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetId"></a>

```java
public void resetId()
```

##### `resetRunConfig` <a name="resetRunConfig" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetRunConfig"></a>

```java
public void resetRunConfig()
```

##### `resetS3Bucket` <a name="resetS3Bucket" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetS3Bucket"></a>

```java
public void resetS3Bucket()
```

##### `resetS3Key` <a name="resetS3Key" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetS3Key"></a>

```java
public void resetS3Key()
```

##### `resetS3Version` <a name="resetS3Version" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetS3Version"></a>

```java
public void resetS3Version()
```

##### `resetStartCanary` <a name="resetStartCanary" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetStartCanary"></a>

```java
public void resetStartCanary()
```

##### `resetSuccessRetentionPeriod` <a name="resetSuccessRetentionPeriod" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetSuccessRetentionPeriod"></a>

```java
public void resetSuccessRetentionPeriod()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetVpcConfig` <a name="resetVpcConfig" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetVpcConfig"></a>

```java
public void resetVpcConfig()
```

##### `resetZipFile` <a name="resetZipFile" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.resetZipFile"></a>

```java
public void resetZipFile()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.synthetics_canary.SyntheticsCanary;

SyntheticsCanary.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.synthetics_canary.SyntheticsCanary;

SyntheticsCanary.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.synthetics_canary.SyntheticsCanary;

SyntheticsCanary.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.artifactConfig">artifactConfig</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference">SyntheticsCanaryArtifactConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.engineArn">engineArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.runConfig">runConfig</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference">SyntheticsCanaryRunConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference">SyntheticsCanaryScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.sourceLocationArn">sourceLocationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.timeline">timeline</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineList">SyntheticsCanaryTimelineList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference">SyntheticsCanaryVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.artifactConfigInput">artifactConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.artifactS3LocationInput">artifactS3LocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.deleteLambdaInput">deleteLambdaInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.executionRoleArnInput">executionRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.failureRetentionPeriodInput">failureRetentionPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.handlerInput">handlerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.runConfigInput">runConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.runtimeVersionInput">runtimeVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.s3BucketInput">s3BucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.s3KeyInput">s3KeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.s3VersionInput">s3VersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.scheduleInput">scheduleInput</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.startCanaryInput">startCanaryInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.successRetentionPeriodInput">successRetentionPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.vpcConfigInput">vpcConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.zipFileInput">zipFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.artifactS3Location">artifactS3Location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.deleteLambda">deleteLambda</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.failureRetentionPeriod">failureRetentionPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.handler">handler</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.runtimeVersion">runtimeVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.s3Bucket">s3Bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.s3Key">s3Key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.s3Version">s3Version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.startCanary">startCanary</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.successRetentionPeriod">successRetentionPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.zipFile">zipFile</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `artifactConfig`<sup>Required</sup> <a name="artifactConfig" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.artifactConfig"></a>

```java
public SyntheticsCanaryArtifactConfigOutputReference getArtifactConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference">SyntheticsCanaryArtifactConfigOutputReference</a>

---

##### `engineArn`<sup>Required</sup> <a name="engineArn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.engineArn"></a>

```java
public java.lang.String getEngineArn();
```

- *Type:* java.lang.String

---

##### `runConfig`<sup>Required</sup> <a name="runConfig" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.runConfig"></a>

```java
public SyntheticsCanaryRunConfigOutputReference getRunConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference">SyntheticsCanaryRunConfigOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.schedule"></a>

```java
public SyntheticsCanaryScheduleOutputReference getSchedule();
```

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference">SyntheticsCanaryScheduleOutputReference</a>

---

##### `sourceLocationArn`<sup>Required</sup> <a name="sourceLocationArn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.sourceLocationArn"></a>

```java
public java.lang.String getSourceLocationArn();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeline`<sup>Required</sup> <a name="timeline" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.timeline"></a>

```java
public SyntheticsCanaryTimelineList getTimeline();
```

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineList">SyntheticsCanaryTimelineList</a>

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.vpcConfig"></a>

```java
public SyntheticsCanaryVpcConfigOutputReference getVpcConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference">SyntheticsCanaryVpcConfigOutputReference</a>

---

##### `artifactConfigInput`<sup>Optional</sup> <a name="artifactConfigInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.artifactConfigInput"></a>

```java
public SyntheticsCanaryArtifactConfig getArtifactConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a>

---

##### `artifactS3LocationInput`<sup>Optional</sup> <a name="artifactS3LocationInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.artifactS3LocationInput"></a>

```java
public java.lang.String getArtifactS3LocationInput();
```

- *Type:* java.lang.String

---

##### `deleteLambdaInput`<sup>Optional</sup> <a name="deleteLambdaInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.deleteLambdaInput"></a>

```java
public java.lang.Object getDeleteLambdaInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `executionRoleArnInput`<sup>Optional</sup> <a name="executionRoleArnInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.executionRoleArnInput"></a>

```java
public java.lang.String getExecutionRoleArnInput();
```

- *Type:* java.lang.String

---

##### `failureRetentionPeriodInput`<sup>Optional</sup> <a name="failureRetentionPeriodInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.failureRetentionPeriodInput"></a>

```java
public java.lang.Number getFailureRetentionPeriodInput();
```

- *Type:* java.lang.Number

---

##### `handlerInput`<sup>Optional</sup> <a name="handlerInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.handlerInput"></a>

```java
public java.lang.String getHandlerInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `runConfigInput`<sup>Optional</sup> <a name="runConfigInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.runConfigInput"></a>

```java
public SyntheticsCanaryRunConfig getRunConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a>

---

##### `runtimeVersionInput`<sup>Optional</sup> <a name="runtimeVersionInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.runtimeVersionInput"></a>

```java
public java.lang.String getRuntimeVersionInput();
```

- *Type:* java.lang.String

---

##### `s3BucketInput`<sup>Optional</sup> <a name="s3BucketInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.s3BucketInput"></a>

```java
public java.lang.String getS3BucketInput();
```

- *Type:* java.lang.String

---

##### `s3KeyInput`<sup>Optional</sup> <a name="s3KeyInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.s3KeyInput"></a>

```java
public java.lang.String getS3KeyInput();
```

- *Type:* java.lang.String

---

##### `s3VersionInput`<sup>Optional</sup> <a name="s3VersionInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.s3VersionInput"></a>

```java
public java.lang.String getS3VersionInput();
```

- *Type:* java.lang.String

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.scheduleInput"></a>

```java
public SyntheticsCanarySchedule getScheduleInput();
```

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a>

---

##### `startCanaryInput`<sup>Optional</sup> <a name="startCanaryInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.startCanaryInput"></a>

```java
public java.lang.Object getStartCanaryInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `successRetentionPeriodInput`<sup>Optional</sup> <a name="successRetentionPeriodInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.successRetentionPeriodInput"></a>

```java
public java.lang.Number getSuccessRetentionPeriodInput();
```

- *Type:* java.lang.Number

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vpcConfigInput`<sup>Optional</sup> <a name="vpcConfigInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.vpcConfigInput"></a>

```java
public SyntheticsCanaryVpcConfig getVpcConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a>

---

##### `zipFileInput`<sup>Optional</sup> <a name="zipFileInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.zipFileInput"></a>

```java
public java.lang.String getZipFileInput();
```

- *Type:* java.lang.String

---

##### `artifactS3Location`<sup>Required</sup> <a name="artifactS3Location" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.artifactS3Location"></a>

```java
public java.lang.String getArtifactS3Location();
```

- *Type:* java.lang.String

---

##### `deleteLambda`<sup>Required</sup> <a name="deleteLambda" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.deleteLambda"></a>

```java
public java.lang.Object getDeleteLambda();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.executionRoleArn"></a>

```java
public java.lang.String getExecutionRoleArn();
```

- *Type:* java.lang.String

---

##### `failureRetentionPeriod`<sup>Required</sup> <a name="failureRetentionPeriod" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.failureRetentionPeriod"></a>

```java
public java.lang.Number getFailureRetentionPeriod();
```

- *Type:* java.lang.Number

---

##### `handler`<sup>Required</sup> <a name="handler" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.handler"></a>

```java
public java.lang.String getHandler();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.runtimeVersion"></a>

```java
public java.lang.String getRuntimeVersion();
```

- *Type:* java.lang.String

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.s3Bucket"></a>

```java
public java.lang.String getS3Bucket();
```

- *Type:* java.lang.String

---

##### `s3Key`<sup>Required</sup> <a name="s3Key" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.s3Key"></a>

```java
public java.lang.String getS3Key();
```

- *Type:* java.lang.String

---

##### `s3Version`<sup>Required</sup> <a name="s3Version" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.s3Version"></a>

```java
public java.lang.String getS3Version();
```

- *Type:* java.lang.String

---

##### `startCanary`<sup>Required</sup> <a name="startCanary" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.startCanary"></a>

```java
public java.lang.Object getStartCanary();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `successRetentionPeriod`<sup>Required</sup> <a name="successRetentionPeriod" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.successRetentionPeriod"></a>

```java
public java.lang.Number getSuccessRetentionPeriod();
```

- *Type:* java.lang.Number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `zipFile`<sup>Required</sup> <a name="zipFile" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.zipFile"></a>

```java
public java.lang.String getZipFile();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanary.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsCanaryArtifactConfig <a name="SyntheticsCanaryArtifactConfig" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.synthetics_canary.SyntheticsCanaryArtifactConfig;

SyntheticsCanaryArtifactConfig.builder()
//  .s3Encryption(SyntheticsCanaryArtifactConfigS3Encryption)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfig.property.s3Encryption">s3Encryption</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a></code> | s3_encryption block. |

---

##### `s3Encryption`<sup>Optional</sup> <a name="s3Encryption" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfig.property.s3Encryption"></a>

```java
public SyntheticsCanaryArtifactConfigS3Encryption getS3Encryption();
```

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a>

s3_encryption block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#s3_encryption SyntheticsCanary#s3_encryption}

---

### SyntheticsCanaryArtifactConfigS3Encryption <a name="SyntheticsCanaryArtifactConfigS3Encryption" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.synthetics_canary.SyntheticsCanaryArtifactConfigS3Encryption;

SyntheticsCanaryArtifactConfigS3Encryption.builder()
//  .encryptionMode(java.lang.String)
//  .kmsKeyArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption.property.encryptionMode">encryptionMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#encryption_mode SyntheticsCanary#encryption_mode}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#kms_key_arn SyntheticsCanary#kms_key_arn}. |

---

##### `encryptionMode`<sup>Optional</sup> <a name="encryptionMode" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption.property.encryptionMode"></a>

```java
public java.lang.String getEncryptionMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#encryption_mode SyntheticsCanary#encryption_mode}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#kms_key_arn SyntheticsCanary#kms_key_arn}.

---

### SyntheticsCanaryConfig <a name="SyntheticsCanaryConfig" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.synthetics_canary.SyntheticsCanaryConfig;

SyntheticsCanaryConfig.builder()
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
    .artifactS3Location(java.lang.String)
    .executionRoleArn(java.lang.String)
    .handler(java.lang.String)
    .name(java.lang.String)
    .runtimeVersion(java.lang.String)
    .schedule(SyntheticsCanarySchedule)
//  .artifactConfig(SyntheticsCanaryArtifactConfig)
//  .deleteLambda(java.lang.Boolean)
//  .deleteLambda(IResolvable)
//  .failureRetentionPeriod(java.lang.Number)
//  .id(java.lang.String)
//  .runConfig(SyntheticsCanaryRunConfig)
//  .s3Bucket(java.lang.String)
//  .s3Key(java.lang.String)
//  .s3Version(java.lang.String)
//  .startCanary(java.lang.Boolean)
//  .startCanary(IResolvable)
//  .successRetentionPeriod(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .vpcConfig(SyntheticsCanaryVpcConfig)
//  .zipFile(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.artifactS3Location">artifactS3Location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#artifact_s3_location SyntheticsCanary#artifact_s3_location}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#execution_role_arn SyntheticsCanary#execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.handler">handler</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#handler SyntheticsCanary#handler}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#name SyntheticsCanary#name}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.runtimeVersion">runtimeVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#runtime_version SyntheticsCanary#runtime_version}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.artifactConfig">artifactConfig</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a></code> | artifact_config block. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.deleteLambda">deleteLambda</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#delete_lambda SyntheticsCanary#delete_lambda}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.failureRetentionPeriod">failureRetentionPeriod</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#failure_retention_period SyntheticsCanary#failure_retention_period}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#id SyntheticsCanary#id}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.runConfig">runConfig</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a></code> | run_config block. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.s3Bucket">s3Bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#s3_bucket SyntheticsCanary#s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.s3Key">s3Key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#s3_key SyntheticsCanary#s3_key}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.s3Version">s3Version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#s3_version SyntheticsCanary#s3_version}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.startCanary">startCanary</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#start_canary SyntheticsCanary#start_canary}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.successRetentionPeriod">successRetentionPeriod</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#success_retention_period SyntheticsCanary#success_retention_period}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#tags SyntheticsCanary#tags}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#tags_all SyntheticsCanary#tags_all}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a></code> | vpc_config block. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.zipFile">zipFile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#zip_file SyntheticsCanary#zip_file}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `artifactS3Location`<sup>Required</sup> <a name="artifactS3Location" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.artifactS3Location"></a>

```java
public java.lang.String getArtifactS3Location();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#artifact_s3_location SyntheticsCanary#artifact_s3_location}.

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.executionRoleArn"></a>

```java
public java.lang.String getExecutionRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#execution_role_arn SyntheticsCanary#execution_role_arn}.

---

##### `handler`<sup>Required</sup> <a name="handler" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.handler"></a>

```java
public java.lang.String getHandler();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#handler SyntheticsCanary#handler}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#name SyntheticsCanary#name}.

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.runtimeVersion"></a>

```java
public java.lang.String getRuntimeVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#runtime_version SyntheticsCanary#runtime_version}.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.schedule"></a>

```java
public SyntheticsCanarySchedule getSchedule();
```

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#schedule SyntheticsCanary#schedule}

---

##### `artifactConfig`<sup>Optional</sup> <a name="artifactConfig" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.artifactConfig"></a>

```java
public SyntheticsCanaryArtifactConfig getArtifactConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a>

artifact_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#artifact_config SyntheticsCanary#artifact_config}

---

##### `deleteLambda`<sup>Optional</sup> <a name="deleteLambda" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.deleteLambda"></a>

```java
public java.lang.Object getDeleteLambda();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#delete_lambda SyntheticsCanary#delete_lambda}.

---

##### `failureRetentionPeriod`<sup>Optional</sup> <a name="failureRetentionPeriod" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.failureRetentionPeriod"></a>

```java
public java.lang.Number getFailureRetentionPeriod();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#failure_retention_period SyntheticsCanary#failure_retention_period}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#id SyntheticsCanary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `runConfig`<sup>Optional</sup> <a name="runConfig" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.runConfig"></a>

```java
public SyntheticsCanaryRunConfig getRunConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a>

run_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#run_config SyntheticsCanary#run_config}

---

##### `s3Bucket`<sup>Optional</sup> <a name="s3Bucket" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.s3Bucket"></a>

```java
public java.lang.String getS3Bucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#s3_bucket SyntheticsCanary#s3_bucket}.

---

##### `s3Key`<sup>Optional</sup> <a name="s3Key" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.s3Key"></a>

```java
public java.lang.String getS3Key();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#s3_key SyntheticsCanary#s3_key}.

---

##### `s3Version`<sup>Optional</sup> <a name="s3Version" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.s3Version"></a>

```java
public java.lang.String getS3Version();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#s3_version SyntheticsCanary#s3_version}.

---

##### `startCanary`<sup>Optional</sup> <a name="startCanary" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.startCanary"></a>

```java
public java.lang.Object getStartCanary();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#start_canary SyntheticsCanary#start_canary}.

---

##### `successRetentionPeriod`<sup>Optional</sup> <a name="successRetentionPeriod" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.successRetentionPeriod"></a>

```java
public java.lang.Number getSuccessRetentionPeriod();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#success_retention_period SyntheticsCanary#success_retention_period}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#tags SyntheticsCanary#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#tags_all SyntheticsCanary#tags_all}.

---

##### `vpcConfig`<sup>Optional</sup> <a name="vpcConfig" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.vpcConfig"></a>

```java
public SyntheticsCanaryVpcConfig getVpcConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a>

vpc_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#vpc_config SyntheticsCanary#vpc_config}

---

##### `zipFile`<sup>Optional</sup> <a name="zipFile" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryConfig.property.zipFile"></a>

```java
public java.lang.String getZipFile();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#zip_file SyntheticsCanary#zip_file}.

---

### SyntheticsCanaryRunConfig <a name="SyntheticsCanaryRunConfig" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.synthetics_canary.SyntheticsCanaryRunConfig;

SyntheticsCanaryRunConfig.builder()
//  .activeTracing(java.lang.Boolean)
//  .activeTracing(IResolvable)
//  .environmentVariables(java.util.Map<java.lang.String, java.lang.String>)
//  .memoryInMb(java.lang.Number)
//  .timeoutInSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfig.property.activeTracing">activeTracing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#active_tracing SyntheticsCanary#active_tracing}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfig.property.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#environment_variables SyntheticsCanary#environment_variables}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfig.property.memoryInMb">memoryInMb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#memory_in_mb SyntheticsCanary#memory_in_mb}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfig.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#timeout_in_seconds SyntheticsCanary#timeout_in_seconds}. |

---

##### `activeTracing`<sup>Optional</sup> <a name="activeTracing" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfig.property.activeTracing"></a>

```java
public java.lang.Object getActiveTracing();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#active_tracing SyntheticsCanary#active_tracing}.

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfig.property.environmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#environment_variables SyntheticsCanary#environment_variables}.

---

##### `memoryInMb`<sup>Optional</sup> <a name="memoryInMb" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfig.property.memoryInMb"></a>

```java
public java.lang.Number getMemoryInMb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#memory_in_mb SyntheticsCanary#memory_in_mb}.

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="timeoutInSeconds" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfig.property.timeoutInSeconds"></a>

```java
public java.lang.Number getTimeoutInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#timeout_in_seconds SyntheticsCanary#timeout_in_seconds}.

---

### SyntheticsCanarySchedule <a name="SyntheticsCanarySchedule" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanarySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanarySchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.synthetics_canary.SyntheticsCanarySchedule;

SyntheticsCanarySchedule.builder()
    .expression(java.lang.String)
//  .durationInSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanarySchedule.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#expression SyntheticsCanary#expression}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanarySchedule.property.durationInSeconds">durationInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#duration_in_seconds SyntheticsCanary#duration_in_seconds}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanarySchedule.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#expression SyntheticsCanary#expression}.

---

##### `durationInSeconds`<sup>Optional</sup> <a name="durationInSeconds" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanarySchedule.property.durationInSeconds"></a>

```java
public java.lang.Number getDurationInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#duration_in_seconds SyntheticsCanary#duration_in_seconds}.

---

### SyntheticsCanaryTimeline <a name="SyntheticsCanaryTimeline" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimeline"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimeline.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.synthetics_canary.SyntheticsCanaryTimeline;

SyntheticsCanaryTimeline.builder()
    .build();
```


### SyntheticsCanaryVpcConfig <a name="SyntheticsCanaryVpcConfig" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.synthetics_canary.SyntheticsCanaryVpcConfig;

SyntheticsCanaryVpcConfig.builder()
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .subnetIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#security_group_ids SyntheticsCanary#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfig.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#subnet_ids SyntheticsCanary#subnet_ids}. |

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfig.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#security_group_ids SyntheticsCanary#security_group_ids}.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfig.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#subnet_ids SyntheticsCanary#subnet_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### SyntheticsCanaryArtifactConfigOutputReference <a name="SyntheticsCanaryArtifactConfigOutputReference" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.synthetics_canary.SyntheticsCanaryArtifactConfigOutputReference;

new SyntheticsCanaryArtifactConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.putS3Encryption">putS3Encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.resetS3Encryption">resetS3Encryption</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3Encryption` <a name="putS3Encryption" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.putS3Encryption"></a>

```java
public void putS3Encryption(SyntheticsCanaryArtifactConfigS3Encryption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.putS3Encryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a>

---

##### `resetS3Encryption` <a name="resetS3Encryption" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.resetS3Encryption"></a>

```java
public void resetS3Encryption()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.s3Encryption">s3Encryption</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference">SyntheticsCanaryArtifactConfigS3EncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.s3EncryptionInput">s3EncryptionInput</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3Encryption`<sup>Required</sup> <a name="s3Encryption" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.s3Encryption"></a>

```java
public SyntheticsCanaryArtifactConfigS3EncryptionOutputReference getS3Encryption();
```

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference">SyntheticsCanaryArtifactConfigS3EncryptionOutputReference</a>

---

##### `s3EncryptionInput`<sup>Optional</sup> <a name="s3EncryptionInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.s3EncryptionInput"></a>

```java
public SyntheticsCanaryArtifactConfigS3Encryption getS3EncryptionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.internalValue"></a>

```java
public SyntheticsCanaryArtifactConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a>

---


### SyntheticsCanaryArtifactConfigS3EncryptionOutputReference <a name="SyntheticsCanaryArtifactConfigS3EncryptionOutputReference" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.synthetics_canary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference;

new SyntheticsCanaryArtifactConfigS3EncryptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resetEncryptionMode">resetEncryptionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncryptionMode` <a name="resetEncryptionMode" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resetEncryptionMode"></a>

```java
public void resetEncryptionMode()
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.encryptionModeInput">encryptionModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.encryptionMode">encryptionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionModeInput`<sup>Optional</sup> <a name="encryptionModeInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.encryptionModeInput"></a>

```java
public java.lang.String getEncryptionModeInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `encryptionMode`<sup>Required</sup> <a name="encryptionMode" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.encryptionMode"></a>

```java
public java.lang.String getEncryptionMode();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.internalValue"></a>

```java
public SyntheticsCanaryArtifactConfigS3Encryption getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a>

---


### SyntheticsCanaryRunConfigOutputReference <a name="SyntheticsCanaryRunConfigOutputReference" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.synthetics_canary.SyntheticsCanaryRunConfigOutputReference;

new SyntheticsCanaryRunConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetActiveTracing">resetActiveTracing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetMemoryInMb">resetMemoryInMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetTimeoutInSeconds">resetTimeoutInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActiveTracing` <a name="resetActiveTracing" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetActiveTracing"></a>

```java
public void resetActiveTracing()
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetEnvironmentVariables"></a>

```java
public void resetEnvironmentVariables()
```

##### `resetMemoryInMb` <a name="resetMemoryInMb" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetMemoryInMb"></a>

```java
public void resetMemoryInMb()
```

##### `resetTimeoutInSeconds` <a name="resetTimeoutInSeconds" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetTimeoutInSeconds"></a>

```java
public void resetTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.activeTracingInput">activeTracingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.memoryInMbInput">memoryInMbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.timeoutInSecondsInput">timeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.activeTracing">activeTracing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.memoryInMb">memoryInMb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `activeTracingInput`<sup>Optional</sup> <a name="activeTracingInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.activeTracingInput"></a>

```java
public java.lang.Object getActiveTracingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.environmentVariablesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariablesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `memoryInMbInput`<sup>Optional</sup> <a name="memoryInMbInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.memoryInMbInput"></a>

```java
public java.lang.Number getMemoryInMbInput();
```

- *Type:* java.lang.Number

---

##### `timeoutInSecondsInput`<sup>Optional</sup> <a name="timeoutInSecondsInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.timeoutInSecondsInput"></a>

```java
public java.lang.Number getTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `activeTracing`<sup>Required</sup> <a name="activeTracing" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.activeTracing"></a>

```java
public java.lang.Object getActiveTracing();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.environmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `memoryInMb`<sup>Required</sup> <a name="memoryInMb" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.memoryInMb"></a>

```java
public java.lang.Number getMemoryInMb();
```

- *Type:* java.lang.Number

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.timeoutInSeconds"></a>

```java
public java.lang.Number getTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.internalValue"></a>

```java
public SyntheticsCanaryRunConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a>

---


### SyntheticsCanaryScheduleOutputReference <a name="SyntheticsCanaryScheduleOutputReference" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.synthetics_canary.SyntheticsCanaryScheduleOutputReference;

new SyntheticsCanaryScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resetDurationInSeconds">resetDurationInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDurationInSeconds` <a name="resetDurationInSeconds" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resetDurationInSeconds"></a>

```java
public void resetDurationInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.durationInSecondsInput">durationInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.durationInSeconds">durationInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `durationInSecondsInput`<sup>Optional</sup> <a name="durationInSecondsInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.durationInSecondsInput"></a>

```java
public java.lang.Number getDurationInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `durationInSeconds`<sup>Required</sup> <a name="durationInSeconds" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.durationInSeconds"></a>

```java
public java.lang.Number getDurationInSeconds();
```

- *Type:* java.lang.Number

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.internalValue"></a>

```java
public SyntheticsCanarySchedule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a>

---


### SyntheticsCanaryTimelineList <a name="SyntheticsCanaryTimelineList" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.synthetics_canary.SyntheticsCanaryTimelineList;

new SyntheticsCanaryTimelineList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineList.get"></a>

```java
public SyntheticsCanaryTimelineOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### SyntheticsCanaryTimelineOutputReference <a name="SyntheticsCanaryTimelineOutputReference" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.synthetics_canary.SyntheticsCanaryTimelineOutputReference;

new SyntheticsCanaryTimelineOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.property.lastModified">lastModified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.property.lastStarted">lastStarted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.property.lastStopped">lastStopped</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimeline">SyntheticsCanaryTimeline</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.property.lastModified"></a>

```java
public java.lang.String getLastModified();
```

- *Type:* java.lang.String

---

##### `lastStarted`<sup>Required</sup> <a name="lastStarted" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.property.lastStarted"></a>

```java
public java.lang.String getLastStarted();
```

- *Type:* java.lang.String

---

##### `lastStopped`<sup>Required</sup> <a name="lastStopped" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.property.lastStopped"></a>

```java
public java.lang.String getLastStopped();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.property.internalValue"></a>

```java
public SyntheticsCanaryTimeline getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryTimeline">SyntheticsCanaryTimeline</a>

---


### SyntheticsCanaryVpcConfigOutputReference <a name="SyntheticsCanaryVpcConfigOutputReference" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.synthetics_canary.SyntheticsCanaryVpcConfigOutputReference;

new SyntheticsCanaryVpcConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetSubnetIds"></a>

```java
public void resetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.internalValue"></a>

```java
public SyntheticsCanaryVpcConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a>

---



