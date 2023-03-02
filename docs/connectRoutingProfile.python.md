# `connectRoutingProfile` Submodule <a name="`connectRoutingProfile` Submodule" id="@cdktf/provider-aws.connectRoutingProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectRoutingProfile <a name="ConnectRoutingProfile" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile aws_connect_routing_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import connect_routing_profile

connectRoutingProfile.ConnectRoutingProfile(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  default_outbound_queue_id: str,
  description: str,
  instance_id: str,
  media_concurrencies: typing.Union[IResolvable, typing.List[ConnectRoutingProfileMediaConcurrencies]],
  name: str,
  id: str = None,
  queue_configs: typing.Union[IResolvable, typing.List[ConnectRoutingProfileQueueConfigs]] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.defaultOutboundQueueId">default_outbound_queue_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#default_outbound_queue_id ConnectRoutingProfile#default_outbound_queue_id}. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#description ConnectRoutingProfile#description}. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#instance_id ConnectRoutingProfile#instance_id}. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.mediaConcurrencies">media_concurrencies</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>]]</code> | media_concurrencies block. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#name ConnectRoutingProfile#name}. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#id ConnectRoutingProfile#id}. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.queueConfigs">queue_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>]]</code> | queue_configs block. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#tags ConnectRoutingProfile#tags}. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#tags_all ConnectRoutingProfile#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_outbound_queue_id`<sup>Required</sup> <a name="default_outbound_queue_id" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.defaultOutboundQueueId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#default_outbound_queue_id ConnectRoutingProfile#default_outbound_queue_id}.

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#description ConnectRoutingProfile#description}.

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.instanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#instance_id ConnectRoutingProfile#instance_id}.

---

##### `media_concurrencies`<sup>Required</sup> <a name="media_concurrencies" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.mediaConcurrencies"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>]]

media_concurrencies block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#media_concurrencies ConnectRoutingProfile#media_concurrencies}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#name ConnectRoutingProfile#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#id ConnectRoutingProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `queue_configs`<sup>Optional</sup> <a name="queue_configs" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.queueConfigs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>]]

queue_configs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#queue_configs ConnectRoutingProfile#queue_configs}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#tags ConnectRoutingProfile#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#tags_all ConnectRoutingProfile#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.putMediaConcurrencies">put_media_concurrencies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.putQueueConfigs">put_queue_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.resetQueueConfigs">reset_queue_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_media_concurrencies` <a name="put_media_concurrencies" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.putMediaConcurrencies"></a>

```python
def put_media_concurrencies(
  value: typing.Union[IResolvable, typing.List[ConnectRoutingProfileMediaConcurrencies]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.putMediaConcurrencies.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>]]

---

##### `put_queue_configs` <a name="put_queue_configs" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.putQueueConfigs"></a>

```python
def put_queue_configs(
  value: typing.Union[IResolvable, typing.List[ConnectRoutingProfileQueueConfigs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.putQueueConfigs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_queue_configs` <a name="reset_queue_configs" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.resetQueueConfigs"></a>

```python
def reset_queue_configs() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import connect_routing_profile

connectRoutingProfile.ConnectRoutingProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import connect_routing_profile

connectRoutingProfile.ConnectRoutingProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import connect_routing_profile

connectRoutingProfile.ConnectRoutingProfile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.mediaConcurrencies">media_concurrencies</a></code> | <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList">ConnectRoutingProfileMediaConcurrenciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.queueConfigs">queue_configs</a></code> | <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList">ConnectRoutingProfileQueueConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.queueConfigsAssociated">queue_configs_associated</a></code> | <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList">ConnectRoutingProfileQueueConfigsAssociatedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.routingProfileId">routing_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.defaultOutboundQueueIdInput">default_outbound_queue_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.mediaConcurrenciesInput">media_concurrencies_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.queueConfigsInput">queue_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.defaultOutboundQueueId">default_outbound_queue_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `media_concurrencies`<sup>Required</sup> <a name="media_concurrencies" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.mediaConcurrencies"></a>

```python
media_concurrencies: ConnectRoutingProfileMediaConcurrenciesList
```

- *Type:* <a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList">ConnectRoutingProfileMediaConcurrenciesList</a>

---

##### `queue_configs`<sup>Required</sup> <a name="queue_configs" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.queueConfigs"></a>

```python
queue_configs: ConnectRoutingProfileQueueConfigsList
```

- *Type:* <a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList">ConnectRoutingProfileQueueConfigsList</a>

---

##### `queue_configs_associated`<sup>Required</sup> <a name="queue_configs_associated" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.queueConfigsAssociated"></a>

```python
queue_configs_associated: ConnectRoutingProfileQueueConfigsAssociatedList
```

- *Type:* <a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList">ConnectRoutingProfileQueueConfigsAssociatedList</a>

---

##### `routing_profile_id`<sup>Required</sup> <a name="routing_profile_id" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.routingProfileId"></a>

```python
routing_profile_id: str
```

- *Type:* str

---

##### `default_outbound_queue_id_input`<sup>Optional</sup> <a name="default_outbound_queue_id_input" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.defaultOutboundQueueIdInput"></a>

```python
default_outbound_queue_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `media_concurrencies_input`<sup>Optional</sup> <a name="media_concurrencies_input" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.mediaConcurrenciesInput"></a>

```python
media_concurrencies_input: typing.Union[IResolvable, typing.List[ConnectRoutingProfileMediaConcurrencies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `queue_configs_input`<sup>Optional</sup> <a name="queue_configs_input" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.queueConfigsInput"></a>

```python
queue_configs_input: typing.Union[IResolvable, typing.List[ConnectRoutingProfileQueueConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>]]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `default_outbound_queue_id`<sup>Required</sup> <a name="default_outbound_queue_id" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.defaultOutboundQueueId"></a>

```python
default_outbound_queue_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectRoutingProfileConfig <a name="ConnectRoutingProfileConfig" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import connect_routing_profile

connectRoutingProfile.ConnectRoutingProfileConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  default_outbound_queue_id: str,
  description: str,
  instance_id: str,
  media_concurrencies: typing.Union[IResolvable, typing.List[ConnectRoutingProfileMediaConcurrencies]],
  name: str,
  id: str = None,
  queue_configs: typing.Union[IResolvable, typing.List[ConnectRoutingProfileQueueConfigs]] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.defaultOutboundQueueId">default_outbound_queue_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#default_outbound_queue_id ConnectRoutingProfile#default_outbound_queue_id}. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#description ConnectRoutingProfile#description}. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#instance_id ConnectRoutingProfile#instance_id}. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.mediaConcurrencies">media_concurrencies</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>]]</code> | media_concurrencies block. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#name ConnectRoutingProfile#name}. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#id ConnectRoutingProfile#id}. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.queueConfigs">queue_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>]]</code> | queue_configs block. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#tags ConnectRoutingProfile#tags}. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#tags_all ConnectRoutingProfile#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_outbound_queue_id`<sup>Required</sup> <a name="default_outbound_queue_id" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.defaultOutboundQueueId"></a>

```python
default_outbound_queue_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#default_outbound_queue_id ConnectRoutingProfile#default_outbound_queue_id}.

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#description ConnectRoutingProfile#description}.

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#instance_id ConnectRoutingProfile#instance_id}.

---

##### `media_concurrencies`<sup>Required</sup> <a name="media_concurrencies" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.mediaConcurrencies"></a>

```python
media_concurrencies: typing.Union[IResolvable, typing.List[ConnectRoutingProfileMediaConcurrencies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>]]

media_concurrencies block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#media_concurrencies ConnectRoutingProfile#media_concurrencies}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#name ConnectRoutingProfile#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#id ConnectRoutingProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `queue_configs`<sup>Optional</sup> <a name="queue_configs" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.queueConfigs"></a>

```python
queue_configs: typing.Union[IResolvable, typing.List[ConnectRoutingProfileQueueConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>]]

queue_configs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#queue_configs ConnectRoutingProfile#queue_configs}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#tags ConnectRoutingProfile#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#tags_all ConnectRoutingProfile#tags_all}.

---

### ConnectRoutingProfileMediaConcurrencies <a name="ConnectRoutingProfileMediaConcurrencies" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import connect_routing_profile

connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies(
  channel: str,
  concurrency: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies.property.channel">channel</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#channel ConnectRoutingProfile#channel}. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies.property.concurrency">concurrency</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#concurrency ConnectRoutingProfile#concurrency}. |

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies.property.channel"></a>

```python
channel: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#channel ConnectRoutingProfile#channel}.

---

##### `concurrency`<sup>Required</sup> <a name="concurrency" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies.property.concurrency"></a>

```python
concurrency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#concurrency ConnectRoutingProfile#concurrency}.

---

### ConnectRoutingProfileQueueConfigs <a name="ConnectRoutingProfileQueueConfigs" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import connect_routing_profile

connectRoutingProfile.ConnectRoutingProfileQueueConfigs(
  channel: str,
  delay: typing.Union[int, float],
  priority: typing.Union[int, float],
  queue_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.property.channel">channel</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#channel ConnectRoutingProfile#channel}. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.property.delay">delay</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#delay ConnectRoutingProfile#delay}. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#priority ConnectRoutingProfile#priority}. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.property.queueId">queue_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#queue_id ConnectRoutingProfile#queue_id}. |

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.property.channel"></a>

```python
channel: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#channel ConnectRoutingProfile#channel}.

---

##### `delay`<sup>Required</sup> <a name="delay" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.property.delay"></a>

```python
delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#delay ConnectRoutingProfile#delay}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#priority ConnectRoutingProfile#priority}.

---

##### `queue_id`<sup>Required</sup> <a name="queue_id" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.property.queueId"></a>

```python
queue_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#queue_id ConnectRoutingProfile#queue_id}.

---

### ConnectRoutingProfileQueueConfigsAssociated <a name="ConnectRoutingProfileQueueConfigsAssociated" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociated"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociated.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import connect_routing_profile

connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociated()
```


## Classes <a name="Classes" id="Classes"></a>

### ConnectRoutingProfileMediaConcurrenciesList <a name="ConnectRoutingProfileMediaConcurrenciesList" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import connect_routing_profile

connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectRoutingProfileMediaConcurrenciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ConnectRoutingProfileMediaConcurrencies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>]]

---


### ConnectRoutingProfileMediaConcurrenciesOutputReference <a name="ConnectRoutingProfileMediaConcurrenciesOutputReference" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import connect_routing_profile

connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.channelInput">channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.concurrencyInput">concurrency_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.channel">channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.concurrency">concurrency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `channel_input`<sup>Optional</sup> <a name="channel_input" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.channelInput"></a>

```python
channel_input: str
```

- *Type:* str

---

##### `concurrency_input`<sup>Optional</sup> <a name="concurrency_input" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.concurrencyInput"></a>

```python
concurrency_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.channel"></a>

```python
channel: str
```

- *Type:* str

---

##### `concurrency`<sup>Required</sup> <a name="concurrency" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.concurrency"></a>

```python
concurrency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ConnectRoutingProfileMediaConcurrencies, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>, cdktf.IResolvable]

---


### ConnectRoutingProfileQueueConfigsAssociatedList <a name="ConnectRoutingProfileQueueConfigsAssociatedList" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import connect_routing_profile

connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectRoutingProfileQueueConfigsAssociatedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ConnectRoutingProfileQueueConfigsAssociatedOutputReference <a name="ConnectRoutingProfileQueueConfigsAssociatedOutputReference" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import connect_routing_profile

connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.channel">channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.delay">delay</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.queueArn">queue_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.queueId">queue_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.queueName">queue_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociated">ConnectRoutingProfileQueueConfigsAssociated</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.channel"></a>

```python
channel: str
```

- *Type:* str

---

##### `delay`<sup>Required</sup> <a name="delay" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.delay"></a>

```python
delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `queue_arn`<sup>Required</sup> <a name="queue_arn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.queueArn"></a>

```python
queue_arn: str
```

- *Type:* str

---

##### `queue_id`<sup>Required</sup> <a name="queue_id" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.queueId"></a>

```python
queue_id: str
```

- *Type:* str

---

##### `queue_name`<sup>Required</sup> <a name="queue_name" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.queueName"></a>

```python
queue_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.internalValue"></a>

```python
internal_value: ConnectRoutingProfileQueueConfigsAssociated
```

- *Type:* <a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociated">ConnectRoutingProfileQueueConfigsAssociated</a>

---


### ConnectRoutingProfileQueueConfigsList <a name="ConnectRoutingProfileQueueConfigsList" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import connect_routing_profile

connectRoutingProfile.ConnectRoutingProfileQueueConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectRoutingProfileQueueConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ConnectRoutingProfileQueueConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>]]

---


### ConnectRoutingProfileQueueConfigsOutputReference <a name="ConnectRoutingProfileQueueConfigsOutputReference" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import connect_routing_profile

connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.queueArn">queue_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.queueName">queue_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.channelInput">channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.delayInput">delay_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.queueIdInput">queue_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.channel">channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.delay">delay</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.queueId">queue_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `queue_arn`<sup>Required</sup> <a name="queue_arn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.queueArn"></a>

```python
queue_arn: str
```

- *Type:* str

---

##### `queue_name`<sup>Required</sup> <a name="queue_name" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.queueName"></a>

```python
queue_name: str
```

- *Type:* str

---

##### `channel_input`<sup>Optional</sup> <a name="channel_input" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.channelInput"></a>

```python
channel_input: str
```

- *Type:* str

---

##### `delay_input`<sup>Optional</sup> <a name="delay_input" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.delayInput"></a>

```python
delay_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `queue_id_input`<sup>Optional</sup> <a name="queue_id_input" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.queueIdInput"></a>

```python
queue_id_input: str
```

- *Type:* str

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.channel"></a>

```python
channel: str
```

- *Type:* str

---

##### `delay`<sup>Required</sup> <a name="delay" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.delay"></a>

```python
delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `queue_id`<sup>Required</sup> <a name="queue_id" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.queueId"></a>

```python
queue_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ConnectRoutingProfileQueueConfigs, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>, cdktf.IResolvable]

---



