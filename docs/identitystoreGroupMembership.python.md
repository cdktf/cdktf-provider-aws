# `identitystoreGroupMembership` Submodule <a name="`identitystoreGroupMembership` Submodule" id="@cdktf/provider-aws.identitystoreGroupMembership"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentitystoreGroupMembership <a name="IdentitystoreGroupMembership" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/identitystore_group_membership aws_identitystore_group_membership}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import identitystore_group_membership

identitystoreGroupMembership.IdentitystoreGroupMembership(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  group_id: str,
  identity_store_id: str,
  member_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.groupId">group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_group_membership#group_id IdentitystoreGroupMembership#group_id}. |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.identityStoreId">identity_store_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_group_membership#identity_store_id IdentitystoreGroupMembership#identity_store_id}. |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.memberId">member_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_group_membership#member_id IdentitystoreGroupMembership#member_id}. |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_group_membership#id IdentitystoreGroupMembership#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.groupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_group_membership#group_id IdentitystoreGroupMembership#group_id}.

---

##### `identity_store_id`<sup>Required</sup> <a name="identity_store_id" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.identityStoreId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_group_membership#identity_store_id IdentitystoreGroupMembership#identity_store_id}.

---

##### `member_id`<sup>Required</sup> <a name="member_id" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.memberId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_group_membership#member_id IdentitystoreGroupMembership#member_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_group_membership#id IdentitystoreGroupMembership#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import identitystore_group_membership

identitystoreGroupMembership.IdentitystoreGroupMembership.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import identitystore_group_membership

identitystoreGroupMembership.IdentitystoreGroupMembership.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import identitystore_group_membership

identitystoreGroupMembership.IdentitystoreGroupMembership.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.membershipId">membership_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.groupIdInput">group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.identityStoreIdInput">identity_store_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.memberIdInput">member_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.identityStoreId">identity_store_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.memberId">member_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `membership_id`<sup>Required</sup> <a name="membership_id" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.membershipId"></a>

```python
membership_id: str
```

- *Type:* str

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.groupIdInput"></a>

```python
group_id_input: str
```

- *Type:* str

---

##### `identity_store_id_input`<sup>Optional</sup> <a name="identity_store_id_input" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.identityStoreIdInput"></a>

```python
identity_store_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `member_id_input`<sup>Optional</sup> <a name="member_id_input" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.memberIdInput"></a>

```python
member_id_input: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity_store_id`<sup>Required</sup> <a name="identity_store_id" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.identityStoreId"></a>

```python
identity_store_id: str
```

- *Type:* str

---

##### `member_id`<sup>Required</sup> <a name="member_id" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.memberId"></a>

```python
member_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembership.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IdentitystoreGroupMembershipConfig <a name="IdentitystoreGroupMembershipConfig" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import identitystore_group_membership

identitystoreGroupMembership.IdentitystoreGroupMembershipConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  group_id: str,
  identity_store_id: str,
  member_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.groupId">group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_group_membership#group_id IdentitystoreGroupMembership#group_id}. |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.identityStoreId">identity_store_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_group_membership#identity_store_id IdentitystoreGroupMembership#identity_store_id}. |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.memberId">member_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_group_membership#member_id IdentitystoreGroupMembership#member_id}. |
| <code><a href="#@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_group_membership#id IdentitystoreGroupMembership#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_group_membership#group_id IdentitystoreGroupMembership#group_id}.

---

##### `identity_store_id`<sup>Required</sup> <a name="identity_store_id" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.identityStoreId"></a>

```python
identity_store_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_group_membership#identity_store_id IdentitystoreGroupMembership#identity_store_id}.

---

##### `member_id`<sup>Required</sup> <a name="member_id" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.memberId"></a>

```python
member_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_group_membership#member_id IdentitystoreGroupMembership#member_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_group_membership#id IdentitystoreGroupMembership#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



