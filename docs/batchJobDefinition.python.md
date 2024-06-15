# `batchJobDefinition` Submodule <a name="`batchJobDefinition` Submodule" id="@cdktf/provider-aws.batchJobDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BatchJobDefinition <a name="BatchJobDefinition" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition aws_batch_job_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_definition

batchJobDefinition.BatchJobDefinition(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  type: str,
  container_properties: str = None,
  deregister_on_new_revision: typing.Union[bool, IResolvable] = None,
  eks_properties: BatchJobDefinitionEksProperties = None,
  id: str = None,
  node_properties: str = None,
  parameters: typing.Mapping[str] = None,
  platform_capabilities: typing.List[str] = None,
  propagate_tags: typing.Union[bool, IResolvable] = None,
  retry_strategy: BatchJobDefinitionRetryStrategy = None,
  scheduling_priority: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeout: BatchJobDefinitionTimeout = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#name BatchJobDefinition#name}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#type BatchJobDefinition#type}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.containerProperties">container_properties</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#container_properties BatchJobDefinition#container_properties}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.deregisterOnNewRevision">deregister_on_new_revision</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#deregister_on_new_revision BatchJobDefinition#deregister_on_new_revision}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.eksProperties">eks_properties</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksProperties">BatchJobDefinitionEksProperties</a></code> | eks_properties block. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#id BatchJobDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.nodeProperties">node_properties</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#node_properties BatchJobDefinition#node_properties}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#parameters BatchJobDefinition#parameters}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.platformCapabilities">platform_capabilities</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#platform_capabilities BatchJobDefinition#platform_capabilities}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.propagateTags">propagate_tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#propagate_tags BatchJobDefinition#propagate_tags}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.retryStrategy">retry_strategy</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy">BatchJobDefinitionRetryStrategy</a></code> | retry_strategy block. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.schedulingPriority">scheduling_priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#scheduling_priority BatchJobDefinition#scheduling_priority}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#tags BatchJobDefinition#tags}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#tags_all BatchJobDefinition#tags_all}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.timeout">timeout</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeout">BatchJobDefinitionTimeout</a></code> | timeout block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#name BatchJobDefinition#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#type BatchJobDefinition#type}.

---

##### `container_properties`<sup>Optional</sup> <a name="container_properties" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.containerProperties"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#container_properties BatchJobDefinition#container_properties}.

---

##### `deregister_on_new_revision`<sup>Optional</sup> <a name="deregister_on_new_revision" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.deregisterOnNewRevision"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#deregister_on_new_revision BatchJobDefinition#deregister_on_new_revision}.

---

##### `eks_properties`<sup>Optional</sup> <a name="eks_properties" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.eksProperties"></a>

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksProperties">BatchJobDefinitionEksProperties</a>

eks_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#eks_properties BatchJobDefinition#eks_properties}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#id BatchJobDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `node_properties`<sup>Optional</sup> <a name="node_properties" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.nodeProperties"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#node_properties BatchJobDefinition#node_properties}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#parameters BatchJobDefinition#parameters}.

---

##### `platform_capabilities`<sup>Optional</sup> <a name="platform_capabilities" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.platformCapabilities"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#platform_capabilities BatchJobDefinition#platform_capabilities}.

---

##### `propagate_tags`<sup>Optional</sup> <a name="propagate_tags" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.propagateTags"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#propagate_tags BatchJobDefinition#propagate_tags}.

---

##### `retry_strategy`<sup>Optional</sup> <a name="retry_strategy" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.retryStrategy"></a>

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy">BatchJobDefinitionRetryStrategy</a>

retry_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#retry_strategy BatchJobDefinition#retry_strategy}

---

##### `scheduling_priority`<sup>Optional</sup> <a name="scheduling_priority" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.schedulingPriority"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#scheduling_priority BatchJobDefinition#scheduling_priority}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#tags BatchJobDefinition#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#tags_all BatchJobDefinition#tags_all}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.timeout"></a>

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeout">BatchJobDefinitionTimeout</a>

timeout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#timeout BatchJobDefinition#timeout}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.putEksProperties">put_eks_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.putRetryStrategy">put_retry_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.putTimeout">put_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetContainerProperties">reset_container_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetDeregisterOnNewRevision">reset_deregister_on_new_revision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetEksProperties">reset_eks_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetNodeProperties">reset_node_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetPlatformCapabilities">reset_platform_capabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetPropagateTags">reset_propagate_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetRetryStrategy">reset_retry_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetSchedulingPriority">reset_scheduling_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetTimeout">reset_timeout</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_eks_properties` <a name="put_eks_properties" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.putEksProperties"></a>

```python
def put_eks_properties(
  pod_properties: BatchJobDefinitionEksPropertiesPodProperties
) -> None
```

###### `pod_properties`<sup>Required</sup> <a name="pod_properties" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.putEksProperties.parameter.podProperties"></a>

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties">BatchJobDefinitionEksPropertiesPodProperties</a>

pod_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#pod_properties BatchJobDefinition#pod_properties}

---

##### `put_retry_strategy` <a name="put_retry_strategy" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.putRetryStrategy"></a>

```python
def put_retry_strategy(
  attempts: typing.Union[int, float] = None,
  evaluate_on_exit: typing.Union[IResolvable, typing.List[BatchJobDefinitionRetryStrategyEvaluateOnExit]] = None
) -> None
```

###### `attempts`<sup>Optional</sup> <a name="attempts" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.putRetryStrategy.parameter.attempts"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#attempts BatchJobDefinition#attempts}.

---

###### `evaluate_on_exit`<sup>Optional</sup> <a name="evaluate_on_exit" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.putRetryStrategy.parameter.evaluateOnExit"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit">BatchJobDefinitionRetryStrategyEvaluateOnExit</a>]]

evaluate_on_exit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#evaluate_on_exit BatchJobDefinition#evaluate_on_exit}

---

##### `put_timeout` <a name="put_timeout" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.putTimeout"></a>

```python
def put_timeout(
  attempt_duration_seconds: typing.Union[int, float] = None
) -> None
```

###### `attempt_duration_seconds`<sup>Optional</sup> <a name="attempt_duration_seconds" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.putTimeout.parameter.attemptDurationSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#attempt_duration_seconds BatchJobDefinition#attempt_duration_seconds}.

---

##### `reset_container_properties` <a name="reset_container_properties" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetContainerProperties"></a>

```python
def reset_container_properties() -> None
```

##### `reset_deregister_on_new_revision` <a name="reset_deregister_on_new_revision" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetDeregisterOnNewRevision"></a>

```python
def reset_deregister_on_new_revision() -> None
```

##### `reset_eks_properties` <a name="reset_eks_properties" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetEksProperties"></a>

```python
def reset_eks_properties() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_node_properties` <a name="reset_node_properties" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetNodeProperties"></a>

```python
def reset_node_properties() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_platform_capabilities` <a name="reset_platform_capabilities" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetPlatformCapabilities"></a>

```python
def reset_platform_capabilities() -> None
```

##### `reset_propagate_tags` <a name="reset_propagate_tags" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetPropagateTags"></a>

```python
def reset_propagate_tags() -> None
```

##### `reset_retry_strategy` <a name="reset_retry_strategy" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetRetryStrategy"></a>

```python
def reset_retry_strategy() -> None
```

##### `reset_scheduling_priority` <a name="reset_scheduling_priority" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetSchedulingPriority"></a>

```python
def reset_scheduling_priority() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetTimeout"></a>

```python
def reset_timeout() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BatchJobDefinition resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_definition

batchJobDefinition.BatchJobDefinition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_definition

batchJobDefinition.BatchJobDefinition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_definition

batchJobDefinition.BatchJobDefinition.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_definition

batchJobDefinition.BatchJobDefinition.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BatchJobDefinition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BatchJobDefinition to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BatchJobDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BatchJobDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.arnPrefix">arn_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.eksProperties">eks_properties</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference">BatchJobDefinitionEksPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.retryStrategy">retry_strategy</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference">BatchJobDefinitionRetryStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.revision">revision</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.timeout">timeout</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference">BatchJobDefinitionTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.containerPropertiesInput">container_properties_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.deregisterOnNewRevisionInput">deregister_on_new_revision_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.eksPropertiesInput">eks_properties_input</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksProperties">BatchJobDefinitionEksProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.nodePropertiesInput">node_properties_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.platformCapabilitiesInput">platform_capabilities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.propagateTagsInput">propagate_tags_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.retryStrategyInput">retry_strategy_input</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy">BatchJobDefinitionRetryStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.schedulingPriorityInput">scheduling_priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.timeoutInput">timeout_input</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeout">BatchJobDefinitionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.containerProperties">container_properties</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.deregisterOnNewRevision">deregister_on_new_revision</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.nodeProperties">node_properties</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.platformCapabilities">platform_capabilities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.propagateTags">propagate_tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.schedulingPriority">scheduling_priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `arn_prefix`<sup>Required</sup> <a name="arn_prefix" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.arnPrefix"></a>

```python
arn_prefix: str
```

- *Type:* str

---

##### `eks_properties`<sup>Required</sup> <a name="eks_properties" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.eksProperties"></a>

```python
eks_properties: BatchJobDefinitionEksPropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference">BatchJobDefinitionEksPropertiesOutputReference</a>

---

##### `retry_strategy`<sup>Required</sup> <a name="retry_strategy" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.retryStrategy"></a>

```python
retry_strategy: BatchJobDefinitionRetryStrategyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference">BatchJobDefinitionRetryStrategyOutputReference</a>

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.revision"></a>

```python
revision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.timeout"></a>

```python
timeout: BatchJobDefinitionTimeoutOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference">BatchJobDefinitionTimeoutOutputReference</a>

---

##### `container_properties_input`<sup>Optional</sup> <a name="container_properties_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.containerPropertiesInput"></a>

```python
container_properties_input: str
```

- *Type:* str

---

##### `deregister_on_new_revision_input`<sup>Optional</sup> <a name="deregister_on_new_revision_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.deregisterOnNewRevisionInput"></a>

```python
deregister_on_new_revision_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `eks_properties_input`<sup>Optional</sup> <a name="eks_properties_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.eksPropertiesInput"></a>

```python
eks_properties_input: BatchJobDefinitionEksProperties
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksProperties">BatchJobDefinitionEksProperties</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `node_properties_input`<sup>Optional</sup> <a name="node_properties_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.nodePropertiesInput"></a>

```python
node_properties_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `platform_capabilities_input`<sup>Optional</sup> <a name="platform_capabilities_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.platformCapabilitiesInput"></a>

```python
platform_capabilities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `propagate_tags_input`<sup>Optional</sup> <a name="propagate_tags_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.propagateTagsInput"></a>

```python
propagate_tags_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retry_strategy_input`<sup>Optional</sup> <a name="retry_strategy_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.retryStrategyInput"></a>

```python
retry_strategy_input: BatchJobDefinitionRetryStrategy
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy">BatchJobDefinitionRetryStrategy</a>

---

##### `scheduling_priority_input`<sup>Optional</sup> <a name="scheduling_priority_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.schedulingPriorityInput"></a>

```python
scheduling_priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.timeoutInput"></a>

```python
timeout_input: BatchJobDefinitionTimeout
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeout">BatchJobDefinitionTimeout</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `container_properties`<sup>Required</sup> <a name="container_properties" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.containerProperties"></a>

```python
container_properties: str
```

- *Type:* str

---

##### `deregister_on_new_revision`<sup>Required</sup> <a name="deregister_on_new_revision" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.deregisterOnNewRevision"></a>

```python
deregister_on_new_revision: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `node_properties`<sup>Required</sup> <a name="node_properties" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.nodeProperties"></a>

```python
node_properties: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `platform_capabilities`<sup>Required</sup> <a name="platform_capabilities" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.platformCapabilities"></a>

```python
platform_capabilities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `propagate_tags`<sup>Required</sup> <a name="propagate_tags" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.propagateTags"></a>

```python
propagate_tags: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scheduling_priority`<sup>Required</sup> <a name="scheduling_priority" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.schedulingPriority"></a>

```python
scheduling_priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BatchJobDefinitionConfig <a name="BatchJobDefinitionConfig" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_definition

batchJobDefinition.BatchJobDefinitionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  type: str,
  container_properties: str = None,
  deregister_on_new_revision: typing.Union[bool, IResolvable] = None,
  eks_properties: BatchJobDefinitionEksProperties = None,
  id: str = None,
  node_properties: str = None,
  parameters: typing.Mapping[str] = None,
  platform_capabilities: typing.List[str] = None,
  propagate_tags: typing.Union[bool, IResolvable] = None,
  retry_strategy: BatchJobDefinitionRetryStrategy = None,
  scheduling_priority: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeout: BatchJobDefinitionTimeout = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#name BatchJobDefinition#name}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#type BatchJobDefinition#type}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.containerProperties">container_properties</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#container_properties BatchJobDefinition#container_properties}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.deregisterOnNewRevision">deregister_on_new_revision</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#deregister_on_new_revision BatchJobDefinition#deregister_on_new_revision}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.eksProperties">eks_properties</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksProperties">BatchJobDefinitionEksProperties</a></code> | eks_properties block. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#id BatchJobDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.nodeProperties">node_properties</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#node_properties BatchJobDefinition#node_properties}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#parameters BatchJobDefinition#parameters}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.platformCapabilities">platform_capabilities</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#platform_capabilities BatchJobDefinition#platform_capabilities}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.propagateTags">propagate_tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#propagate_tags BatchJobDefinition#propagate_tags}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.retryStrategy">retry_strategy</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy">BatchJobDefinitionRetryStrategy</a></code> | retry_strategy block. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.schedulingPriority">scheduling_priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#scheduling_priority BatchJobDefinition#scheduling_priority}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#tags BatchJobDefinition#tags}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#tags_all BatchJobDefinition#tags_all}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.timeout">timeout</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeout">BatchJobDefinitionTimeout</a></code> | timeout block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#name BatchJobDefinition#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#type BatchJobDefinition#type}.

---

##### `container_properties`<sup>Optional</sup> <a name="container_properties" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.containerProperties"></a>

```python
container_properties: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#container_properties BatchJobDefinition#container_properties}.

---

##### `deregister_on_new_revision`<sup>Optional</sup> <a name="deregister_on_new_revision" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.deregisterOnNewRevision"></a>

```python
deregister_on_new_revision: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#deregister_on_new_revision BatchJobDefinition#deregister_on_new_revision}.

---

##### `eks_properties`<sup>Optional</sup> <a name="eks_properties" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.eksProperties"></a>

```python
eks_properties: BatchJobDefinitionEksProperties
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksProperties">BatchJobDefinitionEksProperties</a>

eks_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#eks_properties BatchJobDefinition#eks_properties}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#id BatchJobDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `node_properties`<sup>Optional</sup> <a name="node_properties" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.nodeProperties"></a>

```python
node_properties: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#node_properties BatchJobDefinition#node_properties}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#parameters BatchJobDefinition#parameters}.

---

##### `platform_capabilities`<sup>Optional</sup> <a name="platform_capabilities" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.platformCapabilities"></a>

```python
platform_capabilities: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#platform_capabilities BatchJobDefinition#platform_capabilities}.

---

##### `propagate_tags`<sup>Optional</sup> <a name="propagate_tags" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.propagateTags"></a>

```python
propagate_tags: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#propagate_tags BatchJobDefinition#propagate_tags}.

---

##### `retry_strategy`<sup>Optional</sup> <a name="retry_strategy" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.retryStrategy"></a>

```python
retry_strategy: BatchJobDefinitionRetryStrategy
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy">BatchJobDefinitionRetryStrategy</a>

retry_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#retry_strategy BatchJobDefinition#retry_strategy}

---

##### `scheduling_priority`<sup>Optional</sup> <a name="scheduling_priority" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.schedulingPriority"></a>

```python
scheduling_priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#scheduling_priority BatchJobDefinition#scheduling_priority}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#tags BatchJobDefinition#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#tags_all BatchJobDefinition#tags_all}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.timeout"></a>

```python
timeout: BatchJobDefinitionTimeout
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeout">BatchJobDefinitionTimeout</a>

timeout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#timeout BatchJobDefinition#timeout}

---

### BatchJobDefinitionEksProperties <a name="BatchJobDefinitionEksProperties" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_definition

batchJobDefinition.BatchJobDefinitionEksProperties(
  pod_properties: BatchJobDefinitionEksPropertiesPodProperties
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksProperties.property.podProperties">pod_properties</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties">BatchJobDefinitionEksPropertiesPodProperties</a></code> | pod_properties block. |

---

##### `pod_properties`<sup>Required</sup> <a name="pod_properties" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksProperties.property.podProperties"></a>

```python
pod_properties: BatchJobDefinitionEksPropertiesPodProperties
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties">BatchJobDefinitionEksPropertiesPodProperties</a>

pod_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#pod_properties BatchJobDefinition#pod_properties}

---

### BatchJobDefinitionEksPropertiesPodProperties <a name="BatchJobDefinitionEksPropertiesPodProperties" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_definition

batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties(
  containers: BatchJobDefinitionEksPropertiesPodPropertiesContainers,
  dns_policy: str = None,
  host_network: typing.Union[bool, IResolvable] = None,
  metadata: BatchJobDefinitionEksPropertiesPodPropertiesMetadata = None,
  service_account_name: str = None,
  volumes: typing.Union[IResolvable, typing.List[BatchJobDefinitionEksPropertiesPodPropertiesVolumes]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties.property.containers">containers</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers">BatchJobDefinitionEksPropertiesPodPropertiesContainers</a></code> | containers block. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties.property.dnsPolicy">dns_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#dns_policy BatchJobDefinition#dns_policy}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties.property.hostNetwork">host_network</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#host_network BatchJobDefinition#host_network}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadata">BatchJobDefinitionEksPropertiesPodPropertiesMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties.property.serviceAccountName">service_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#service_account_name BatchJobDefinition#service_account_name}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties.property.volumes">volumes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumes">BatchJobDefinitionEksPropertiesPodPropertiesVolumes</a>]]</code> | volumes block. |

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties.property.containers"></a>

```python
containers: BatchJobDefinitionEksPropertiesPodPropertiesContainers
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers">BatchJobDefinitionEksPropertiesPodPropertiesContainers</a>

containers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#containers BatchJobDefinition#containers}

---

##### `dns_policy`<sup>Optional</sup> <a name="dns_policy" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties.property.dnsPolicy"></a>

```python
dns_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#dns_policy BatchJobDefinition#dns_policy}.

---

##### `host_network`<sup>Optional</sup> <a name="host_network" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties.property.hostNetwork"></a>

```python
host_network: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#host_network BatchJobDefinition#host_network}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties.property.metadata"></a>

```python
metadata: BatchJobDefinitionEksPropertiesPodPropertiesMetadata
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadata">BatchJobDefinitionEksPropertiesPodPropertiesMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#metadata BatchJobDefinition#metadata}

---

##### `service_account_name`<sup>Optional</sup> <a name="service_account_name" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties.property.serviceAccountName"></a>

```python
service_account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#service_account_name BatchJobDefinition#service_account_name}.

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties.property.volumes"></a>

```python
volumes: typing.Union[IResolvable, typing.List[BatchJobDefinitionEksPropertiesPodPropertiesVolumes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumes">BatchJobDefinitionEksPropertiesPodPropertiesVolumes</a>]]

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#volumes BatchJobDefinition#volumes}

---

### BatchJobDefinitionEksPropertiesPodPropertiesContainers <a name="BatchJobDefinitionEksPropertiesPodPropertiesContainers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_definition

batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers(
  image: str,
  args: typing.List[str] = None,
  command: typing.List[str] = None,
  env: typing.Union[IResolvable, typing.List[BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv]] = None,
  image_pull_policy: str = None,
  name: str = None,
  resources: BatchJobDefinitionEksPropertiesPodPropertiesContainersResources = None,
  security_context: BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext = None,
  volume_mounts: typing.Union[IResolvable, typing.List[BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers.property.image">image</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#image BatchJobDefinition#image}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers.property.args">args</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#args BatchJobDefinition#args}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers.property.command">command</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#command BatchJobDefinition#command}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers.property.env">env</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv">BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv</a>]]</code> | env block. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers.property.imagePullPolicy">image_pull_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#image_pull_policy BatchJobDefinition#image_pull_policy}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#name BatchJobDefinition#name}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResources">BatchJobDefinitionEksPropertiesPodPropertiesContainersResources</a></code> | resources block. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers.property.securityContext">security_context</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext">BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext</a></code> | security_context block. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers.property.volumeMounts">volume_mounts</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts">BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts</a>]]</code> | volume_mounts block. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers.property.image"></a>

```python
image: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#image BatchJobDefinition#image}.

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#args BatchJobDefinition#args}.

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#command BatchJobDefinition#command}.

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers.property.env"></a>

```python
env: typing.Union[IResolvable, typing.List[BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv">BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv</a>]]

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#env BatchJobDefinition#env}

---

##### `image_pull_policy`<sup>Optional</sup> <a name="image_pull_policy" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers.property.imagePullPolicy"></a>

```python
image_pull_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#image_pull_policy BatchJobDefinition#image_pull_policy}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#name BatchJobDefinition#name}.

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers.property.resources"></a>

```python
resources: BatchJobDefinitionEksPropertiesPodPropertiesContainersResources
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResources">BatchJobDefinitionEksPropertiesPodPropertiesContainersResources</a>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#resources BatchJobDefinition#resources}

---

##### `security_context`<sup>Optional</sup> <a name="security_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers.property.securityContext"></a>

```python
security_context: BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext">BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext</a>

security_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#security_context BatchJobDefinition#security_context}

---

##### `volume_mounts`<sup>Optional</sup> <a name="volume_mounts" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers.property.volumeMounts"></a>

```python
volume_mounts: typing.Union[IResolvable, typing.List[BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts">BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts</a>]]

volume_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#volume_mounts BatchJobDefinition#volume_mounts}

---

### BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv <a name="BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_definition

batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#name BatchJobDefinition#name}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#value BatchJobDefinition#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#name BatchJobDefinition#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#value BatchJobDefinition#value}.

---

### BatchJobDefinitionEksPropertiesPodPropertiesContainersResources <a name="BatchJobDefinitionEksPropertiesPodPropertiesContainersResources" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResources.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_definition

batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResources(
  limits: typing.Mapping[str] = None,
  requests: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResources.property.limits">limits</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#limits BatchJobDefinition#limits}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResources.property.requests">requests</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#requests BatchJobDefinition#requests}. |

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResources.property.limits"></a>

```python
limits: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#limits BatchJobDefinition#limits}.

---

##### `requests`<sup>Optional</sup> <a name="requests" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResources.property.requests"></a>

```python
requests: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#requests BatchJobDefinition#requests}.

---

### BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext <a name="BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_definition

batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext(
  privileged: typing.Union[bool, IResolvable] = None,
  read_only_root_file_system: typing.Union[bool, IResolvable] = None,
  run_as_group: typing.Union[int, float] = None,
  run_as_non_root: typing.Union[bool, IResolvable] = None,
  run_as_user: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext.property.privileged">privileged</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#privileged BatchJobDefinition#privileged}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext.property.readOnlyRootFileSystem">read_only_root_file_system</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#read_only_root_file_system BatchJobDefinition#read_only_root_file_system}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext.property.runAsGroup">run_as_group</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#run_as_group BatchJobDefinition#run_as_group}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext.property.runAsNonRoot">run_as_non_root</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#run_as_non_root BatchJobDefinition#run_as_non_root}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext.property.runAsUser">run_as_user</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#run_as_user BatchJobDefinition#run_as_user}. |

---

##### `privileged`<sup>Optional</sup> <a name="privileged" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext.property.privileged"></a>

```python
privileged: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#privileged BatchJobDefinition#privileged}.

---

##### `read_only_root_file_system`<sup>Optional</sup> <a name="read_only_root_file_system" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext.property.readOnlyRootFileSystem"></a>

```python
read_only_root_file_system: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#read_only_root_file_system BatchJobDefinition#read_only_root_file_system}.

---

##### `run_as_group`<sup>Optional</sup> <a name="run_as_group" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext.property.runAsGroup"></a>

```python
run_as_group: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#run_as_group BatchJobDefinition#run_as_group}.

---

##### `run_as_non_root`<sup>Optional</sup> <a name="run_as_non_root" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext.property.runAsNonRoot"></a>

```python
run_as_non_root: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#run_as_non_root BatchJobDefinition#run_as_non_root}.

---

##### `run_as_user`<sup>Optional</sup> <a name="run_as_user" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext.property.runAsUser"></a>

```python
run_as_user: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#run_as_user BatchJobDefinition#run_as_user}.

---

### BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts <a name="BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_definition

batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts(
  mount_path: str,
  name: str,
  read_only: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts.property.mountPath">mount_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#mount_path BatchJobDefinition#mount_path}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#name BatchJobDefinition#name}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#read_only BatchJobDefinition#read_only}. |

---

##### `mount_path`<sup>Required</sup> <a name="mount_path" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts.property.mountPath"></a>

```python
mount_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#mount_path BatchJobDefinition#mount_path}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#name BatchJobDefinition#name}.

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#read_only BatchJobDefinition#read_only}.

---

### BatchJobDefinitionEksPropertiesPodPropertiesMetadata <a name="BatchJobDefinitionEksPropertiesPodPropertiesMetadata" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_definition

batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadata(
  labels: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadata.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#labels BatchJobDefinition#labels}. |

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadata.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#labels BatchJobDefinition#labels}.

---

### BatchJobDefinitionEksPropertiesPodPropertiesVolumes <a name="BatchJobDefinitionEksPropertiesPodPropertiesVolumes" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumes.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_definition

batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumes(
  empty_dir: BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir = None,
  host_path: BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath = None,
  name: str = None,
  secret: BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumes.property.emptyDir">empty_dir</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir">BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir</a></code> | empty_dir block. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumes.property.hostPath">host_path</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath">BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath</a></code> | host_path block. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumes.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#name BatchJobDefinition#name}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumes.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret">BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret</a></code> | secret block. |

---

##### `empty_dir`<sup>Optional</sup> <a name="empty_dir" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumes.property.emptyDir"></a>

```python
empty_dir: BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir">BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir</a>

empty_dir block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#empty_dir BatchJobDefinition#empty_dir}

---

##### `host_path`<sup>Optional</sup> <a name="host_path" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumes.property.hostPath"></a>

```python
host_path: BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath">BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath</a>

host_path block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#host_path BatchJobDefinition#host_path}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumes.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#name BatchJobDefinition#name}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumes.property.secret"></a>

```python
secret: BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret">BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret</a>

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#secret BatchJobDefinition#secret}

---

### BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir <a name="BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_definition

batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir(
  size_limit: str,
  medium: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir.property.sizeLimit">size_limit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#size_limit BatchJobDefinition#size_limit}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir.property.medium">medium</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#medium BatchJobDefinition#medium}. |

---

##### `size_limit`<sup>Required</sup> <a name="size_limit" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir.property.sizeLimit"></a>

```python
size_limit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#size_limit BatchJobDefinition#size_limit}.

---

##### `medium`<sup>Optional</sup> <a name="medium" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir.property.medium"></a>

```python
medium: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#medium BatchJobDefinition#medium}.

---

### BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath <a name="BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_definition

batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath(
  path: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#path BatchJobDefinition#path}. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#path BatchJobDefinition#path}.

---

### BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret <a name="BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_definition

batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret(
  secret_name: str,
  optional: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret.property.secretName">secret_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#secret_name BatchJobDefinition#secret_name}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret.property.optional">optional</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#optional BatchJobDefinition#optional}. |

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#secret_name BatchJobDefinition#secret_name}.

---

##### `optional`<sup>Optional</sup> <a name="optional" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret.property.optional"></a>

```python
optional: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#optional BatchJobDefinition#optional}.

---

### BatchJobDefinitionRetryStrategy <a name="BatchJobDefinitionRetryStrategy" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_definition

batchJobDefinition.BatchJobDefinitionRetryStrategy(
  attempts: typing.Union[int, float] = None,
  evaluate_on_exit: typing.Union[IResolvable, typing.List[BatchJobDefinitionRetryStrategyEvaluateOnExit]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy.property.attempts">attempts</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#attempts BatchJobDefinition#attempts}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy.property.evaluateOnExit">evaluate_on_exit</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit">BatchJobDefinitionRetryStrategyEvaluateOnExit</a>]]</code> | evaluate_on_exit block. |

---

##### `attempts`<sup>Optional</sup> <a name="attempts" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy.property.attempts"></a>

```python
attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#attempts BatchJobDefinition#attempts}.

---

##### `evaluate_on_exit`<sup>Optional</sup> <a name="evaluate_on_exit" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy.property.evaluateOnExit"></a>

```python
evaluate_on_exit: typing.Union[IResolvable, typing.List[BatchJobDefinitionRetryStrategyEvaluateOnExit]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit">BatchJobDefinitionRetryStrategyEvaluateOnExit</a>]]

evaluate_on_exit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#evaluate_on_exit BatchJobDefinition#evaluate_on_exit}

---

### BatchJobDefinitionRetryStrategyEvaluateOnExit <a name="BatchJobDefinitionRetryStrategyEvaluateOnExit" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_definition

batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit(
  action: str,
  on_exit_code: str = None,
  on_reason: str = None,
  on_status_reason: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#action BatchJobDefinition#action}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit.property.onExitCode">on_exit_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#on_exit_code BatchJobDefinition#on_exit_code}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit.property.onReason">on_reason</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#on_reason BatchJobDefinition#on_reason}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit.property.onStatusReason">on_status_reason</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#on_status_reason BatchJobDefinition#on_status_reason}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#action BatchJobDefinition#action}.

---

##### `on_exit_code`<sup>Optional</sup> <a name="on_exit_code" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit.property.onExitCode"></a>

```python
on_exit_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#on_exit_code BatchJobDefinition#on_exit_code}.

---

##### `on_reason`<sup>Optional</sup> <a name="on_reason" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit.property.onReason"></a>

```python
on_reason: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#on_reason BatchJobDefinition#on_reason}.

---

##### `on_status_reason`<sup>Optional</sup> <a name="on_status_reason" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit.property.onStatusReason"></a>

```python
on_status_reason: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#on_status_reason BatchJobDefinition#on_status_reason}.

---

### BatchJobDefinitionTimeout <a name="BatchJobDefinitionTimeout" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeout.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_definition

batchJobDefinition.BatchJobDefinitionTimeout(
  attempt_duration_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeout.property.attemptDurationSeconds">attempt_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#attempt_duration_seconds BatchJobDefinition#attempt_duration_seconds}. |

---

##### `attempt_duration_seconds`<sup>Optional</sup> <a name="attempt_duration_seconds" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeout.property.attemptDurationSeconds"></a>

```python
attempt_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#attempt_duration_seconds BatchJobDefinition#attempt_duration_seconds}.

---

## Classes <a name="Classes" id="Classes"></a>

### BatchJobDefinitionEksPropertiesOutputReference <a name="BatchJobDefinitionEksPropertiesOutputReference" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_definition

batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.putPodProperties">put_pod_properties</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_pod_properties` <a name="put_pod_properties" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.putPodProperties"></a>

```python
def put_pod_properties(
  containers: BatchJobDefinitionEksPropertiesPodPropertiesContainers,
  dns_policy: str = None,
  host_network: typing.Union[bool, IResolvable] = None,
  metadata: BatchJobDefinitionEksPropertiesPodPropertiesMetadata = None,
  service_account_name: str = None,
  volumes: typing.Union[IResolvable, typing.List[BatchJobDefinitionEksPropertiesPodPropertiesVolumes]] = None
) -> None
```

###### `containers`<sup>Required</sup> <a name="containers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.putPodProperties.parameter.containers"></a>

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers">BatchJobDefinitionEksPropertiesPodPropertiesContainers</a>

containers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#containers BatchJobDefinition#containers}

---

###### `dns_policy`<sup>Optional</sup> <a name="dns_policy" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.putPodProperties.parameter.dnsPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#dns_policy BatchJobDefinition#dns_policy}.

---

###### `host_network`<sup>Optional</sup> <a name="host_network" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.putPodProperties.parameter.hostNetwork"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#host_network BatchJobDefinition#host_network}.

---

###### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.putPodProperties.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadata">BatchJobDefinitionEksPropertiesPodPropertiesMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#metadata BatchJobDefinition#metadata}

---

###### `service_account_name`<sup>Optional</sup> <a name="service_account_name" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.putPodProperties.parameter.serviceAccountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#service_account_name BatchJobDefinition#service_account_name}.

---

###### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.putPodProperties.parameter.volumes"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumes">BatchJobDefinitionEksPropertiesPodPropertiesVolumes</a>]]

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#volumes BatchJobDefinition#volumes}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.property.podProperties">pod_properties</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference">BatchJobDefinitionEksPropertiesPodPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.property.podPropertiesInput">pod_properties_input</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties">BatchJobDefinitionEksPropertiesPodProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksProperties">BatchJobDefinitionEksProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pod_properties`<sup>Required</sup> <a name="pod_properties" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.property.podProperties"></a>

```python
pod_properties: BatchJobDefinitionEksPropertiesPodPropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference">BatchJobDefinitionEksPropertiesPodPropertiesOutputReference</a>

---

##### `pod_properties_input`<sup>Optional</sup> <a name="pod_properties_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.property.podPropertiesInput"></a>

```python
pod_properties_input: BatchJobDefinitionEksPropertiesPodProperties
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties">BatchJobDefinitionEksPropertiesPodProperties</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: BatchJobDefinitionEksProperties
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksProperties">BatchJobDefinitionEksProperties</a>

---


### BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList <a name="BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_definition

batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv">BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv">BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv</a>]]

---


### BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference <a name="BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_definition

batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv">BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv">BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv</a>]

---


### BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference <a name="BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_definition

batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.putEnv">put_env</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.putResources">put_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.putSecurityContext">put_security_context</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.putVolumeMounts">put_volume_mounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.resetArgs">reset_args</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.resetCommand">reset_command</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.resetEnv">reset_env</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.resetImagePullPolicy">reset_image_pull_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.resetResources">reset_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.resetSecurityContext">reset_security_context</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.resetVolumeMounts">reset_volume_mounts</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_env` <a name="put_env" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.putEnv"></a>

```python
def put_env(
  value: typing.Union[IResolvable, typing.List[BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.putEnv.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv">BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv</a>]]

---

##### `put_resources` <a name="put_resources" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.putResources"></a>

```python
def put_resources(
  limits: typing.Mapping[str] = None,
  requests: typing.Mapping[str] = None
) -> None
```

###### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.putResources.parameter.limits"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#limits BatchJobDefinition#limits}.

---

###### `requests`<sup>Optional</sup> <a name="requests" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.putResources.parameter.requests"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#requests BatchJobDefinition#requests}.

---

##### `put_security_context` <a name="put_security_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.putSecurityContext"></a>

```python
def put_security_context(
  privileged: typing.Union[bool, IResolvable] = None,
  read_only_root_file_system: typing.Union[bool, IResolvable] = None,
  run_as_group: typing.Union[int, float] = None,
  run_as_non_root: typing.Union[bool, IResolvable] = None,
  run_as_user: typing.Union[int, float] = None
) -> None
```

###### `privileged`<sup>Optional</sup> <a name="privileged" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.putSecurityContext.parameter.privileged"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#privileged BatchJobDefinition#privileged}.

---

###### `read_only_root_file_system`<sup>Optional</sup> <a name="read_only_root_file_system" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.putSecurityContext.parameter.readOnlyRootFileSystem"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#read_only_root_file_system BatchJobDefinition#read_only_root_file_system}.

---

###### `run_as_group`<sup>Optional</sup> <a name="run_as_group" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.putSecurityContext.parameter.runAsGroup"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#run_as_group BatchJobDefinition#run_as_group}.

---

###### `run_as_non_root`<sup>Optional</sup> <a name="run_as_non_root" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.putSecurityContext.parameter.runAsNonRoot"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#run_as_non_root BatchJobDefinition#run_as_non_root}.

---

###### `run_as_user`<sup>Optional</sup> <a name="run_as_user" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.putSecurityContext.parameter.runAsUser"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#run_as_user BatchJobDefinition#run_as_user}.

---

##### `put_volume_mounts` <a name="put_volume_mounts" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.putVolumeMounts"></a>

```python
def put_volume_mounts(
  value: typing.Union[IResolvable, typing.List[BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.putVolumeMounts.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts">BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts</a>]]

---

##### `reset_args` <a name="reset_args" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.resetArgs"></a>

```python
def reset_args() -> None
```

##### `reset_command` <a name="reset_command" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.resetCommand"></a>

```python
def reset_command() -> None
```

##### `reset_env` <a name="reset_env" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.resetEnv"></a>

```python
def reset_env() -> None
```

##### `reset_image_pull_policy` <a name="reset_image_pull_policy" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.resetImagePullPolicy"></a>

```python
def reset_image_pull_policy() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_resources` <a name="reset_resources" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.resetResources"></a>

```python
def reset_resources() -> None
```

##### `reset_security_context` <a name="reset_security_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.resetSecurityContext"></a>

```python
def reset_security_context() -> None
```

##### `reset_volume_mounts` <a name="reset_volume_mounts" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.resetVolumeMounts"></a>

```python
def reset_volume_mounts() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.env">env</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList">BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference">BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.securityContext">security_context</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference">BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.volumeMounts">volume_mounts</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList">BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.argsInput">args_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.commandInput">command_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.envInput">env_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv">BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.imageInput">image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.imagePullPolicyInput">image_pull_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.resourcesInput">resources_input</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResources">BatchJobDefinitionEksPropertiesPodPropertiesContainersResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.securityContextInput">security_context_input</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext">BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.volumeMountsInput">volume_mounts_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts">BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.args">args</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.command">command</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.imagePullPolicy">image_pull_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers">BatchJobDefinitionEksPropertiesPodPropertiesContainers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.env"></a>

```python
env: BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList">BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.resources"></a>

```python
resources: BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference">BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference</a>

---

##### `security_context`<sup>Required</sup> <a name="security_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.securityContext"></a>

```python
security_context: BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference">BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference</a>

---

##### `volume_mounts`<sup>Required</sup> <a name="volume_mounts" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.volumeMounts"></a>

```python
volume_mounts: BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList">BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList</a>

---

##### `args_input`<sup>Optional</sup> <a name="args_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.argsInput"></a>

```python
args_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `command_input`<sup>Optional</sup> <a name="command_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.commandInput"></a>

```python
command_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `env_input`<sup>Optional</sup> <a name="env_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.envInput"></a>

```python
env_input: typing.Union[IResolvable, typing.List[BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv">BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv</a>]]

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.imageInput"></a>

```python
image_input: str
```

- *Type:* str

---

##### `image_pull_policy_input`<sup>Optional</sup> <a name="image_pull_policy_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.imagePullPolicyInput"></a>

```python
image_pull_policy_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.resourcesInput"></a>

```python
resources_input: BatchJobDefinitionEksPropertiesPodPropertiesContainersResources
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResources">BatchJobDefinitionEksPropertiesPodPropertiesContainersResources</a>

---

##### `security_context_input`<sup>Optional</sup> <a name="security_context_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.securityContextInput"></a>

```python
security_context_input: BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext">BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext</a>

---

##### `volume_mounts_input`<sup>Optional</sup> <a name="volume_mounts_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.volumeMountsInput"></a>

```python
volume_mounts_input: typing.Union[IResolvable, typing.List[BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts">BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts</a>]]

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `image_pull_policy`<sup>Required</sup> <a name="image_pull_policy" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.imagePullPolicy"></a>

```python
image_pull_policy: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.internalValue"></a>

```python
internal_value: BatchJobDefinitionEksPropertiesPodPropertiesContainers
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers">BatchJobDefinitionEksPropertiesPodPropertiesContainers</a>

---


### BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference <a name="BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_definition

batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.resetLimits">reset_limits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.resetRequests">reset_requests</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_limits` <a name="reset_limits" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.resetLimits"></a>

```python
def reset_limits() -> None
```

##### `reset_requests` <a name="reset_requests" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.resetRequests"></a>

```python
def reset_requests() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.property.limitsInput">limits_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.property.requestsInput">requests_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.property.limits">limits</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.property.requests">requests</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResources">BatchJobDefinitionEksPropertiesPodPropertiesContainersResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `limits_input`<sup>Optional</sup> <a name="limits_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.property.limitsInput"></a>

```python
limits_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `requests_input`<sup>Optional</sup> <a name="requests_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.property.requestsInput"></a>

```python
requests_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.property.limits"></a>

```python
limits: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `requests`<sup>Required</sup> <a name="requests" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.property.requests"></a>

```python
requests: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.property.internalValue"></a>

```python
internal_value: BatchJobDefinitionEksPropertiesPodPropertiesContainersResources
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResources">BatchJobDefinitionEksPropertiesPodPropertiesContainersResources</a>

---


### BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference <a name="BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_definition

batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.resetPrivileged">reset_privileged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.resetReadOnlyRootFileSystem">reset_read_only_root_file_system</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.resetRunAsGroup">reset_run_as_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.resetRunAsNonRoot">reset_run_as_non_root</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.resetRunAsUser">reset_run_as_user</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_privileged` <a name="reset_privileged" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.resetPrivileged"></a>

```python
def reset_privileged() -> None
```

##### `reset_read_only_root_file_system` <a name="reset_read_only_root_file_system" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.resetReadOnlyRootFileSystem"></a>

```python
def reset_read_only_root_file_system() -> None
```

##### `reset_run_as_group` <a name="reset_run_as_group" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.resetRunAsGroup"></a>

```python
def reset_run_as_group() -> None
```

##### `reset_run_as_non_root` <a name="reset_run_as_non_root" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.resetRunAsNonRoot"></a>

```python
def reset_run_as_non_root() -> None
```

##### `reset_run_as_user` <a name="reset_run_as_user" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.resetRunAsUser"></a>

```python
def reset_run_as_user() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.privilegedInput">privileged_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.readOnlyRootFileSystemInput">read_only_root_file_system_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.runAsGroupInput">run_as_group_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.runAsNonRootInput">run_as_non_root_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.runAsUserInput">run_as_user_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.privileged">privileged</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.readOnlyRootFileSystem">read_only_root_file_system</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.runAsGroup">run_as_group</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.runAsNonRoot">run_as_non_root</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.runAsUser">run_as_user</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext">BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `privileged_input`<sup>Optional</sup> <a name="privileged_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.privilegedInput"></a>

```python
privileged_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `read_only_root_file_system_input`<sup>Optional</sup> <a name="read_only_root_file_system_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.readOnlyRootFileSystemInput"></a>

```python
read_only_root_file_system_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_as_group_input`<sup>Optional</sup> <a name="run_as_group_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.runAsGroupInput"></a>

```python
run_as_group_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `run_as_non_root_input`<sup>Optional</sup> <a name="run_as_non_root_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.runAsNonRootInput"></a>

```python
run_as_non_root_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_as_user_input`<sup>Optional</sup> <a name="run_as_user_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.runAsUserInput"></a>

```python
run_as_user_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `privileged`<sup>Required</sup> <a name="privileged" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.privileged"></a>

```python
privileged: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `read_only_root_file_system`<sup>Required</sup> <a name="read_only_root_file_system" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.readOnlyRootFileSystem"></a>

```python
read_only_root_file_system: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_as_group`<sup>Required</sup> <a name="run_as_group" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.runAsGroup"></a>

```python
run_as_group: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `run_as_non_root`<sup>Required</sup> <a name="run_as_non_root" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.runAsNonRoot"></a>

```python
run_as_non_root: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_as_user`<sup>Required</sup> <a name="run_as_user" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.runAsUser"></a>

```python
run_as_user: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.internalValue"></a>

```python
internal_value: BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext">BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext</a>

---


### BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList <a name="BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_definition

batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts">BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts">BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts</a>]]

---


### BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference <a name="BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_definition

batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.resetReadOnly">reset_read_only</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read_only` <a name="reset_read_only" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.resetReadOnly"></a>

```python
def reset_read_only() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.property.mountPathInput">mount_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.property.readOnlyInput">read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.property.mountPath">mount_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts">BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mount_path_input`<sup>Optional</sup> <a name="mount_path_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.property.mountPathInput"></a>

```python
mount_path_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `read_only_input`<sup>Optional</sup> <a name="read_only_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.property.readOnlyInput"></a>

```python
read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mount_path`<sup>Required</sup> <a name="mount_path" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.property.mountPath"></a>

```python
mount_path: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts">BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts</a>]

---


### BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference <a name="BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_definition

batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.resetLabels">reset_labels</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadata">BatchJobDefinitionEksPropertiesPodPropertiesMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.property.internalValue"></a>

```python
internal_value: BatchJobDefinitionEksPropertiesPodPropertiesMetadata
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadata">BatchJobDefinitionEksPropertiesPodPropertiesMetadata</a>

---


### BatchJobDefinitionEksPropertiesPodPropertiesOutputReference <a name="BatchJobDefinitionEksPropertiesPodPropertiesOutputReference" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_definition

batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.putContainers">put_containers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.putMetadata">put_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.putVolumes">put_volumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.resetDnsPolicy">reset_dns_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.resetHostNetwork">reset_host_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.resetServiceAccountName">reset_service_account_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.resetVolumes">reset_volumes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_containers` <a name="put_containers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.putContainers"></a>

```python
def put_containers(
  image: str,
  args: typing.List[str] = None,
  command: typing.List[str] = None,
  env: typing.Union[IResolvable, typing.List[BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv]] = None,
  image_pull_policy: str = None,
  name: str = None,
  resources: BatchJobDefinitionEksPropertiesPodPropertiesContainersResources = None,
  security_context: BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext = None,
  volume_mounts: typing.Union[IResolvable, typing.List[BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts]] = None
) -> None
```

###### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.putContainers.parameter.image"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#image BatchJobDefinition#image}.

---

###### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.putContainers.parameter.args"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#args BatchJobDefinition#args}.

---

###### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.putContainers.parameter.command"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#command BatchJobDefinition#command}.

---

###### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.putContainers.parameter.env"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv">BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv</a>]]

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#env BatchJobDefinition#env}

---

###### `image_pull_policy`<sup>Optional</sup> <a name="image_pull_policy" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.putContainers.parameter.imagePullPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#image_pull_policy BatchJobDefinition#image_pull_policy}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.putContainers.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#name BatchJobDefinition#name}.

---

###### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.putContainers.parameter.resources"></a>

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResources">BatchJobDefinitionEksPropertiesPodPropertiesContainersResources</a>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#resources BatchJobDefinition#resources}

---

###### `security_context`<sup>Optional</sup> <a name="security_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.putContainers.parameter.securityContext"></a>

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext">BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext</a>

security_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#security_context BatchJobDefinition#security_context}

---

###### `volume_mounts`<sup>Optional</sup> <a name="volume_mounts" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.putContainers.parameter.volumeMounts"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts">BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts</a>]]

volume_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#volume_mounts BatchJobDefinition#volume_mounts}

---

##### `put_metadata` <a name="put_metadata" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.putMetadata"></a>

```python
def put_metadata(
  labels: typing.Mapping[str] = None
) -> None
```

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.putMetadata.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#labels BatchJobDefinition#labels}.

---

##### `put_volumes` <a name="put_volumes" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.putVolumes"></a>

```python
def put_volumes(
  value: typing.Union[IResolvable, typing.List[BatchJobDefinitionEksPropertiesPodPropertiesVolumes]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.putVolumes.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumes">BatchJobDefinitionEksPropertiesPodPropertiesVolumes</a>]]

---

##### `reset_dns_policy` <a name="reset_dns_policy" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.resetDnsPolicy"></a>

```python
def reset_dns_policy() -> None
```

##### `reset_host_network` <a name="reset_host_network" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.resetHostNetwork"></a>

```python
def reset_host_network() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_service_account_name` <a name="reset_service_account_name" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.resetServiceAccountName"></a>

```python
def reset_service_account_name() -> None
```

##### `reset_volumes` <a name="reset_volumes" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.resetVolumes"></a>

```python
def reset_volumes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.containers">containers</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference">BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference">BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.volumes">volumes</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList">BatchJobDefinitionEksPropertiesPodPropertiesVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.containersInput">containers_input</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers">BatchJobDefinitionEksPropertiesPodPropertiesContainers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.dnsPolicyInput">dns_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.hostNetworkInput">host_network_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.metadataInput">metadata_input</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadata">BatchJobDefinitionEksPropertiesPodPropertiesMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.serviceAccountNameInput">service_account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.volumesInput">volumes_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumes">BatchJobDefinitionEksPropertiesPodPropertiesVolumes</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.dnsPolicy">dns_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.hostNetwork">host_network</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.serviceAccountName">service_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties">BatchJobDefinitionEksPropertiesPodProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.containers"></a>

```python
containers: BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference">BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.metadata"></a>

```python
metadata: BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference">BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference</a>

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.volumes"></a>

```python
volumes: BatchJobDefinitionEksPropertiesPodPropertiesVolumesList
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList">BatchJobDefinitionEksPropertiesPodPropertiesVolumesList</a>

---

##### `containers_input`<sup>Optional</sup> <a name="containers_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.containersInput"></a>

```python
containers_input: BatchJobDefinitionEksPropertiesPodPropertiesContainers
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers">BatchJobDefinitionEksPropertiesPodPropertiesContainers</a>

---

##### `dns_policy_input`<sup>Optional</sup> <a name="dns_policy_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.dnsPolicyInput"></a>

```python
dns_policy_input: str
```

- *Type:* str

---

##### `host_network_input`<sup>Optional</sup> <a name="host_network_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.hostNetworkInput"></a>

```python
host_network_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.metadataInput"></a>

```python
metadata_input: BatchJobDefinitionEksPropertiesPodPropertiesMetadata
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadata">BatchJobDefinitionEksPropertiesPodPropertiesMetadata</a>

---

##### `service_account_name_input`<sup>Optional</sup> <a name="service_account_name_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.serviceAccountNameInput"></a>

```python
service_account_name_input: str
```

- *Type:* str

---

##### `volumes_input`<sup>Optional</sup> <a name="volumes_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.volumesInput"></a>

```python
volumes_input: typing.Union[IResolvable, typing.List[BatchJobDefinitionEksPropertiesPodPropertiesVolumes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumes">BatchJobDefinitionEksPropertiesPodPropertiesVolumes</a>]]

---

##### `dns_policy`<sup>Required</sup> <a name="dns_policy" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.dnsPolicy"></a>

```python
dns_policy: str
```

- *Type:* str

---

##### `host_network`<sup>Required</sup> <a name="host_network" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.hostNetwork"></a>

```python
host_network: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `service_account_name`<sup>Required</sup> <a name="service_account_name" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.serviceAccountName"></a>

```python
service_account_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: BatchJobDefinitionEksPropertiesPodProperties
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties">BatchJobDefinitionEksPropertiesPodProperties</a>

---


### BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference <a name="BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_definition

batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.resetMedium">reset_medium</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_medium` <a name="reset_medium" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.resetMedium"></a>

```python
def reset_medium() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.property.mediumInput">medium_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.property.sizeLimitInput">size_limit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.property.medium">medium</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.property.sizeLimit">size_limit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir">BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `medium_input`<sup>Optional</sup> <a name="medium_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.property.mediumInput"></a>

```python
medium_input: str
```

- *Type:* str

---

##### `size_limit_input`<sup>Optional</sup> <a name="size_limit_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.property.sizeLimitInput"></a>

```python
size_limit_input: str
```

- *Type:* str

---

##### `medium`<sup>Required</sup> <a name="medium" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.property.medium"></a>

```python
medium: str
```

- *Type:* str

---

##### `size_limit`<sup>Required</sup> <a name="size_limit" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.property.sizeLimit"></a>

```python
size_limit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.property.internalValue"></a>

```python
internal_value: BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir">BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir</a>

---


### BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference <a name="BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_definition

batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath">BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.property.internalValue"></a>

```python
internal_value: BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath">BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath</a>

---


### BatchJobDefinitionEksPropertiesPodPropertiesVolumesList <a name="BatchJobDefinitionEksPropertiesPodPropertiesVolumesList" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_definition

batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumes">BatchJobDefinitionEksPropertiesPodPropertiesVolumes</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BatchJobDefinitionEksPropertiesPodPropertiesVolumes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumes">BatchJobDefinitionEksPropertiesPodPropertiesVolumes</a>]]

---


### BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference <a name="BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_definition

batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.putEmptyDir">put_empty_dir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.putHostPath">put_host_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.putSecret">put_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.resetEmptyDir">reset_empty_dir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.resetHostPath">reset_host_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.resetSecret">reset_secret</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_empty_dir` <a name="put_empty_dir" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.putEmptyDir"></a>

```python
def put_empty_dir(
  size_limit: str,
  medium: str = None
) -> None
```

###### `size_limit`<sup>Required</sup> <a name="size_limit" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.putEmptyDir.parameter.sizeLimit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#size_limit BatchJobDefinition#size_limit}.

---

###### `medium`<sup>Optional</sup> <a name="medium" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.putEmptyDir.parameter.medium"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#medium BatchJobDefinition#medium}.

---

##### `put_host_path` <a name="put_host_path" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.putHostPath"></a>

```python
def put_host_path(
  path: str
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.putHostPath.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#path BatchJobDefinition#path}.

---

##### `put_secret` <a name="put_secret" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.putSecret"></a>

```python
def put_secret(
  secret_name: str,
  optional: typing.Union[bool, IResolvable] = None
) -> None
```

###### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.putSecret.parameter.secretName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#secret_name BatchJobDefinition#secret_name}.

---

###### `optional`<sup>Optional</sup> <a name="optional" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.putSecret.parameter.optional"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/batch_job_definition#optional BatchJobDefinition#optional}.

---

##### `reset_empty_dir` <a name="reset_empty_dir" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.resetEmptyDir"></a>

```python
def reset_empty_dir() -> None
```

##### `reset_host_path` <a name="reset_host_path" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.resetHostPath"></a>

```python
def reset_host_path() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_secret` <a name="reset_secret" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.resetSecret"></a>

```python
def reset_secret() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.property.emptyDir">empty_dir</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference">BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.property.hostPath">host_path</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference">BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference">BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.property.emptyDirInput">empty_dir_input</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir">BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.property.hostPathInput">host_path_input</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath">BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.property.secretInput">secret_input</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret">BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumes">BatchJobDefinitionEksPropertiesPodPropertiesVolumes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `empty_dir`<sup>Required</sup> <a name="empty_dir" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.property.emptyDir"></a>

```python
empty_dir: BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference">BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference</a>

---

##### `host_path`<sup>Required</sup> <a name="host_path" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.property.hostPath"></a>

```python
host_path: BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference">BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.property.secret"></a>

```python
secret: BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference">BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference</a>

---

##### `empty_dir_input`<sup>Optional</sup> <a name="empty_dir_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.property.emptyDirInput"></a>

```python
empty_dir_input: BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir">BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir</a>

---

##### `host_path_input`<sup>Optional</sup> <a name="host_path_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.property.hostPathInput"></a>

```python
host_path_input: BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath">BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.property.secretInput"></a>

```python
secret_input: BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret">BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BatchJobDefinitionEksPropertiesPodPropertiesVolumes]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumes">BatchJobDefinitionEksPropertiesPodPropertiesVolumes</a>]

---


### BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference <a name="BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_definition

batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.resetOptional">reset_optional</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_optional` <a name="reset_optional" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.resetOptional"></a>

```python
def reset_optional() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.property.optionalInput">optional_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.property.secretNameInput">secret_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.property.optional">optional</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.property.secretName">secret_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret">BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `optional_input`<sup>Optional</sup> <a name="optional_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.property.optionalInput"></a>

```python
optional_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `secret_name_input`<sup>Optional</sup> <a name="secret_name_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.property.secretNameInput"></a>

```python
secret_name_input: str
```

- *Type:* str

---

##### `optional`<sup>Required</sup> <a name="optional" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.property.optional"></a>

```python
optional: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.property.internalValue"></a>

```python
internal_value: BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret">BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret</a>

---


### BatchJobDefinitionRetryStrategyEvaluateOnExitList <a name="BatchJobDefinitionRetryStrategyEvaluateOnExitList" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_definition

batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit">BatchJobDefinitionRetryStrategyEvaluateOnExit</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BatchJobDefinitionRetryStrategyEvaluateOnExit]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit">BatchJobDefinitionRetryStrategyEvaluateOnExit</a>]]

---


### BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference <a name="BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_definition

batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.resetOnExitCode">reset_on_exit_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.resetOnReason">reset_on_reason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.resetOnStatusReason">reset_on_status_reason</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_on_exit_code` <a name="reset_on_exit_code" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.resetOnExitCode"></a>

```python
def reset_on_exit_code() -> None
```

##### `reset_on_reason` <a name="reset_on_reason" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.resetOnReason"></a>

```python
def reset_on_reason() -> None
```

##### `reset_on_status_reason` <a name="reset_on_status_reason" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.resetOnStatusReason"></a>

```python
def reset_on_status_reason() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.onExitCodeInput">on_exit_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.onReasonInput">on_reason_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.onStatusReasonInput">on_status_reason_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.onExitCode">on_exit_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.onReason">on_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.onStatusReason">on_status_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit">BatchJobDefinitionRetryStrategyEvaluateOnExit</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `on_exit_code_input`<sup>Optional</sup> <a name="on_exit_code_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.onExitCodeInput"></a>

```python
on_exit_code_input: str
```

- *Type:* str

---

##### `on_reason_input`<sup>Optional</sup> <a name="on_reason_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.onReasonInput"></a>

```python
on_reason_input: str
```

- *Type:* str

---

##### `on_status_reason_input`<sup>Optional</sup> <a name="on_status_reason_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.onStatusReasonInput"></a>

```python
on_status_reason_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `on_exit_code`<sup>Required</sup> <a name="on_exit_code" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.onExitCode"></a>

```python
on_exit_code: str
```

- *Type:* str

---

##### `on_reason`<sup>Required</sup> <a name="on_reason" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.onReason"></a>

```python
on_reason: str
```

- *Type:* str

---

##### `on_status_reason`<sup>Required</sup> <a name="on_status_reason" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.onStatusReason"></a>

```python
on_status_reason: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BatchJobDefinitionRetryStrategyEvaluateOnExit]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit">BatchJobDefinitionRetryStrategyEvaluateOnExit</a>]

---


### BatchJobDefinitionRetryStrategyOutputReference <a name="BatchJobDefinitionRetryStrategyOutputReference" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_definition

batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.putEvaluateOnExit">put_evaluate_on_exit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.resetAttempts">reset_attempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.resetEvaluateOnExit">reset_evaluate_on_exit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_evaluate_on_exit` <a name="put_evaluate_on_exit" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.putEvaluateOnExit"></a>

```python
def put_evaluate_on_exit(
  value: typing.Union[IResolvable, typing.List[BatchJobDefinitionRetryStrategyEvaluateOnExit]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.putEvaluateOnExit.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit">BatchJobDefinitionRetryStrategyEvaluateOnExit</a>]]

---

##### `reset_attempts` <a name="reset_attempts" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.resetAttempts"></a>

```python
def reset_attempts() -> None
```

##### `reset_evaluate_on_exit` <a name="reset_evaluate_on_exit" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.resetEvaluateOnExit"></a>

```python
def reset_evaluate_on_exit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.evaluateOnExit">evaluate_on_exit</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList">BatchJobDefinitionRetryStrategyEvaluateOnExitList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.attemptsInput">attempts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.evaluateOnExitInput">evaluate_on_exit_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit">BatchJobDefinitionRetryStrategyEvaluateOnExit</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.attempts">attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy">BatchJobDefinitionRetryStrategy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `evaluate_on_exit`<sup>Required</sup> <a name="evaluate_on_exit" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.evaluateOnExit"></a>

```python
evaluate_on_exit: BatchJobDefinitionRetryStrategyEvaluateOnExitList
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList">BatchJobDefinitionRetryStrategyEvaluateOnExitList</a>

---

##### `attempts_input`<sup>Optional</sup> <a name="attempts_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.attemptsInput"></a>

```python
attempts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `evaluate_on_exit_input`<sup>Optional</sup> <a name="evaluate_on_exit_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.evaluateOnExitInput"></a>

```python
evaluate_on_exit_input: typing.Union[IResolvable, typing.List[BatchJobDefinitionRetryStrategyEvaluateOnExit]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit">BatchJobDefinitionRetryStrategyEvaluateOnExit</a>]]

---

##### `attempts`<sup>Required</sup> <a name="attempts" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.attempts"></a>

```python
attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.internalValue"></a>

```python
internal_value: BatchJobDefinitionRetryStrategy
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy">BatchJobDefinitionRetryStrategy</a>

---


### BatchJobDefinitionTimeoutOutputReference <a name="BatchJobDefinitionTimeoutOutputReference" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_definition

batchJobDefinition.BatchJobDefinitionTimeoutOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.resetAttemptDurationSeconds">reset_attempt_duration_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_attempt_duration_seconds` <a name="reset_attempt_duration_seconds" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.resetAttemptDurationSeconds"></a>

```python
def reset_attempt_duration_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.property.attemptDurationSecondsInput">attempt_duration_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.property.attemptDurationSeconds">attempt_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeout">BatchJobDefinitionTimeout</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attempt_duration_seconds_input`<sup>Optional</sup> <a name="attempt_duration_seconds_input" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.property.attemptDurationSecondsInput"></a>

```python
attempt_duration_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `attempt_duration_seconds`<sup>Required</sup> <a name="attempt_duration_seconds" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.property.attemptDurationSeconds"></a>

```python
attempt_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.property.internalValue"></a>

```python
internal_value: BatchJobDefinitionTimeout
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeout">BatchJobDefinitionTimeout</a>

---



