# `glueJob` Submodule <a name="`glueJob` Submodule" id="@cdktf/provider-aws.glueJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueJob <a name="GlueJob" id="@cdktf/provider-aws.glueJob.GlueJob"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_job aws_glue_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_job.GlueJob;

GlueJob.Builder.create(Construct scope, java.lang.String id)
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
    .command(GlueJobCommand)
    .name(java.lang.String)
    .roleArn(java.lang.String)
//  .connections(java.util.List<java.lang.String>)
//  .defaultArguments(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .executionClass(java.lang.String)
//  .executionProperty(GlueJobExecutionProperty)
//  .glueVersion(java.lang.String)
//  .id(java.lang.String)
//  .maxCapacity(java.lang.Number)
//  .maxRetries(java.lang.Number)
//  .nonOverridableArguments(java.util.Map<java.lang.String, java.lang.String>)
//  .notificationProperty(GlueJobNotificationProperty)
//  .numberOfWorkers(java.lang.Number)
//  .securityConfiguration(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeout(java.lang.Number)
//  .workerType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.command">command</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommand">GlueJobCommand</a></code> | command block. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#name GlueJob#name}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#role_arn GlueJob#role_arn}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.connections">connections</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#connections GlueJob#connections}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.defaultArguments">defaultArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#default_arguments GlueJob#default_arguments}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#description GlueJob#description}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.executionClass">executionClass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#execution_class GlueJob#execution_class}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.executionProperty">executionProperty</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a></code> | execution_property block. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.glueVersion">glueVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#glue_version GlueJob#glue_version}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#id GlueJob#id}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#max_capacity GlueJob#max_capacity}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#max_retries GlueJob#max_retries}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.nonOverridableArguments">nonOverridableArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#non_overridable_arguments GlueJob#non_overridable_arguments}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.notificationProperty">notificationProperty</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a></code> | notification_property block. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.numberOfWorkers">numberOfWorkers</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#number_of_workers GlueJob#number_of_workers}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.securityConfiguration">securityConfiguration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#security_configuration GlueJob#security_configuration}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#tags GlueJob#tags}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#tags_all GlueJob#tags_all}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.timeout">timeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#timeout GlueJob#timeout}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.workerType">workerType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#worker_type GlueJob#worker_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.command"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobCommand">GlueJobCommand</a>

command block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#command GlueJob#command}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#name GlueJob#name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#role_arn GlueJob#role_arn}.

---

##### `connections`<sup>Optional</sup> <a name="connections" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.connections"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#connections GlueJob#connections}.

---

##### `defaultArguments`<sup>Optional</sup> <a name="defaultArguments" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.defaultArguments"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#default_arguments GlueJob#default_arguments}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#description GlueJob#description}.

---

##### `executionClass`<sup>Optional</sup> <a name="executionClass" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.executionClass"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#execution_class GlueJob#execution_class}.

---

##### `executionProperty`<sup>Optional</sup> <a name="executionProperty" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.executionProperty"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a>

execution_property block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#execution_property GlueJob#execution_property}

---

##### `glueVersion`<sup>Optional</sup> <a name="glueVersion" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.glueVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#glue_version GlueJob#glue_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#id GlueJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxCapacity`<sup>Optional</sup> <a name="maxCapacity" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.maxCapacity"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#max_capacity GlueJob#max_capacity}.

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.maxRetries"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#max_retries GlueJob#max_retries}.

---

##### `nonOverridableArguments`<sup>Optional</sup> <a name="nonOverridableArguments" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.nonOverridableArguments"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#non_overridable_arguments GlueJob#non_overridable_arguments}.

---

##### `notificationProperty`<sup>Optional</sup> <a name="notificationProperty" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.notificationProperty"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a>

notification_property block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#notification_property GlueJob#notification_property}

---

##### `numberOfWorkers`<sup>Optional</sup> <a name="numberOfWorkers" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.numberOfWorkers"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#number_of_workers GlueJob#number_of_workers}.

---

##### `securityConfiguration`<sup>Optional</sup> <a name="securityConfiguration" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.securityConfiguration"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#security_configuration GlueJob#security_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#tags GlueJob#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#tags_all GlueJob#tags_all}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.timeout"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#timeout GlueJob#timeout}.

---

##### `workerType`<sup>Optional</sup> <a name="workerType" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.workerType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#worker_type GlueJob#worker_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.putCommand">putCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.putExecutionProperty">putExecutionProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.putNotificationProperty">putNotificationProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetConnections">resetConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetDefaultArguments">resetDefaultArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetExecutionClass">resetExecutionClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetExecutionProperty">resetExecutionProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetGlueVersion">resetGlueVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetMaxCapacity">resetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetMaxRetries">resetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetNonOverridableArguments">resetNonOverridableArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetNotificationProperty">resetNotificationProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetNumberOfWorkers">resetNumberOfWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetSecurityConfiguration">resetSecurityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetWorkerType">resetWorkerType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueJob.GlueJob.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.glueJob.GlueJob.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glueJob.GlueJob.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueJob.GlueJob.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.glueJob.GlueJob.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.glueJob.GlueJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.glueJob.GlueJob.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.glueJob.GlueJob.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.glueJob.GlueJob.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCommand` <a name="putCommand" id="@cdktf/provider-aws.glueJob.GlueJob.putCommand"></a>

```java
public void putCommand(GlueJobCommand value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueJob.GlueJob.putCommand.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobCommand">GlueJobCommand</a>

---

##### `putExecutionProperty` <a name="putExecutionProperty" id="@cdktf/provider-aws.glueJob.GlueJob.putExecutionProperty"></a>

```java
public void putExecutionProperty(GlueJobExecutionProperty value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueJob.GlueJob.putExecutionProperty.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a>

---

##### `putNotificationProperty` <a name="putNotificationProperty" id="@cdktf/provider-aws.glueJob.GlueJob.putNotificationProperty"></a>

```java
public void putNotificationProperty(GlueJobNotificationProperty value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueJob.GlueJob.putNotificationProperty.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a>

---

##### `resetConnections` <a name="resetConnections" id="@cdktf/provider-aws.glueJob.GlueJob.resetConnections"></a>

```java
public void resetConnections()
```

##### `resetDefaultArguments` <a name="resetDefaultArguments" id="@cdktf/provider-aws.glueJob.GlueJob.resetDefaultArguments"></a>

```java
public void resetDefaultArguments()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.glueJob.GlueJob.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExecutionClass` <a name="resetExecutionClass" id="@cdktf/provider-aws.glueJob.GlueJob.resetExecutionClass"></a>

```java
public void resetExecutionClass()
```

##### `resetExecutionProperty` <a name="resetExecutionProperty" id="@cdktf/provider-aws.glueJob.GlueJob.resetExecutionProperty"></a>

```java
public void resetExecutionProperty()
```

##### `resetGlueVersion` <a name="resetGlueVersion" id="@cdktf/provider-aws.glueJob.GlueJob.resetGlueVersion"></a>

```java
public void resetGlueVersion()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.glueJob.GlueJob.resetId"></a>

```java
public void resetId()
```

##### `resetMaxCapacity` <a name="resetMaxCapacity" id="@cdktf/provider-aws.glueJob.GlueJob.resetMaxCapacity"></a>

```java
public void resetMaxCapacity()
```

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktf/provider-aws.glueJob.GlueJob.resetMaxRetries"></a>

```java
public void resetMaxRetries()
```

##### `resetNonOverridableArguments` <a name="resetNonOverridableArguments" id="@cdktf/provider-aws.glueJob.GlueJob.resetNonOverridableArguments"></a>

```java
public void resetNonOverridableArguments()
```

##### `resetNotificationProperty` <a name="resetNotificationProperty" id="@cdktf/provider-aws.glueJob.GlueJob.resetNotificationProperty"></a>

```java
public void resetNotificationProperty()
```

##### `resetNumberOfWorkers` <a name="resetNumberOfWorkers" id="@cdktf/provider-aws.glueJob.GlueJob.resetNumberOfWorkers"></a>

```java
public void resetNumberOfWorkers()
```

##### `resetSecurityConfiguration` <a name="resetSecurityConfiguration" id="@cdktf/provider-aws.glueJob.GlueJob.resetSecurityConfiguration"></a>

```java
public void resetSecurityConfiguration()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.glueJob.GlueJob.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.glueJob.GlueJob.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-aws.glueJob.GlueJob.resetTimeout"></a>

```java
public void resetTimeout()
```

##### `resetWorkerType` <a name="resetWorkerType" id="@cdktf/provider-aws.glueJob.GlueJob.resetWorkerType"></a>

```java
public void resetWorkerType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.glueJob.GlueJob.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_job.GlueJob;

GlueJob.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueJob.GlueJob.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.glueJob.GlueJob.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_job.GlueJob;

GlueJob.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueJob.GlueJob.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.glueJob.GlueJob.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_job.GlueJob;

GlueJob.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueJob.GlueJob.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.command">command</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference">GlueJobCommandOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.executionProperty">executionProperty</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference">GlueJobExecutionPropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.notificationProperty">notificationProperty</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference">GlueJobNotificationPropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.commandInput">commandInput</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommand">GlueJobCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.connectionsInput">connectionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.defaultArgumentsInput">defaultArgumentsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.executionClassInput">executionClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.executionPropertyInput">executionPropertyInput</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.glueVersionInput">glueVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.maxCapacityInput">maxCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.maxRetriesInput">maxRetriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.nonOverridableArgumentsInput">nonOverridableArgumentsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.notificationPropertyInput">notificationPropertyInput</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.numberOfWorkersInput">numberOfWorkersInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.securityConfigurationInput">securityConfigurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.workerTypeInput">workerTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.connections">connections</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.defaultArguments">defaultArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.executionClass">executionClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.glueVersion">glueVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.nonOverridableArguments">nonOverridableArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.numberOfWorkers">numberOfWorkers</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.securityConfiguration">securityConfiguration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.workerType">workerType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.glueJob.GlueJob.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.glueJob.GlueJob.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueJob.GlueJob.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.glueJob.GlueJob.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.glueJob.GlueJob.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.glueJob.GlueJob.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.glueJob.GlueJob.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueJob.GlueJob.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueJob.GlueJob.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.glueJob.GlueJob.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.glueJob.GlueJob.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueJob.GlueJob.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueJob.GlueJob.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueJob.GlueJob.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.glueJob.GlueJob.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-aws.glueJob.GlueJob.property.command"></a>

```java
public GlueJobCommandOutputReference getCommand();
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference">GlueJobCommandOutputReference</a>

---

##### `executionProperty`<sup>Required</sup> <a name="executionProperty" id="@cdktf/provider-aws.glueJob.GlueJob.property.executionProperty"></a>

```java
public GlueJobExecutionPropertyOutputReference getExecutionProperty();
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference">GlueJobExecutionPropertyOutputReference</a>

---

##### `notificationProperty`<sup>Required</sup> <a name="notificationProperty" id="@cdktf/provider-aws.glueJob.GlueJob.property.notificationProperty"></a>

```java
public GlueJobNotificationPropertyOutputReference getNotificationProperty();
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference">GlueJobNotificationPropertyOutputReference</a>

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.commandInput"></a>

```java
public GlueJobCommand getCommandInput();
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobCommand">GlueJobCommand</a>

---

##### `connectionsInput`<sup>Optional</sup> <a name="connectionsInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.connectionsInput"></a>

```java
public java.util.List<java.lang.String> getConnectionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultArgumentsInput`<sup>Optional</sup> <a name="defaultArgumentsInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.defaultArgumentsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefaultArgumentsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `executionClassInput`<sup>Optional</sup> <a name="executionClassInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.executionClassInput"></a>

```java
public java.lang.String getExecutionClassInput();
```

- *Type:* java.lang.String

---

##### `executionPropertyInput`<sup>Optional</sup> <a name="executionPropertyInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.executionPropertyInput"></a>

```java
public GlueJobExecutionProperty getExecutionPropertyInput();
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a>

---

##### `glueVersionInput`<sup>Optional</sup> <a name="glueVersionInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.glueVersionInput"></a>

```java
public java.lang.String getGlueVersionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maxCapacityInput`<sup>Optional</sup> <a name="maxCapacityInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.maxCapacityInput"></a>

```java
public java.lang.Number getMaxCapacityInput();
```

- *Type:* java.lang.Number

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.maxRetriesInput"></a>

```java
public java.lang.Number getMaxRetriesInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nonOverridableArgumentsInput`<sup>Optional</sup> <a name="nonOverridableArgumentsInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.nonOverridableArgumentsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getNonOverridableArgumentsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `notificationPropertyInput`<sup>Optional</sup> <a name="notificationPropertyInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.notificationPropertyInput"></a>

```java
public GlueJobNotificationProperty getNotificationPropertyInput();
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a>

---

##### `numberOfWorkersInput`<sup>Optional</sup> <a name="numberOfWorkersInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.numberOfWorkersInput"></a>

```java
public java.lang.Number getNumberOfWorkersInput();
```

- *Type:* java.lang.Number

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `securityConfigurationInput`<sup>Optional</sup> <a name="securityConfigurationInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.securityConfigurationInput"></a>

```java
public java.lang.String getSecurityConfigurationInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.timeoutInput"></a>

```java
public java.lang.Number getTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `workerTypeInput`<sup>Optional</sup> <a name="workerTypeInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.workerTypeInput"></a>

```java
public java.lang.String getWorkerTypeInput();
```

- *Type:* java.lang.String

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-aws.glueJob.GlueJob.property.connections"></a>

```java
public java.util.List<java.lang.String> getConnections();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultArguments`<sup>Required</sup> <a name="defaultArguments" id="@cdktf/provider-aws.glueJob.GlueJob.property.defaultArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefaultArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.glueJob.GlueJob.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `executionClass`<sup>Required</sup> <a name="executionClass" id="@cdktf/provider-aws.glueJob.GlueJob.property.executionClass"></a>

```java
public java.lang.String getExecutionClass();
```

- *Type:* java.lang.String

---

##### `glueVersion`<sup>Required</sup> <a name="glueVersion" id="@cdktf/provider-aws.glueJob.GlueJob.property.glueVersion"></a>

```java
public java.lang.String getGlueVersion();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueJob.GlueJob.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktf/provider-aws.glueJob.GlueJob.property.maxCapacity"></a>

```java
public java.lang.Number getMaxCapacity();
```

- *Type:* java.lang.Number

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktf/provider-aws.glueJob.GlueJob.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueJob.GlueJob.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nonOverridableArguments`<sup>Required</sup> <a name="nonOverridableArguments" id="@cdktf/provider-aws.glueJob.GlueJob.property.nonOverridableArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getNonOverridableArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `numberOfWorkers`<sup>Required</sup> <a name="numberOfWorkers" id="@cdktf/provider-aws.glueJob.GlueJob.property.numberOfWorkers"></a>

```java
public java.lang.Number getNumberOfWorkers();
```

- *Type:* java.lang.Number

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.glueJob.GlueJob.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `securityConfiguration`<sup>Required</sup> <a name="securityConfiguration" id="@cdktf/provider-aws.glueJob.GlueJob.property.securityConfiguration"></a>

```java
public java.lang.String getSecurityConfiguration();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.glueJob.GlueJob.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.glueJob.GlueJob.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-aws.glueJob.GlueJob.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

---

##### `workerType`<sup>Required</sup> <a name="workerType" id="@cdktf/provider-aws.glueJob.GlueJob.property.workerType"></a>

```java
public java.lang.String getWorkerType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.glueJob.GlueJob.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GlueJobCommand <a name="GlueJobCommand" id="@cdktf/provider-aws.glueJob.GlueJobCommand"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueJob.GlueJobCommand.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_job.GlueJobCommand;

GlueJobCommand.builder()
    .scriptLocation(java.lang.String)
//  .name(java.lang.String)
//  .pythonVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommand.property.scriptLocation">scriptLocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#script_location GlueJob#script_location}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommand.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#name GlueJob#name}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommand.property.pythonVersion">pythonVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#python_version GlueJob#python_version}. |

---

##### `scriptLocation`<sup>Required</sup> <a name="scriptLocation" id="@cdktf/provider-aws.glueJob.GlueJobCommand.property.scriptLocation"></a>

```java
public java.lang.String getScriptLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#script_location GlueJob#script_location}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.glueJob.GlueJobCommand.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#name GlueJob#name}.

---

##### `pythonVersion`<sup>Optional</sup> <a name="pythonVersion" id="@cdktf/provider-aws.glueJob.GlueJobCommand.property.pythonVersion"></a>

```java
public java.lang.String getPythonVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#python_version GlueJob#python_version}.

---

### GlueJobConfig <a name="GlueJobConfig" id="@cdktf/provider-aws.glueJob.GlueJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueJob.GlueJobConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_job.GlueJobConfig;

GlueJobConfig.builder()
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
    .command(GlueJobCommand)
    .name(java.lang.String)
    .roleArn(java.lang.String)
//  .connections(java.util.List<java.lang.String>)
//  .defaultArguments(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .executionClass(java.lang.String)
//  .executionProperty(GlueJobExecutionProperty)
//  .glueVersion(java.lang.String)
//  .id(java.lang.String)
//  .maxCapacity(java.lang.Number)
//  .maxRetries(java.lang.Number)
//  .nonOverridableArguments(java.util.Map<java.lang.String, java.lang.String>)
//  .notificationProperty(GlueJobNotificationProperty)
//  .numberOfWorkers(java.lang.Number)
//  .securityConfiguration(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeout(java.lang.Number)
//  .workerType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.command">command</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommand">GlueJobCommand</a></code> | command block. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#name GlueJob#name}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#role_arn GlueJob#role_arn}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.connections">connections</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#connections GlueJob#connections}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.defaultArguments">defaultArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#default_arguments GlueJob#default_arguments}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#description GlueJob#description}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.executionClass">executionClass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#execution_class GlueJob#execution_class}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.executionProperty">executionProperty</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a></code> | execution_property block. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.glueVersion">glueVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#glue_version GlueJob#glue_version}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#id GlueJob#id}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#max_capacity GlueJob#max_capacity}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#max_retries GlueJob#max_retries}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.nonOverridableArguments">nonOverridableArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#non_overridable_arguments GlueJob#non_overridable_arguments}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.notificationProperty">notificationProperty</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a></code> | notification_property block. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.numberOfWorkers">numberOfWorkers</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#number_of_workers GlueJob#number_of_workers}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.securityConfiguration">securityConfiguration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#security_configuration GlueJob#security_configuration}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#tags GlueJob#tags}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#tags_all GlueJob#tags_all}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#timeout GlueJob#timeout}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.workerType">workerType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#worker_type GlueJob#worker_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.command"></a>

```java
public GlueJobCommand getCommand();
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobCommand">GlueJobCommand</a>

command block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#command GlueJob#command}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#name GlueJob#name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#role_arn GlueJob#role_arn}.

---

##### `connections`<sup>Optional</sup> <a name="connections" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.connections"></a>

```java
public java.util.List<java.lang.String> getConnections();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#connections GlueJob#connections}.

---

##### `defaultArguments`<sup>Optional</sup> <a name="defaultArguments" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.defaultArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefaultArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#default_arguments GlueJob#default_arguments}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#description GlueJob#description}.

---

##### `executionClass`<sup>Optional</sup> <a name="executionClass" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.executionClass"></a>

```java
public java.lang.String getExecutionClass();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#execution_class GlueJob#execution_class}.

---

##### `executionProperty`<sup>Optional</sup> <a name="executionProperty" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.executionProperty"></a>

```java
public GlueJobExecutionProperty getExecutionProperty();
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a>

execution_property block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#execution_property GlueJob#execution_property}

---

##### `glueVersion`<sup>Optional</sup> <a name="glueVersion" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.glueVersion"></a>

```java
public java.lang.String getGlueVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#glue_version GlueJob#glue_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#id GlueJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxCapacity`<sup>Optional</sup> <a name="maxCapacity" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.maxCapacity"></a>

```java
public java.lang.Number getMaxCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#max_capacity GlueJob#max_capacity}.

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#max_retries GlueJob#max_retries}.

---

##### `nonOverridableArguments`<sup>Optional</sup> <a name="nonOverridableArguments" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.nonOverridableArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getNonOverridableArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#non_overridable_arguments GlueJob#non_overridable_arguments}.

---

##### `notificationProperty`<sup>Optional</sup> <a name="notificationProperty" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.notificationProperty"></a>

```java
public GlueJobNotificationProperty getNotificationProperty();
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a>

notification_property block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#notification_property GlueJob#notification_property}

---

##### `numberOfWorkers`<sup>Optional</sup> <a name="numberOfWorkers" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.numberOfWorkers"></a>

```java
public java.lang.Number getNumberOfWorkers();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#number_of_workers GlueJob#number_of_workers}.

---

##### `securityConfiguration`<sup>Optional</sup> <a name="securityConfiguration" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.securityConfiguration"></a>

```java
public java.lang.String getSecurityConfiguration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#security_configuration GlueJob#security_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#tags GlueJob#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#tags_all GlueJob#tags_all}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#timeout GlueJob#timeout}.

---

##### `workerType`<sup>Optional</sup> <a name="workerType" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.workerType"></a>

```java
public java.lang.String getWorkerType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#worker_type GlueJob#worker_type}.

---

### GlueJobExecutionProperty <a name="GlueJobExecutionProperty" id="@cdktf/provider-aws.glueJob.GlueJobExecutionProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueJob.GlueJobExecutionProperty.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_job.GlueJobExecutionProperty;

GlueJobExecutionProperty.builder()
//  .maxConcurrentRuns(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionProperty.property.maxConcurrentRuns">maxConcurrentRuns</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#max_concurrent_runs GlueJob#max_concurrent_runs}. |

---

##### `maxConcurrentRuns`<sup>Optional</sup> <a name="maxConcurrentRuns" id="@cdktf/provider-aws.glueJob.GlueJobExecutionProperty.property.maxConcurrentRuns"></a>

```java
public java.lang.Number getMaxConcurrentRuns();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#max_concurrent_runs GlueJob#max_concurrent_runs}.

---

### GlueJobNotificationProperty <a name="GlueJobNotificationProperty" id="@cdktf/provider-aws.glueJob.GlueJobNotificationProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueJob.GlueJobNotificationProperty.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_job.GlueJobNotificationProperty;

GlueJobNotificationProperty.builder()
//  .notifyDelayAfter(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationProperty.property.notifyDelayAfter">notifyDelayAfter</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#notify_delay_after GlueJob#notify_delay_after}. |

---

##### `notifyDelayAfter`<sup>Optional</sup> <a name="notifyDelayAfter" id="@cdktf/provider-aws.glueJob.GlueJobNotificationProperty.property.notifyDelayAfter"></a>

```java
public java.lang.Number getNotifyDelayAfter();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#notify_delay_after GlueJob#notify_delay_after}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlueJobCommandOutputReference <a name="GlueJobCommandOutputReference" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_job.GlueJobCommandOutputReference;

new GlueJobCommandOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.resetPythonVersion">resetPythonVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPythonVersion` <a name="resetPythonVersion" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.resetPythonVersion"></a>

```java
public void resetPythonVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.pythonVersionInput">pythonVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.scriptLocationInput">scriptLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.pythonVersion">pythonVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.scriptLocation">scriptLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommand">GlueJobCommand</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pythonVersionInput`<sup>Optional</sup> <a name="pythonVersionInput" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.pythonVersionInput"></a>

```java
public java.lang.String getPythonVersionInput();
```

- *Type:* java.lang.String

---

##### `scriptLocationInput`<sup>Optional</sup> <a name="scriptLocationInput" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.scriptLocationInput"></a>

```java
public java.lang.String getScriptLocationInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pythonVersion`<sup>Required</sup> <a name="pythonVersion" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.pythonVersion"></a>

```java
public java.lang.String getPythonVersion();
```

- *Type:* java.lang.String

---

##### `scriptLocation`<sup>Required</sup> <a name="scriptLocation" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.scriptLocation"></a>

```java
public java.lang.String getScriptLocation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.internalValue"></a>

```java
public GlueJobCommand getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobCommand">GlueJobCommand</a>

---


### GlueJobExecutionPropertyOutputReference <a name="GlueJobExecutionPropertyOutputReference" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_job.GlueJobExecutionPropertyOutputReference;

new GlueJobExecutionPropertyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.resetMaxConcurrentRuns">resetMaxConcurrentRuns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxConcurrentRuns` <a name="resetMaxConcurrentRuns" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.resetMaxConcurrentRuns"></a>

```java
public void resetMaxConcurrentRuns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.property.maxConcurrentRunsInput">maxConcurrentRunsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.property.maxConcurrentRuns">maxConcurrentRuns</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxConcurrentRunsInput`<sup>Optional</sup> <a name="maxConcurrentRunsInput" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.property.maxConcurrentRunsInput"></a>

```java
public java.lang.Number getMaxConcurrentRunsInput();
```

- *Type:* java.lang.Number

---

##### `maxConcurrentRuns`<sup>Required</sup> <a name="maxConcurrentRuns" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.property.maxConcurrentRuns"></a>

```java
public java.lang.Number getMaxConcurrentRuns();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.property.internalValue"></a>

```java
public GlueJobExecutionProperty getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a>

---


### GlueJobNotificationPropertyOutputReference <a name="GlueJobNotificationPropertyOutputReference" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_job.GlueJobNotificationPropertyOutputReference;

new GlueJobNotificationPropertyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.resetNotifyDelayAfter">resetNotifyDelayAfter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNotifyDelayAfter` <a name="resetNotifyDelayAfter" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.resetNotifyDelayAfter"></a>

```java
public void resetNotifyDelayAfter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.property.notifyDelayAfterInput">notifyDelayAfterInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.property.notifyDelayAfter">notifyDelayAfter</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `notifyDelayAfterInput`<sup>Optional</sup> <a name="notifyDelayAfterInput" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.property.notifyDelayAfterInput"></a>

```java
public java.lang.Number getNotifyDelayAfterInput();
```

- *Type:* java.lang.Number

---

##### `notifyDelayAfter`<sup>Required</sup> <a name="notifyDelayAfter" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.property.notifyDelayAfter"></a>

```java
public java.lang.Number getNotifyDelayAfter();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.property.internalValue"></a>

```java
public GlueJobNotificationProperty getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a>

---



