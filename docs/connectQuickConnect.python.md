# `connectQuickConnect` Submodule <a name="`connectQuickConnect` Submodule" id="@cdktf/provider-aws.connectQuickConnect"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectQuickConnect <a name="ConnectQuickConnect" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect aws_connect_quick_connect}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import connect_quick_connect

connectQuickConnect.ConnectQuickConnect(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_id: str,
  name: str,
  quick_connect_config: ConnectQuickConnectQuickConnectConfig,
  description: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#instance_id ConnectQuickConnect#instance_id}. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#name ConnectQuickConnect#name}. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.quickConnectConfig">quick_connect_config</a></code> | <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig">ConnectQuickConnectQuickConnectConfig</a></code> | quick_connect_config block. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#description ConnectQuickConnect#description}. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#id ConnectQuickConnect#id}. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#tags ConnectQuickConnect#tags}. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#tags_all ConnectQuickConnect#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.instanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#instance_id ConnectQuickConnect#instance_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#name ConnectQuickConnect#name}.

---

##### `quick_connect_config`<sup>Required</sup> <a name="quick_connect_config" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.quickConnectConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig">ConnectQuickConnectQuickConnectConfig</a>

quick_connect_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#quick_connect_config ConnectQuickConnect#quick_connect_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#description ConnectQuickConnect#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#id ConnectQuickConnect#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#tags ConnectQuickConnect#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#tags_all ConnectQuickConnect#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.putQuickConnectConfig">put_quick_connect_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_quick_connect_config` <a name="put_quick_connect_config" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.putQuickConnectConfig"></a>

```python
def put_quick_connect_config(
  quick_connect_type: str,
  phone_config: typing.Union[IResolvable, typing.List[ConnectQuickConnectQuickConnectConfigPhoneConfig]] = None,
  queue_config: typing.Union[IResolvable, typing.List[ConnectQuickConnectQuickConnectConfigQueueConfig]] = None,
  user_config: typing.Union[IResolvable, typing.List[ConnectQuickConnectQuickConnectConfigUserConfig]] = None
) -> None
```

###### `quick_connect_type`<sup>Required</sup> <a name="quick_connect_type" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.putQuickConnectConfig.parameter.quickConnectType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#quick_connect_type ConnectQuickConnect#quick_connect_type}.

---

###### `phone_config`<sup>Optional</sup> <a name="phone_config" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.putQuickConnectConfig.parameter.phoneConfig"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig">ConnectQuickConnectQuickConnectConfigPhoneConfig</a>]]

phone_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#phone_config ConnectQuickConnect#phone_config}

---

###### `queue_config`<sup>Optional</sup> <a name="queue_config" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.putQuickConnectConfig.parameter.queueConfig"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig">ConnectQuickConnectQuickConnectConfigQueueConfig</a>]]

queue_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#queue_config ConnectQuickConnect#queue_config}

---

###### `user_config`<sup>Optional</sup> <a name="user_config" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.putQuickConnectConfig.parameter.userConfig"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig">ConnectQuickConnectQuickConnectConfigUserConfig</a>]]

user_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#user_config ConnectQuickConnect#user_config}

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import connect_quick_connect

connectQuickConnect.ConnectQuickConnect.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import connect_quick_connect

connectQuickConnect.ConnectQuickConnect.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import connect_quick_connect

connectQuickConnect.ConnectQuickConnect.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.quickConnectConfig">quick_connect_config</a></code> | <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference">ConnectQuickConnectQuickConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.quickConnectId">quick_connect_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.quickConnectConfigInput">quick_connect_config_input</a></code> | <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig">ConnectQuickConnectQuickConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `quick_connect_config`<sup>Required</sup> <a name="quick_connect_config" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.quickConnectConfig"></a>

```python
quick_connect_config: ConnectQuickConnectQuickConnectConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference">ConnectQuickConnectQuickConnectConfigOutputReference</a>

---

##### `quick_connect_id`<sup>Required</sup> <a name="quick_connect_id" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.quickConnectId"></a>

```python
quick_connect_id: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `quick_connect_config_input`<sup>Optional</sup> <a name="quick_connect_config_input" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.quickConnectConfigInput"></a>

```python
quick_connect_config_input: ConnectQuickConnectQuickConnectConfig
```

- *Type:* <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig">ConnectQuickConnectQuickConnectConfig</a>

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectQuickConnectConfig <a name="ConnectQuickConnectConfig" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import connect_quick_connect

connectQuickConnect.ConnectQuickConnectConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_id: str,
  name: str,
  quick_connect_config: ConnectQuickConnectQuickConnectConfig,
  description: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#instance_id ConnectQuickConnect#instance_id}. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#name ConnectQuickConnect#name}. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.quickConnectConfig">quick_connect_config</a></code> | <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig">ConnectQuickConnectQuickConnectConfig</a></code> | quick_connect_config block. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#description ConnectQuickConnect#description}. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#id ConnectQuickConnect#id}. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#tags ConnectQuickConnect#tags}. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#tags_all ConnectQuickConnect#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#instance_id ConnectQuickConnect#instance_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#name ConnectQuickConnect#name}.

---

##### `quick_connect_config`<sup>Required</sup> <a name="quick_connect_config" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.quickConnectConfig"></a>

```python
quick_connect_config: ConnectQuickConnectQuickConnectConfig
```

- *Type:* <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig">ConnectQuickConnectQuickConnectConfig</a>

quick_connect_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#quick_connect_config ConnectQuickConnect#quick_connect_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#description ConnectQuickConnect#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#id ConnectQuickConnect#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#tags ConnectQuickConnect#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#tags_all ConnectQuickConnect#tags_all}.

---

### ConnectQuickConnectQuickConnectConfig <a name="ConnectQuickConnectQuickConnectConfig" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import connect_quick_connect

connectQuickConnect.ConnectQuickConnectQuickConnectConfig(
  quick_connect_type: str,
  phone_config: typing.Union[IResolvable, typing.List[ConnectQuickConnectQuickConnectConfigPhoneConfig]] = None,
  queue_config: typing.Union[IResolvable, typing.List[ConnectQuickConnectQuickConnectConfigQueueConfig]] = None,
  user_config: typing.Union[IResolvable, typing.List[ConnectQuickConnectQuickConnectConfigUserConfig]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.property.quickConnectType">quick_connect_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#quick_connect_type ConnectQuickConnect#quick_connect_type}. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.property.phoneConfig">phone_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig">ConnectQuickConnectQuickConnectConfigPhoneConfig</a>]]</code> | phone_config block. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.property.queueConfig">queue_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig">ConnectQuickConnectQuickConnectConfigQueueConfig</a>]]</code> | queue_config block. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.property.userConfig">user_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig">ConnectQuickConnectQuickConnectConfigUserConfig</a>]]</code> | user_config block. |

---

##### `quick_connect_type`<sup>Required</sup> <a name="quick_connect_type" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.property.quickConnectType"></a>

```python
quick_connect_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#quick_connect_type ConnectQuickConnect#quick_connect_type}.

---

##### `phone_config`<sup>Optional</sup> <a name="phone_config" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.property.phoneConfig"></a>

```python
phone_config: typing.Union[IResolvable, typing.List[ConnectQuickConnectQuickConnectConfigPhoneConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig">ConnectQuickConnectQuickConnectConfigPhoneConfig</a>]]

phone_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#phone_config ConnectQuickConnect#phone_config}

---

##### `queue_config`<sup>Optional</sup> <a name="queue_config" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.property.queueConfig"></a>

```python
queue_config: typing.Union[IResolvable, typing.List[ConnectQuickConnectQuickConnectConfigQueueConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig">ConnectQuickConnectQuickConnectConfigQueueConfig</a>]]

queue_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#queue_config ConnectQuickConnect#queue_config}

---

##### `user_config`<sup>Optional</sup> <a name="user_config" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.property.userConfig"></a>

```python
user_config: typing.Union[IResolvable, typing.List[ConnectQuickConnectQuickConnectConfigUserConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig">ConnectQuickConnectQuickConnectConfigUserConfig</a>]]

user_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#user_config ConnectQuickConnect#user_config}

---

### ConnectQuickConnectQuickConnectConfigPhoneConfig <a name="ConnectQuickConnectQuickConnectConfigPhoneConfig" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import connect_quick_connect

connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig(
  phone_number: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig.property.phoneNumber">phone_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#phone_number ConnectQuickConnect#phone_number}. |

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#phone_number ConnectQuickConnect#phone_number}.

---

### ConnectQuickConnectQuickConnectConfigQueueConfig <a name="ConnectQuickConnectQuickConnectConfigQueueConfig" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import connect_quick_connect

connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig(
  contact_flow_id: str,
  queue_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig.property.contactFlowId">contact_flow_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#contact_flow_id ConnectQuickConnect#contact_flow_id}. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig.property.queueId">queue_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#queue_id ConnectQuickConnect#queue_id}. |

---

##### `contact_flow_id`<sup>Required</sup> <a name="contact_flow_id" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig.property.contactFlowId"></a>

```python
contact_flow_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#contact_flow_id ConnectQuickConnect#contact_flow_id}.

---

##### `queue_id`<sup>Required</sup> <a name="queue_id" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig.property.queueId"></a>

```python
queue_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#queue_id ConnectQuickConnect#queue_id}.

---

### ConnectQuickConnectQuickConnectConfigUserConfig <a name="ConnectQuickConnectQuickConnectConfigUserConfig" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import connect_quick_connect

connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig(
  contact_flow_id: str,
  user_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig.property.contactFlowId">contact_flow_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#contact_flow_id ConnectQuickConnect#contact_flow_id}. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig.property.userId">user_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#user_id ConnectQuickConnect#user_id}. |

---

##### `contact_flow_id`<sup>Required</sup> <a name="contact_flow_id" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig.property.contactFlowId"></a>

```python
contact_flow_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#contact_flow_id ConnectQuickConnect#contact_flow_id}.

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig.property.userId"></a>

```python
user_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#user_id ConnectQuickConnect#user_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectQuickConnectQuickConnectConfigOutputReference <a name="ConnectQuickConnectQuickConnectConfigOutputReference" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import connect_quick_connect

connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putPhoneConfig">put_phone_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putQueueConfig">put_queue_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putUserConfig">put_user_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resetPhoneConfig">reset_phone_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resetQueueConfig">reset_queue_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resetUserConfig">reset_user_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_phone_config` <a name="put_phone_config" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putPhoneConfig"></a>

```python
def put_phone_config(
  value: typing.Union[IResolvable, typing.List[ConnectQuickConnectQuickConnectConfigPhoneConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putPhoneConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig">ConnectQuickConnectQuickConnectConfigPhoneConfig</a>]]

---

##### `put_queue_config` <a name="put_queue_config" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putQueueConfig"></a>

```python
def put_queue_config(
  value: typing.Union[IResolvable, typing.List[ConnectQuickConnectQuickConnectConfigQueueConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putQueueConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig">ConnectQuickConnectQuickConnectConfigQueueConfig</a>]]

---

##### `put_user_config` <a name="put_user_config" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putUserConfig"></a>

```python
def put_user_config(
  value: typing.Union[IResolvable, typing.List[ConnectQuickConnectQuickConnectConfigUserConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putUserConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig">ConnectQuickConnectQuickConnectConfigUserConfig</a>]]

---

##### `reset_phone_config` <a name="reset_phone_config" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resetPhoneConfig"></a>

```python
def reset_phone_config() -> None
```

##### `reset_queue_config` <a name="reset_queue_config" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resetQueueConfig"></a>

```python
def reset_queue_config() -> None
```

##### `reset_user_config` <a name="reset_user_config" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resetUserConfig"></a>

```python
def reset_user_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.phoneConfig">phone_config</a></code> | <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList">ConnectQuickConnectQuickConnectConfigPhoneConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.queueConfig">queue_config</a></code> | <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList">ConnectQuickConnectQuickConnectConfigQueueConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.userConfig">user_config</a></code> | <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList">ConnectQuickConnectQuickConnectConfigUserConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.phoneConfigInput">phone_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig">ConnectQuickConnectQuickConnectConfigPhoneConfig</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.queueConfigInput">queue_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig">ConnectQuickConnectQuickConnectConfigQueueConfig</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.quickConnectTypeInput">quick_connect_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.userConfigInput">user_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig">ConnectQuickConnectQuickConnectConfigUserConfig</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.quickConnectType">quick_connect_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig">ConnectQuickConnectQuickConnectConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `phone_config`<sup>Required</sup> <a name="phone_config" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.phoneConfig"></a>

```python
phone_config: ConnectQuickConnectQuickConnectConfigPhoneConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList">ConnectQuickConnectQuickConnectConfigPhoneConfigList</a>

---

##### `queue_config`<sup>Required</sup> <a name="queue_config" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.queueConfig"></a>

```python
queue_config: ConnectQuickConnectQuickConnectConfigQueueConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList">ConnectQuickConnectQuickConnectConfigQueueConfigList</a>

---

##### `user_config`<sup>Required</sup> <a name="user_config" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.userConfig"></a>

```python
user_config: ConnectQuickConnectQuickConnectConfigUserConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList">ConnectQuickConnectQuickConnectConfigUserConfigList</a>

---

##### `phone_config_input`<sup>Optional</sup> <a name="phone_config_input" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.phoneConfigInput"></a>

```python
phone_config_input: typing.Union[IResolvable, typing.List[ConnectQuickConnectQuickConnectConfigPhoneConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig">ConnectQuickConnectQuickConnectConfigPhoneConfig</a>]]

---

##### `queue_config_input`<sup>Optional</sup> <a name="queue_config_input" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.queueConfigInput"></a>

```python
queue_config_input: typing.Union[IResolvable, typing.List[ConnectQuickConnectQuickConnectConfigQueueConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig">ConnectQuickConnectQuickConnectConfigQueueConfig</a>]]

---

##### `quick_connect_type_input`<sup>Optional</sup> <a name="quick_connect_type_input" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.quickConnectTypeInput"></a>

```python
quick_connect_type_input: str
```

- *Type:* str

---

##### `user_config_input`<sup>Optional</sup> <a name="user_config_input" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.userConfigInput"></a>

```python
user_config_input: typing.Union[IResolvable, typing.List[ConnectQuickConnectQuickConnectConfigUserConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig">ConnectQuickConnectQuickConnectConfigUserConfig</a>]]

---

##### `quick_connect_type`<sup>Required</sup> <a name="quick_connect_type" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.quickConnectType"></a>

```python
quick_connect_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.internalValue"></a>

```python
internal_value: ConnectQuickConnectQuickConnectConfig
```

- *Type:* <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig">ConnectQuickConnectQuickConnectConfig</a>

---


### ConnectQuickConnectQuickConnectConfigPhoneConfigList <a name="ConnectQuickConnectQuickConnectConfigPhoneConfigList" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import connect_quick_connect

connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig">ConnectQuickConnectQuickConnectConfigPhoneConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ConnectQuickConnectQuickConnectConfigPhoneConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig">ConnectQuickConnectQuickConnectConfigPhoneConfig</a>]]

---


### ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference <a name="ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import connect_quick_connect

connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.phoneNumberInput">phone_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.phoneNumber">phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig">ConnectQuickConnectQuickConnectConfigPhoneConfig</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `phone_number_input`<sup>Optional</sup> <a name="phone_number_input" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.phoneNumberInput"></a>

```python
phone_number_input: str
```

- *Type:* str

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ConnectQuickConnectQuickConnectConfigPhoneConfig, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig">ConnectQuickConnectQuickConnectConfigPhoneConfig</a>, cdktf.IResolvable]

---


### ConnectQuickConnectQuickConnectConfigQueueConfigList <a name="ConnectQuickConnectQuickConnectConfigQueueConfigList" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import connect_quick_connect

connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig">ConnectQuickConnectQuickConnectConfigQueueConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ConnectQuickConnectQuickConnectConfigQueueConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig">ConnectQuickConnectQuickConnectConfigQueueConfig</a>]]

---


### ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference <a name="ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import connect_quick_connect

connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.contactFlowIdInput">contact_flow_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.queueIdInput">queue_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.contactFlowId">contact_flow_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.queueId">queue_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig">ConnectQuickConnectQuickConnectConfigQueueConfig</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `contact_flow_id_input`<sup>Optional</sup> <a name="contact_flow_id_input" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.contactFlowIdInput"></a>

```python
contact_flow_id_input: str
```

- *Type:* str

---

##### `queue_id_input`<sup>Optional</sup> <a name="queue_id_input" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.queueIdInput"></a>

```python
queue_id_input: str
```

- *Type:* str

---

##### `contact_flow_id`<sup>Required</sup> <a name="contact_flow_id" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.contactFlowId"></a>

```python
contact_flow_id: str
```

- *Type:* str

---

##### `queue_id`<sup>Required</sup> <a name="queue_id" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.queueId"></a>

```python
queue_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ConnectQuickConnectQuickConnectConfigQueueConfig, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig">ConnectQuickConnectQuickConnectConfigQueueConfig</a>, cdktf.IResolvable]

---


### ConnectQuickConnectQuickConnectConfigUserConfigList <a name="ConnectQuickConnectQuickConnectConfigUserConfigList" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import connect_quick_connect

connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectQuickConnectQuickConnectConfigUserConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig">ConnectQuickConnectQuickConnectConfigUserConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ConnectQuickConnectQuickConnectConfigUserConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig">ConnectQuickConnectQuickConnectConfigUserConfig</a>]]

---


### ConnectQuickConnectQuickConnectConfigUserConfigOutputReference <a name="ConnectQuickConnectQuickConnectConfigUserConfigOutputReference" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import connect_quick_connect

connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.contactFlowIdInput">contact_flow_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.userIdInput">user_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.contactFlowId">contact_flow_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.userId">user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig">ConnectQuickConnectQuickConnectConfigUserConfig</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `contact_flow_id_input`<sup>Optional</sup> <a name="contact_flow_id_input" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.contactFlowIdInput"></a>

```python
contact_flow_id_input: str
```

- *Type:* str

---

##### `user_id_input`<sup>Optional</sup> <a name="user_id_input" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.userIdInput"></a>

```python
user_id_input: str
```

- *Type:* str

---

##### `contact_flow_id`<sup>Required</sup> <a name="contact_flow_id" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.contactFlowId"></a>

```python
contact_flow_id: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ConnectQuickConnectQuickConnectConfigUserConfig, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig">ConnectQuickConnectQuickConnectConfigUserConfig</a>, cdktf.IResolvable]

---



