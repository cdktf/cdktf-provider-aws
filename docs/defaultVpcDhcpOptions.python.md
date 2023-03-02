# `defaultVpcDhcpOptions` Submodule <a name="`defaultVpcDhcpOptions` Submodule" id="@cdktf/provider-aws.defaultVpcDhcpOptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DefaultVpcDhcpOptions <a name="DefaultVpcDhcpOptions" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options aws_default_vpc_dhcp_options}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import default_vpc_dhcp_options

defaultVpcDhcpOptions.DefaultVpcDhcpOptions(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  owner_id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options#id DefaultVpcDhcpOptions#id}. |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.ownerId">owner_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options#owner_id DefaultVpcDhcpOptions#owner_id}. |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options#tags DefaultVpcDhcpOptions#tags}. |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options#tags_all DefaultVpcDhcpOptions#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options#id DefaultVpcDhcpOptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `owner_id`<sup>Optional</sup> <a name="owner_id" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.ownerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options#owner_id DefaultVpcDhcpOptions#owner_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options#tags DefaultVpcDhcpOptions#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options#tags_all DefaultVpcDhcpOptions#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.resetOwnerId">reset_owner_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_owner_id` <a name="reset_owner_id" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.resetOwnerId"></a>

```python
def reset_owner_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import default_vpc_dhcp_options

defaultVpcDhcpOptions.DefaultVpcDhcpOptions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import default_vpc_dhcp_options

defaultVpcDhcpOptions.DefaultVpcDhcpOptions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import default_vpc_dhcp_options

defaultVpcDhcpOptions.DefaultVpcDhcpOptions.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.domainNameServers">domain_name_servers</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.netbiosNameServers">netbios_name_servers</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.netbiosNodeType">netbios_node_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.ntpServers">ntp_servers</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.ownerIdInput">owner_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `domain_name_servers`<sup>Required</sup> <a name="domain_name_servers" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.domainNameServers"></a>

```python
domain_name_servers: str
```

- *Type:* str

---

##### `netbios_name_servers`<sup>Required</sup> <a name="netbios_name_servers" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.netbiosNameServers"></a>

```python
netbios_name_servers: str
```

- *Type:* str

---

##### `netbios_node_type`<sup>Required</sup> <a name="netbios_node_type" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.netbiosNodeType"></a>

```python
netbios_node_type: str
```

- *Type:* str

---

##### `ntp_servers`<sup>Required</sup> <a name="ntp_servers" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.ntpServers"></a>

```python
ntp_servers: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `owner_id_input`<sup>Optional</sup> <a name="owner_id_input" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.ownerIdInput"></a>

```python
owner_id_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DefaultVpcDhcpOptionsConfig <a name="DefaultVpcDhcpOptionsConfig" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import default_vpc_dhcp_options

defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  owner_id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options#id DefaultVpcDhcpOptions#id}. |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.ownerId">owner_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options#owner_id DefaultVpcDhcpOptions#owner_id}. |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options#tags DefaultVpcDhcpOptions#tags}. |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options#tags_all DefaultVpcDhcpOptions#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options#id DefaultVpcDhcpOptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `owner_id`<sup>Optional</sup> <a name="owner_id" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options#owner_id DefaultVpcDhcpOptions#owner_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options#tags DefaultVpcDhcpOptions#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options#tags_all DefaultVpcDhcpOptions#tags_all}.

---



