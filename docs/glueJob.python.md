# `glueJob` Submodule <a name="`glueJob` Submodule" id="@cdktf/provider-aws.glueJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueJob <a name="GlueJob" id="@cdktf/provider-aws.glueJob.GlueJob"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_job aws_glue_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_job

glueJob.GlueJob(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  command: GlueJobCommand,
  name: str,
  role_arn: str,
  connections: typing.List[str] = None,
  default_arguments: typing.Mapping[str] = None,
  description: str = None,
  execution_class: str = None,
  execution_property: GlueJobExecutionProperty = None,
  glue_version: str = None,
  id: str = None,
  max_capacity: typing.Union[int, float] = None,
  max_retries: typing.Union[int, float] = None,
  non_overridable_arguments: typing.Mapping[str] = None,
  notification_property: GlueJobNotificationProperty = None,
  number_of_workers: typing.Union[int, float] = None,
  security_configuration: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeout: typing.Union[int, float] = None,
  worker_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.command">command</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommand">GlueJobCommand</a></code> | command block. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#name GlueJob#name}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#role_arn GlueJob#role_arn}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.connections">connections</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#connections GlueJob#connections}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.defaultArguments">default_arguments</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#default_arguments GlueJob#default_arguments}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#description GlueJob#description}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.executionClass">execution_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#execution_class GlueJob#execution_class}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.executionProperty">execution_property</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a></code> | execution_property block. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.glueVersion">glue_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#glue_version GlueJob#glue_version}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#id GlueJob#id}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.maxCapacity">max_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#max_capacity GlueJob#max_capacity}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#max_retries GlueJob#max_retries}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.nonOverridableArguments">non_overridable_arguments</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#non_overridable_arguments GlueJob#non_overridable_arguments}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.notificationProperty">notification_property</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a></code> | notification_property block. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.numberOfWorkers">number_of_workers</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#number_of_workers GlueJob#number_of_workers}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.securityConfiguration">security_configuration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#security_configuration GlueJob#security_configuration}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#tags GlueJob#tags}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#tags_all GlueJob#tags_all}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#timeout GlueJob#timeout}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.workerType">worker_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#worker_type GlueJob#worker_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.command"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobCommand">GlueJobCommand</a>

command block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#command GlueJob#command}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#name GlueJob#name}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#role_arn GlueJob#role_arn}.

---

##### `connections`<sup>Optional</sup> <a name="connections" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.connections"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#connections GlueJob#connections}.

---

##### `default_arguments`<sup>Optional</sup> <a name="default_arguments" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.defaultArguments"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#default_arguments GlueJob#default_arguments}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#description GlueJob#description}.

---

##### `execution_class`<sup>Optional</sup> <a name="execution_class" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.executionClass"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#execution_class GlueJob#execution_class}.

---

##### `execution_property`<sup>Optional</sup> <a name="execution_property" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.executionProperty"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a>

execution_property block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#execution_property GlueJob#execution_property}

---

##### `glue_version`<sup>Optional</sup> <a name="glue_version" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.glueVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#glue_version GlueJob#glue_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#id GlueJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_capacity`<sup>Optional</sup> <a name="max_capacity" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.maxCapacity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#max_capacity GlueJob#max_capacity}.

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.maxRetries"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#max_retries GlueJob#max_retries}.

---

##### `non_overridable_arguments`<sup>Optional</sup> <a name="non_overridable_arguments" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.nonOverridableArguments"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#non_overridable_arguments GlueJob#non_overridable_arguments}.

---

##### `notification_property`<sup>Optional</sup> <a name="notification_property" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.notificationProperty"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a>

notification_property block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#notification_property GlueJob#notification_property}

---

##### `number_of_workers`<sup>Optional</sup> <a name="number_of_workers" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.numberOfWorkers"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#number_of_workers GlueJob#number_of_workers}.

---

##### `security_configuration`<sup>Optional</sup> <a name="security_configuration" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.securityConfiguration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#security_configuration GlueJob#security_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#tags GlueJob#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#tags_all GlueJob#tags_all}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.timeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#timeout GlueJob#timeout}.

---

##### `worker_type`<sup>Optional</sup> <a name="worker_type" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.workerType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#worker_type GlueJob#worker_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.putCommand">put_command</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.putExecutionProperty">put_execution_property</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.putNotificationProperty">put_notification_property</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetConnections">reset_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetDefaultArguments">reset_default_arguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetExecutionClass">reset_execution_class</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetExecutionProperty">reset_execution_property</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetGlueVersion">reset_glue_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetMaxCapacity">reset_max_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetMaxRetries">reset_max_retries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetNonOverridableArguments">reset_non_overridable_arguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetNotificationProperty">reset_notification_property</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetNumberOfWorkers">reset_number_of_workers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetSecurityConfiguration">reset_security_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetTimeout">reset_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetWorkerType">reset_worker_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueJob.GlueJob.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.glueJob.GlueJob.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glueJob.GlueJob.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueJob.GlueJob.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.glueJob.GlueJob.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.glueJob.GlueJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.glueJob.GlueJob.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.glueJob.GlueJob.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.glueJob.GlueJob.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueJob.GlueJob.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueJob.GlueJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueJob.GlueJob.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueJob.GlueJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueJob.GlueJob.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueJob.GlueJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueJob.GlueJob.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueJob.GlueJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueJob.GlueJob.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueJob.GlueJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueJob.GlueJob.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueJob.GlueJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueJob.GlueJob.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueJob.GlueJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueJob.GlueJob.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueJob.GlueJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueJob.GlueJob.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueJob.GlueJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueJob.GlueJob.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueJob.GlueJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_command` <a name="put_command" id="@cdktf/provider-aws.glueJob.GlueJob.putCommand"></a>

```python
def put_command(
  script_location: str,
  name: str = None,
  python_version: str = None
) -> None
```

###### `script_location`<sup>Required</sup> <a name="script_location" id="@cdktf/provider-aws.glueJob.GlueJob.putCommand.parameter.scriptLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#script_location GlueJob#script_location}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.glueJob.GlueJob.putCommand.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#name GlueJob#name}.

---

###### `python_version`<sup>Optional</sup> <a name="python_version" id="@cdktf/provider-aws.glueJob.GlueJob.putCommand.parameter.pythonVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#python_version GlueJob#python_version}.

---

##### `put_execution_property` <a name="put_execution_property" id="@cdktf/provider-aws.glueJob.GlueJob.putExecutionProperty"></a>

```python
def put_execution_property(
  max_concurrent_runs: typing.Union[int, float] = None
) -> None
```

###### `max_concurrent_runs`<sup>Optional</sup> <a name="max_concurrent_runs" id="@cdktf/provider-aws.glueJob.GlueJob.putExecutionProperty.parameter.maxConcurrentRuns"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#max_concurrent_runs GlueJob#max_concurrent_runs}.

---

##### `put_notification_property` <a name="put_notification_property" id="@cdktf/provider-aws.glueJob.GlueJob.putNotificationProperty"></a>

```python
def put_notification_property(
  notify_delay_after: typing.Union[int, float] = None
) -> None
```

###### `notify_delay_after`<sup>Optional</sup> <a name="notify_delay_after" id="@cdktf/provider-aws.glueJob.GlueJob.putNotificationProperty.parameter.notifyDelayAfter"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#notify_delay_after GlueJob#notify_delay_after}.

---

##### `reset_connections` <a name="reset_connections" id="@cdktf/provider-aws.glueJob.GlueJob.resetConnections"></a>

```python
def reset_connections() -> None
```

##### `reset_default_arguments` <a name="reset_default_arguments" id="@cdktf/provider-aws.glueJob.GlueJob.resetDefaultArguments"></a>

```python
def reset_default_arguments() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.glueJob.GlueJob.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_execution_class` <a name="reset_execution_class" id="@cdktf/provider-aws.glueJob.GlueJob.resetExecutionClass"></a>

```python
def reset_execution_class() -> None
```

##### `reset_execution_property` <a name="reset_execution_property" id="@cdktf/provider-aws.glueJob.GlueJob.resetExecutionProperty"></a>

```python
def reset_execution_property() -> None
```

##### `reset_glue_version` <a name="reset_glue_version" id="@cdktf/provider-aws.glueJob.GlueJob.resetGlueVersion"></a>

```python
def reset_glue_version() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.glueJob.GlueJob.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_max_capacity` <a name="reset_max_capacity" id="@cdktf/provider-aws.glueJob.GlueJob.resetMaxCapacity"></a>

```python
def reset_max_capacity() -> None
```

##### `reset_max_retries` <a name="reset_max_retries" id="@cdktf/provider-aws.glueJob.GlueJob.resetMaxRetries"></a>

```python
def reset_max_retries() -> None
```

##### `reset_non_overridable_arguments` <a name="reset_non_overridable_arguments" id="@cdktf/provider-aws.glueJob.GlueJob.resetNonOverridableArguments"></a>

```python
def reset_non_overridable_arguments() -> None
```

##### `reset_notification_property` <a name="reset_notification_property" id="@cdktf/provider-aws.glueJob.GlueJob.resetNotificationProperty"></a>

```python
def reset_notification_property() -> None
```

##### `reset_number_of_workers` <a name="reset_number_of_workers" id="@cdktf/provider-aws.glueJob.GlueJob.resetNumberOfWorkers"></a>

```python
def reset_number_of_workers() -> None
```

##### `reset_security_configuration` <a name="reset_security_configuration" id="@cdktf/provider-aws.glueJob.GlueJob.resetSecurityConfiguration"></a>

```python
def reset_security_configuration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.glueJob.GlueJob.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.glueJob.GlueJob.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-aws.glueJob.GlueJob.resetTimeout"></a>

```python
def reset_timeout() -> None
```

##### `reset_worker_type` <a name="reset_worker_type" id="@cdktf/provider-aws.glueJob.GlueJob.resetWorkerType"></a>

```python
def reset_worker_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.glueJob.GlueJob.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import glue_job

glueJob.GlueJob.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueJob.GlueJob.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.glueJob.GlueJob.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import glue_job

glueJob.GlueJob.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueJob.GlueJob.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.glueJob.GlueJob.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import glue_job

glueJob.GlueJob.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueJob.GlueJob.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.command">command</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference">GlueJobCommandOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.executionProperty">execution_property</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference">GlueJobExecutionPropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.notificationProperty">notification_property</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference">GlueJobNotificationPropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.commandInput">command_input</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommand">GlueJobCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.connectionsInput">connections_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.defaultArgumentsInput">default_arguments_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.executionClassInput">execution_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.executionPropertyInput">execution_property_input</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.glueVersionInput">glue_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.maxCapacityInput">max_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.maxRetriesInput">max_retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.nonOverridableArgumentsInput">non_overridable_arguments_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.notificationPropertyInput">notification_property_input</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.numberOfWorkersInput">number_of_workers_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.securityConfigurationInput">security_configuration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.workerTypeInput">worker_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.connections">connections</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.defaultArguments">default_arguments</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.executionClass">execution_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.glueVersion">glue_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.maxCapacity">max_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.nonOverridableArguments">non_overridable_arguments</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.numberOfWorkers">number_of_workers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.securityConfiguration">security_configuration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.workerType">worker_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.glueJob.GlueJob.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.glueJob.GlueJob.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueJob.GlueJob.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.glueJob.GlueJob.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.glueJob.GlueJob.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.glueJob.GlueJob.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.glueJob.GlueJob.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueJob.GlueJob.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueJob.GlueJob.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.glueJob.GlueJob.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.glueJob.GlueJob.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueJob.GlueJob.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueJob.GlueJob.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueJob.GlueJob.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.glueJob.GlueJob.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-aws.glueJob.GlueJob.property.command"></a>

```python
command: GlueJobCommandOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference">GlueJobCommandOutputReference</a>

---

##### `execution_property`<sup>Required</sup> <a name="execution_property" id="@cdktf/provider-aws.glueJob.GlueJob.property.executionProperty"></a>

```python
execution_property: GlueJobExecutionPropertyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference">GlueJobExecutionPropertyOutputReference</a>

---

##### `notification_property`<sup>Required</sup> <a name="notification_property" id="@cdktf/provider-aws.glueJob.GlueJob.property.notificationProperty"></a>

```python
notification_property: GlueJobNotificationPropertyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference">GlueJobNotificationPropertyOutputReference</a>

---

##### `command_input`<sup>Optional</sup> <a name="command_input" id="@cdktf/provider-aws.glueJob.GlueJob.property.commandInput"></a>

```python
command_input: GlueJobCommand
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobCommand">GlueJobCommand</a>

---

##### `connections_input`<sup>Optional</sup> <a name="connections_input" id="@cdktf/provider-aws.glueJob.GlueJob.property.connectionsInput"></a>

```python
connections_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_arguments_input`<sup>Optional</sup> <a name="default_arguments_input" id="@cdktf/provider-aws.glueJob.GlueJob.property.defaultArgumentsInput"></a>

```python
default_arguments_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.glueJob.GlueJob.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `execution_class_input`<sup>Optional</sup> <a name="execution_class_input" id="@cdktf/provider-aws.glueJob.GlueJob.property.executionClassInput"></a>

```python
execution_class_input: str
```

- *Type:* str

---

##### `execution_property_input`<sup>Optional</sup> <a name="execution_property_input" id="@cdktf/provider-aws.glueJob.GlueJob.property.executionPropertyInput"></a>

```python
execution_property_input: GlueJobExecutionProperty
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a>

---

##### `glue_version_input`<sup>Optional</sup> <a name="glue_version_input" id="@cdktf/provider-aws.glueJob.GlueJob.property.glueVersionInput"></a>

```python
glue_version_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.glueJob.GlueJob.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `max_capacity_input`<sup>Optional</sup> <a name="max_capacity_input" id="@cdktf/provider-aws.glueJob.GlueJob.property.maxCapacityInput"></a>

```python
max_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_retries_input`<sup>Optional</sup> <a name="max_retries_input" id="@cdktf/provider-aws.glueJob.GlueJob.property.maxRetriesInput"></a>

```python
max_retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.glueJob.GlueJob.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `non_overridable_arguments_input`<sup>Optional</sup> <a name="non_overridable_arguments_input" id="@cdktf/provider-aws.glueJob.GlueJob.property.nonOverridableArgumentsInput"></a>

```python
non_overridable_arguments_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `notification_property_input`<sup>Optional</sup> <a name="notification_property_input" id="@cdktf/provider-aws.glueJob.GlueJob.property.notificationPropertyInput"></a>

```python
notification_property_input: GlueJobNotificationProperty
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a>

---

##### `number_of_workers_input`<sup>Optional</sup> <a name="number_of_workers_input" id="@cdktf/provider-aws.glueJob.GlueJob.property.numberOfWorkersInput"></a>

```python
number_of_workers_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.glueJob.GlueJob.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `security_configuration_input`<sup>Optional</sup> <a name="security_configuration_input" id="@cdktf/provider-aws.glueJob.GlueJob.property.securityConfigurationInput"></a>

```python
security_configuration_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.glueJob.GlueJob.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.glueJob.GlueJob.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-aws.glueJob.GlueJob.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `worker_type_input`<sup>Optional</sup> <a name="worker_type_input" id="@cdktf/provider-aws.glueJob.GlueJob.property.workerTypeInput"></a>

```python
worker_type_input: str
```

- *Type:* str

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-aws.glueJob.GlueJob.property.connections"></a>

```python
connections: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_arguments`<sup>Required</sup> <a name="default_arguments" id="@cdktf/provider-aws.glueJob.GlueJob.property.defaultArguments"></a>

```python
default_arguments: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.glueJob.GlueJob.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `execution_class`<sup>Required</sup> <a name="execution_class" id="@cdktf/provider-aws.glueJob.GlueJob.property.executionClass"></a>

```python
execution_class: str
```

- *Type:* str

---

##### `glue_version`<sup>Required</sup> <a name="glue_version" id="@cdktf/provider-aws.glueJob.GlueJob.property.glueVersion"></a>

```python
glue_version: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueJob.GlueJob.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_capacity`<sup>Required</sup> <a name="max_capacity" id="@cdktf/provider-aws.glueJob.GlueJob.property.maxCapacity"></a>

```python
max_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_retries`<sup>Required</sup> <a name="max_retries" id="@cdktf/provider-aws.glueJob.GlueJob.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueJob.GlueJob.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `non_overridable_arguments`<sup>Required</sup> <a name="non_overridable_arguments" id="@cdktf/provider-aws.glueJob.GlueJob.property.nonOverridableArguments"></a>

```python
non_overridable_arguments: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `number_of_workers`<sup>Required</sup> <a name="number_of_workers" id="@cdktf/provider-aws.glueJob.GlueJob.property.numberOfWorkers"></a>

```python
number_of_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.glueJob.GlueJob.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `security_configuration`<sup>Required</sup> <a name="security_configuration" id="@cdktf/provider-aws.glueJob.GlueJob.property.securityConfiguration"></a>

```python
security_configuration: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.glueJob.GlueJob.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.glueJob.GlueJob.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-aws.glueJob.GlueJob.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `worker_type`<sup>Required</sup> <a name="worker_type" id="@cdktf/provider-aws.glueJob.GlueJob.property.workerType"></a>

```python
worker_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.glueJob.GlueJob.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GlueJobCommand <a name="GlueJobCommand" id="@cdktf/provider-aws.glueJob.GlueJobCommand"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueJob.GlueJobCommand.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_job

glueJob.GlueJobCommand(
  script_location: str,
  name: str = None,
  python_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommand.property.scriptLocation">script_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#script_location GlueJob#script_location}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommand.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#name GlueJob#name}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommand.property.pythonVersion">python_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#python_version GlueJob#python_version}. |

---

##### `script_location`<sup>Required</sup> <a name="script_location" id="@cdktf/provider-aws.glueJob.GlueJobCommand.property.scriptLocation"></a>

```python
script_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#script_location GlueJob#script_location}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.glueJob.GlueJobCommand.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#name GlueJob#name}.

---

##### `python_version`<sup>Optional</sup> <a name="python_version" id="@cdktf/provider-aws.glueJob.GlueJobCommand.property.pythonVersion"></a>

```python
python_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#python_version GlueJob#python_version}.

---

### GlueJobConfig <a name="GlueJobConfig" id="@cdktf/provider-aws.glueJob.GlueJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueJob.GlueJobConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_job

glueJob.GlueJobConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  command: GlueJobCommand,
  name: str,
  role_arn: str,
  connections: typing.List[str] = None,
  default_arguments: typing.Mapping[str] = None,
  description: str = None,
  execution_class: str = None,
  execution_property: GlueJobExecutionProperty = None,
  glue_version: str = None,
  id: str = None,
  max_capacity: typing.Union[int, float] = None,
  max_retries: typing.Union[int, float] = None,
  non_overridable_arguments: typing.Mapping[str] = None,
  notification_property: GlueJobNotificationProperty = None,
  number_of_workers: typing.Union[int, float] = None,
  security_configuration: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeout: typing.Union[int, float] = None,
  worker_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.command">command</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommand">GlueJobCommand</a></code> | command block. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#name GlueJob#name}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#role_arn GlueJob#role_arn}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.connections">connections</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#connections GlueJob#connections}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.defaultArguments">default_arguments</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#default_arguments GlueJob#default_arguments}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#description GlueJob#description}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.executionClass">execution_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#execution_class GlueJob#execution_class}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.executionProperty">execution_property</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a></code> | execution_property block. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.glueVersion">glue_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#glue_version GlueJob#glue_version}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#id GlueJob#id}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.maxCapacity">max_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#max_capacity GlueJob#max_capacity}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#max_retries GlueJob#max_retries}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.nonOverridableArguments">non_overridable_arguments</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#non_overridable_arguments GlueJob#non_overridable_arguments}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.notificationProperty">notification_property</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a></code> | notification_property block. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.numberOfWorkers">number_of_workers</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#number_of_workers GlueJob#number_of_workers}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.securityConfiguration">security_configuration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#security_configuration GlueJob#security_configuration}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#tags GlueJob#tags}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#tags_all GlueJob#tags_all}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#timeout GlueJob#timeout}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.workerType">worker_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#worker_type GlueJob#worker_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.command"></a>

```python
command: GlueJobCommand
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobCommand">GlueJobCommand</a>

command block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#command GlueJob#command}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#name GlueJob#name}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#role_arn GlueJob#role_arn}.

---

##### `connections`<sup>Optional</sup> <a name="connections" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.connections"></a>

```python
connections: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#connections GlueJob#connections}.

---

##### `default_arguments`<sup>Optional</sup> <a name="default_arguments" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.defaultArguments"></a>

```python
default_arguments: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#default_arguments GlueJob#default_arguments}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#description GlueJob#description}.

---

##### `execution_class`<sup>Optional</sup> <a name="execution_class" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.executionClass"></a>

```python
execution_class: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#execution_class GlueJob#execution_class}.

---

##### `execution_property`<sup>Optional</sup> <a name="execution_property" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.executionProperty"></a>

```python
execution_property: GlueJobExecutionProperty
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a>

execution_property block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#execution_property GlueJob#execution_property}

---

##### `glue_version`<sup>Optional</sup> <a name="glue_version" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.glueVersion"></a>

```python
glue_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#glue_version GlueJob#glue_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#id GlueJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_capacity`<sup>Optional</sup> <a name="max_capacity" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.maxCapacity"></a>

```python
max_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#max_capacity GlueJob#max_capacity}.

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#max_retries GlueJob#max_retries}.

---

##### `non_overridable_arguments`<sup>Optional</sup> <a name="non_overridable_arguments" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.nonOverridableArguments"></a>

```python
non_overridable_arguments: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#non_overridable_arguments GlueJob#non_overridable_arguments}.

---

##### `notification_property`<sup>Optional</sup> <a name="notification_property" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.notificationProperty"></a>

```python
notification_property: GlueJobNotificationProperty
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a>

notification_property block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#notification_property GlueJob#notification_property}

---

##### `number_of_workers`<sup>Optional</sup> <a name="number_of_workers" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.numberOfWorkers"></a>

```python
number_of_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#number_of_workers GlueJob#number_of_workers}.

---

##### `security_configuration`<sup>Optional</sup> <a name="security_configuration" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.securityConfiguration"></a>

```python
security_configuration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#security_configuration GlueJob#security_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#tags GlueJob#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#tags_all GlueJob#tags_all}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#timeout GlueJob#timeout}.

---

##### `worker_type`<sup>Optional</sup> <a name="worker_type" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.workerType"></a>

```python
worker_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#worker_type GlueJob#worker_type}.

---

### GlueJobExecutionProperty <a name="GlueJobExecutionProperty" id="@cdktf/provider-aws.glueJob.GlueJobExecutionProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueJob.GlueJobExecutionProperty.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_job

glueJob.GlueJobExecutionProperty(
  max_concurrent_runs: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionProperty.property.maxConcurrentRuns">max_concurrent_runs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#max_concurrent_runs GlueJob#max_concurrent_runs}. |

---

##### `max_concurrent_runs`<sup>Optional</sup> <a name="max_concurrent_runs" id="@cdktf/provider-aws.glueJob.GlueJobExecutionProperty.property.maxConcurrentRuns"></a>

```python
max_concurrent_runs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#max_concurrent_runs GlueJob#max_concurrent_runs}.

---

### GlueJobNotificationProperty <a name="GlueJobNotificationProperty" id="@cdktf/provider-aws.glueJob.GlueJobNotificationProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueJob.GlueJobNotificationProperty.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_job

glueJob.GlueJobNotificationProperty(
  notify_delay_after: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationProperty.property.notifyDelayAfter">notify_delay_after</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#notify_delay_after GlueJob#notify_delay_after}. |

---

##### `notify_delay_after`<sup>Optional</sup> <a name="notify_delay_after" id="@cdktf/provider-aws.glueJob.GlueJobNotificationProperty.property.notifyDelayAfter"></a>

```python
notify_delay_after: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#notify_delay_after GlueJob#notify_delay_after}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlueJobCommandOutputReference <a name="GlueJobCommandOutputReference" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_job

glueJob.GlueJobCommandOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.resetPythonVersion">reset_python_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_python_version` <a name="reset_python_version" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.resetPythonVersion"></a>

```python
def reset_python_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.pythonVersionInput">python_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.scriptLocationInput">script_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.pythonVersion">python_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.scriptLocation">script_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommand">GlueJobCommand</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `python_version_input`<sup>Optional</sup> <a name="python_version_input" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.pythonVersionInput"></a>

```python
python_version_input: str
```

- *Type:* str

---

##### `script_location_input`<sup>Optional</sup> <a name="script_location_input" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.scriptLocationInput"></a>

```python
script_location_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `python_version`<sup>Required</sup> <a name="python_version" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.pythonVersion"></a>

```python
python_version: str
```

- *Type:* str

---

##### `script_location`<sup>Required</sup> <a name="script_location" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.scriptLocation"></a>

```python
script_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.internalValue"></a>

```python
internal_value: GlueJobCommand
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobCommand">GlueJobCommand</a>

---


### GlueJobExecutionPropertyOutputReference <a name="GlueJobExecutionPropertyOutputReference" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_job

glueJob.GlueJobExecutionPropertyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.resetMaxConcurrentRuns">reset_max_concurrent_runs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_concurrent_runs` <a name="reset_max_concurrent_runs" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.resetMaxConcurrentRuns"></a>

```python
def reset_max_concurrent_runs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.property.maxConcurrentRunsInput">max_concurrent_runs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.property.maxConcurrentRuns">max_concurrent_runs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_concurrent_runs_input`<sup>Optional</sup> <a name="max_concurrent_runs_input" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.property.maxConcurrentRunsInput"></a>

```python
max_concurrent_runs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_concurrent_runs`<sup>Required</sup> <a name="max_concurrent_runs" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.property.maxConcurrentRuns"></a>

```python
max_concurrent_runs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.property.internalValue"></a>

```python
internal_value: GlueJobExecutionProperty
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a>

---


### GlueJobNotificationPropertyOutputReference <a name="GlueJobNotificationPropertyOutputReference" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_job

glueJob.GlueJobNotificationPropertyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.resetNotifyDelayAfter">reset_notify_delay_after</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_notify_delay_after` <a name="reset_notify_delay_after" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.resetNotifyDelayAfter"></a>

```python
def reset_notify_delay_after() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.property.notifyDelayAfterInput">notify_delay_after_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.property.notifyDelayAfter">notify_delay_after</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `notify_delay_after_input`<sup>Optional</sup> <a name="notify_delay_after_input" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.property.notifyDelayAfterInput"></a>

```python
notify_delay_after_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `notify_delay_after`<sup>Required</sup> <a name="notify_delay_after" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.property.notifyDelayAfter"></a>

```python
notify_delay_after: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.property.internalValue"></a>

```python
internal_value: GlueJobNotificationProperty
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a>

---



