# `connectQueue` Submodule <a name="`connectQueue` Submodule" id="@cdktf/provider-aws.connectQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectQueue <a name="ConnectQueue" id="@cdktf/provider-aws.connectQueue.ConnectQueue"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/connect_queue aws_connect_queue}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectQueue.ConnectQueue.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import connect_queue

connectQueue.ConnectQueue(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  hours_of_operation_id: str,
  instance_id: str,
  name: str,
  description: str = None,
  id: str = None,
  max_contacts: typing.Union[int, float] = None,
  outbound_caller_config: ConnectQueueOutboundCallerConfig = None,
  quick_connect_ids: typing.List[str] = None,
  status: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.Initializer.parameter.hoursOfOperationId">hours_of_operation_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#hours_of_operation_id ConnectQueue#hours_of_operation_id}. |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#instance_id ConnectQueue#instance_id}. |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#name ConnectQueue#name}. |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#description ConnectQueue#description}. |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#id ConnectQueue#id}. |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.Initializer.parameter.maxContacts">max_contacts</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#max_contacts ConnectQueue#max_contacts}. |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.Initializer.parameter.outboundCallerConfig">outbound_caller_config</a></code> | <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfig">ConnectQueueOutboundCallerConfig</a></code> | outbound_caller_config block. |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.Initializer.parameter.quickConnectIds">quick_connect_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#quick_connect_ids ConnectQueue#quick_connect_ids}. |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#status ConnectQueue#status}. |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#tags ConnectQueue#tags}. |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#tags_all ConnectQueue#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.connectQueue.ConnectQueue.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectQueue.ConnectQueue.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectQueue.ConnectQueue.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectQueue.ConnectQueue.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.connectQueue.ConnectQueue.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.connectQueue.ConnectQueue.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectQueue.ConnectQueue.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectQueue.ConnectQueue.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectQueue.ConnectQueue.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `hours_of_operation_id`<sup>Required</sup> <a name="hours_of_operation_id" id="@cdktf/provider-aws.connectQueue.ConnectQueue.Initializer.parameter.hoursOfOperationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#hours_of_operation_id ConnectQueue#hours_of_operation_id}.

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-aws.connectQueue.ConnectQueue.Initializer.parameter.instanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#instance_id ConnectQueue#instance_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectQueue.ConnectQueue.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#name ConnectQueue#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.connectQueue.ConnectQueue.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#description ConnectQueue#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.connectQueue.ConnectQueue.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#id ConnectQueue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_contacts`<sup>Optional</sup> <a name="max_contacts" id="@cdktf/provider-aws.connectQueue.ConnectQueue.Initializer.parameter.maxContacts"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#max_contacts ConnectQueue#max_contacts}.

---

##### `outbound_caller_config`<sup>Optional</sup> <a name="outbound_caller_config" id="@cdktf/provider-aws.connectQueue.ConnectQueue.Initializer.parameter.outboundCallerConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfig">ConnectQueueOutboundCallerConfig</a>

outbound_caller_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#outbound_caller_config ConnectQueue#outbound_caller_config}

---

##### `quick_connect_ids`<sup>Optional</sup> <a name="quick_connect_ids" id="@cdktf/provider-aws.connectQueue.ConnectQueue.Initializer.parameter.quickConnectIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#quick_connect_ids ConnectQueue#quick_connect_ids}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.connectQueue.ConnectQueue.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#status ConnectQueue#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.connectQueue.ConnectQueue.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#tags ConnectQueue#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.connectQueue.ConnectQueue.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#tags_all ConnectQueue#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.putOutboundCallerConfig">put_outbound_caller_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.resetMaxContacts">reset_max_contacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.resetOutboundCallerConfig">reset_outbound_caller_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.resetQuickConnectIds">reset_quick_connect_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.connectQueue.ConnectQueue.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.connectQueue.ConnectQueue.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.connectQueue.ConnectQueue.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectQueue.ConnectQueue.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.connectQueue.ConnectQueue.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.connectQueue.ConnectQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.connectQueue.ConnectQueue.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.connectQueue.ConnectQueue.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.connectQueue.ConnectQueue.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.connectQueue.ConnectQueue.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQueue.ConnectQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.connectQueue.ConnectQueue.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQueue.ConnectQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.connectQueue.ConnectQueue.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQueue.ConnectQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.connectQueue.ConnectQueue.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQueue.ConnectQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.connectQueue.ConnectQueue.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQueue.ConnectQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.connectQueue.ConnectQueue.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQueue.ConnectQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.connectQueue.ConnectQueue.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQueue.ConnectQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.connectQueue.ConnectQueue.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQueue.ConnectQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.connectQueue.ConnectQueue.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQueue.ConnectQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.connectQueue.ConnectQueue.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQueue.ConnectQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_outbound_caller_config` <a name="put_outbound_caller_config" id="@cdktf/provider-aws.connectQueue.ConnectQueue.putOutboundCallerConfig"></a>

```python
def put_outbound_caller_config(
  outbound_caller_id_name: str = None,
  outbound_caller_id_number_id: str = None,
  outbound_flow_id: str = None
) -> None
```

###### `outbound_caller_id_name`<sup>Optional</sup> <a name="outbound_caller_id_name" id="@cdktf/provider-aws.connectQueue.ConnectQueue.putOutboundCallerConfig.parameter.outboundCallerIdName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#outbound_caller_id_name ConnectQueue#outbound_caller_id_name}.

---

###### `outbound_caller_id_number_id`<sup>Optional</sup> <a name="outbound_caller_id_number_id" id="@cdktf/provider-aws.connectQueue.ConnectQueue.putOutboundCallerConfig.parameter.outboundCallerIdNumberId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#outbound_caller_id_number_id ConnectQueue#outbound_caller_id_number_id}.

---

###### `outbound_flow_id`<sup>Optional</sup> <a name="outbound_flow_id" id="@cdktf/provider-aws.connectQueue.ConnectQueue.putOutboundCallerConfig.parameter.outboundFlowId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#outbound_flow_id ConnectQueue#outbound_flow_id}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.connectQueue.ConnectQueue.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.connectQueue.ConnectQueue.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_max_contacts` <a name="reset_max_contacts" id="@cdktf/provider-aws.connectQueue.ConnectQueue.resetMaxContacts"></a>

```python
def reset_max_contacts() -> None
```

##### `reset_outbound_caller_config` <a name="reset_outbound_caller_config" id="@cdktf/provider-aws.connectQueue.ConnectQueue.resetOutboundCallerConfig"></a>

```python
def reset_outbound_caller_config() -> None
```

##### `reset_quick_connect_ids` <a name="reset_quick_connect_ids" id="@cdktf/provider-aws.connectQueue.ConnectQueue.resetQuickConnectIds"></a>

```python
def reset_quick_connect_ids() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-aws.connectQueue.ConnectQueue.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.connectQueue.ConnectQueue.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.connectQueue.ConnectQueue.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.connectQueue.ConnectQueue.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import connect_queue

connectQueue.ConnectQueue.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectQueue.ConnectQueue.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.connectQueue.ConnectQueue.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import connect_queue

connectQueue.ConnectQueue.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectQueue.ConnectQueue.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.connectQueue.ConnectQueue.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import connect_queue

connectQueue.ConnectQueue.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectQueue.ConnectQueue.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.property.outboundCallerConfig">outbound_caller_config</a></code> | <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference">ConnectQueueOutboundCallerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.property.queueId">queue_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.property.quickConnectIdsAssociated">quick_connect_ids_associated</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.property.hoursOfOperationIdInput">hours_of_operation_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.property.maxContactsInput">max_contacts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.property.outboundCallerConfigInput">outbound_caller_config_input</a></code> | <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfig">ConnectQueueOutboundCallerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.property.quickConnectIdsInput">quick_connect_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.property.hoursOfOperationId">hours_of_operation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.property.maxContacts">max_contacts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.property.quickConnectIds">quick_connect_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.connectQueue.ConnectQueue.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.connectQueue.ConnectQueue.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectQueue.ConnectQueue.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.connectQueue.ConnectQueue.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.connectQueue.ConnectQueue.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.connectQueue.ConnectQueue.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.connectQueue.ConnectQueue.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectQueue.ConnectQueue.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectQueue.ConnectQueue.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.connectQueue.ConnectQueue.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.connectQueue.ConnectQueue.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectQueue.ConnectQueue.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectQueue.ConnectQueue.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectQueue.ConnectQueue.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.connectQueue.ConnectQueue.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `outbound_caller_config`<sup>Required</sup> <a name="outbound_caller_config" id="@cdktf/provider-aws.connectQueue.ConnectQueue.property.outboundCallerConfig"></a>

```python
outbound_caller_config: ConnectQueueOutboundCallerConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference">ConnectQueueOutboundCallerConfigOutputReference</a>

---

##### `queue_id`<sup>Required</sup> <a name="queue_id" id="@cdktf/provider-aws.connectQueue.ConnectQueue.property.queueId"></a>

```python
queue_id: str
```

- *Type:* str

---

##### `quick_connect_ids_associated`<sup>Required</sup> <a name="quick_connect_ids_associated" id="@cdktf/provider-aws.connectQueue.ConnectQueue.property.quickConnectIdsAssociated"></a>

```python
quick_connect_ids_associated: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.connectQueue.ConnectQueue.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `hours_of_operation_id_input`<sup>Optional</sup> <a name="hours_of_operation_id_input" id="@cdktf/provider-aws.connectQueue.ConnectQueue.property.hoursOfOperationIdInput"></a>

```python
hours_of_operation_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.connectQueue.ConnectQueue.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktf/provider-aws.connectQueue.ConnectQueue.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `max_contacts_input`<sup>Optional</sup> <a name="max_contacts_input" id="@cdktf/provider-aws.connectQueue.ConnectQueue.property.maxContactsInput"></a>

```python
max_contacts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.connectQueue.ConnectQueue.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `outbound_caller_config_input`<sup>Optional</sup> <a name="outbound_caller_config_input" id="@cdktf/provider-aws.connectQueue.ConnectQueue.property.outboundCallerConfigInput"></a>

```python
outbound_caller_config_input: ConnectQueueOutboundCallerConfig
```

- *Type:* <a href="#@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfig">ConnectQueueOutboundCallerConfig</a>

---

##### `quick_connect_ids_input`<sup>Optional</sup> <a name="quick_connect_ids_input" id="@cdktf/provider-aws.connectQueue.ConnectQueue.property.quickConnectIdsInput"></a>

```python
quick_connect_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-aws.connectQueue.ConnectQueue.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.connectQueue.ConnectQueue.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.connectQueue.ConnectQueue.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.connectQueue.ConnectQueue.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `hours_of_operation_id`<sup>Required</sup> <a name="hours_of_operation_id" id="@cdktf/provider-aws.connectQueue.ConnectQueue.property.hoursOfOperationId"></a>

```python
hours_of_operation_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectQueue.ConnectQueue.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-aws.connectQueue.ConnectQueue.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `max_contacts`<sup>Required</sup> <a name="max_contacts" id="@cdktf/provider-aws.connectQueue.ConnectQueue.property.maxContacts"></a>

```python
max_contacts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectQueue.ConnectQueue.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `quick_connect_ids`<sup>Required</sup> <a name="quick_connect_ids" id="@cdktf/provider-aws.connectQueue.ConnectQueue.property.quickConnectIds"></a>

```python
quick_connect_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.connectQueue.ConnectQueue.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.connectQueue.ConnectQueue.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.connectQueue.ConnectQueue.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueue.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.connectQueue.ConnectQueue.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectQueueConfig <a name="ConnectQueueConfig" id="@cdktf/provider-aws.connectQueue.ConnectQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectQueue.ConnectQueueConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import connect_queue

connectQueue.ConnectQueueConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  hours_of_operation_id: str,
  instance_id: str,
  name: str,
  description: str = None,
  id: str = None,
  max_contacts: typing.Union[int, float] = None,
  outbound_caller_config: ConnectQueueOutboundCallerConfig = None,
  quick_connect_ids: typing.List[str] = None,
  status: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueConfig.property.hoursOfOperationId">hours_of_operation_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#hours_of_operation_id ConnectQueue#hours_of_operation_id}. |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueConfig.property.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#instance_id ConnectQueue#instance_id}. |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#name ConnectQueue#name}. |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#description ConnectQueue#description}. |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#id ConnectQueue#id}. |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueConfig.property.maxContacts">max_contacts</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#max_contacts ConnectQueue#max_contacts}. |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueConfig.property.outboundCallerConfig">outbound_caller_config</a></code> | <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfig">ConnectQueueOutboundCallerConfig</a></code> | outbound_caller_config block. |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueConfig.property.quickConnectIds">quick_connect_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#quick_connect_ids ConnectQueue#quick_connect_ids}. |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#status ConnectQueue#status}. |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#tags ConnectQueue#tags}. |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#tags_all ConnectQueue#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectQueue.ConnectQueueConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectQueue.ConnectQueueConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.connectQueue.ConnectQueueConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.connectQueue.ConnectQueueConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectQueue.ConnectQueueConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectQueue.ConnectQueueConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectQueue.ConnectQueueConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `hours_of_operation_id`<sup>Required</sup> <a name="hours_of_operation_id" id="@cdktf/provider-aws.connectQueue.ConnectQueueConfig.property.hoursOfOperationId"></a>

```python
hours_of_operation_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#hours_of_operation_id ConnectQueue#hours_of_operation_id}.

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-aws.connectQueue.ConnectQueueConfig.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#instance_id ConnectQueue#instance_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectQueue.ConnectQueueConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#name ConnectQueue#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.connectQueue.ConnectQueueConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#description ConnectQueue#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.connectQueue.ConnectQueueConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#id ConnectQueue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_contacts`<sup>Optional</sup> <a name="max_contacts" id="@cdktf/provider-aws.connectQueue.ConnectQueueConfig.property.maxContacts"></a>

```python
max_contacts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#max_contacts ConnectQueue#max_contacts}.

---

##### `outbound_caller_config`<sup>Optional</sup> <a name="outbound_caller_config" id="@cdktf/provider-aws.connectQueue.ConnectQueueConfig.property.outboundCallerConfig"></a>

```python
outbound_caller_config: ConnectQueueOutboundCallerConfig
```

- *Type:* <a href="#@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfig">ConnectQueueOutboundCallerConfig</a>

outbound_caller_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#outbound_caller_config ConnectQueue#outbound_caller_config}

---

##### `quick_connect_ids`<sup>Optional</sup> <a name="quick_connect_ids" id="@cdktf/provider-aws.connectQueue.ConnectQueueConfig.property.quickConnectIds"></a>

```python
quick_connect_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#quick_connect_ids ConnectQueue#quick_connect_ids}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.connectQueue.ConnectQueueConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#status ConnectQueue#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.connectQueue.ConnectQueueConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#tags ConnectQueue#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.connectQueue.ConnectQueueConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#tags_all ConnectQueue#tags_all}.

---

### ConnectQueueOutboundCallerConfig <a name="ConnectQueueOutboundCallerConfig" id="@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import connect_queue

connectQueue.ConnectQueueOutboundCallerConfig(
  outbound_caller_id_name: str = None,
  outbound_caller_id_number_id: str = None,
  outbound_flow_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfig.property.outboundCallerIdName">outbound_caller_id_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#outbound_caller_id_name ConnectQueue#outbound_caller_id_name}. |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfig.property.outboundCallerIdNumberId">outbound_caller_id_number_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#outbound_caller_id_number_id ConnectQueue#outbound_caller_id_number_id}. |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfig.property.outboundFlowId">outbound_flow_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#outbound_flow_id ConnectQueue#outbound_flow_id}. |

---

##### `outbound_caller_id_name`<sup>Optional</sup> <a name="outbound_caller_id_name" id="@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfig.property.outboundCallerIdName"></a>

```python
outbound_caller_id_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#outbound_caller_id_name ConnectQueue#outbound_caller_id_name}.

---

##### `outbound_caller_id_number_id`<sup>Optional</sup> <a name="outbound_caller_id_number_id" id="@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfig.property.outboundCallerIdNumberId"></a>

```python
outbound_caller_id_number_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#outbound_caller_id_number_id ConnectQueue#outbound_caller_id_number_id}.

---

##### `outbound_flow_id`<sup>Optional</sup> <a name="outbound_flow_id" id="@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfig.property.outboundFlowId"></a>

```python
outbound_flow_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_queue#outbound_flow_id ConnectQueue#outbound_flow_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectQueueOutboundCallerConfigOutputReference <a name="ConnectQueueOutboundCallerConfigOutputReference" id="@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import connect_queue

connectQueue.ConnectQueueOutboundCallerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resetOutboundCallerIdName">reset_outbound_caller_id_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resetOutboundCallerIdNumberId">reset_outbound_caller_id_number_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resetOutboundFlowId">reset_outbound_flow_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_outbound_caller_id_name` <a name="reset_outbound_caller_id_name" id="@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resetOutboundCallerIdName"></a>

```python
def reset_outbound_caller_id_name() -> None
```

##### `reset_outbound_caller_id_number_id` <a name="reset_outbound_caller_id_number_id" id="@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resetOutboundCallerIdNumberId"></a>

```python
def reset_outbound_caller_id_number_id() -> None
```

##### `reset_outbound_flow_id` <a name="reset_outbound_flow_id" id="@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resetOutboundFlowId"></a>

```python
def reset_outbound_flow_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundCallerIdNameInput">outbound_caller_id_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundCallerIdNumberIdInput">outbound_caller_id_number_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundFlowIdInput">outbound_flow_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundCallerIdName">outbound_caller_id_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundCallerIdNumberId">outbound_caller_id_number_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundFlowId">outbound_flow_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfig">ConnectQueueOutboundCallerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `outbound_caller_id_name_input`<sup>Optional</sup> <a name="outbound_caller_id_name_input" id="@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundCallerIdNameInput"></a>

```python
outbound_caller_id_name_input: str
```

- *Type:* str

---

##### `outbound_caller_id_number_id_input`<sup>Optional</sup> <a name="outbound_caller_id_number_id_input" id="@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundCallerIdNumberIdInput"></a>

```python
outbound_caller_id_number_id_input: str
```

- *Type:* str

---

##### `outbound_flow_id_input`<sup>Optional</sup> <a name="outbound_flow_id_input" id="@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundFlowIdInput"></a>

```python
outbound_flow_id_input: str
```

- *Type:* str

---

##### `outbound_caller_id_name`<sup>Required</sup> <a name="outbound_caller_id_name" id="@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundCallerIdName"></a>

```python
outbound_caller_id_name: str
```

- *Type:* str

---

##### `outbound_caller_id_number_id`<sup>Required</sup> <a name="outbound_caller_id_number_id" id="@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundCallerIdNumberId"></a>

```python
outbound_caller_id_number_id: str
```

- *Type:* str

---

##### `outbound_flow_id`<sup>Required</sup> <a name="outbound_flow_id" id="@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundFlowId"></a>

```python
outbound_flow_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.internalValue"></a>

```python
internal_value: ConnectQueueOutboundCallerConfig
```

- *Type:* <a href="#@cdktf/provider-aws.connectQueue.ConnectQueueOutboundCallerConfig">ConnectQueueOutboundCallerConfig</a>

---



