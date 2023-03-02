# `inspector2DelegatedAdminAccount` Submodule <a name="`inspector2DelegatedAdminAccount` Submodule" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Inspector2DelegatedAdminAccount <a name="Inspector2DelegatedAdminAccount" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account aws_inspector2_delegated_admin_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import inspector2_delegated_admin_account

inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  id: str = None,
  timeouts: Inspector2DelegatedAdminAccountTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account#account_id Inspector2DelegatedAdminAccount#account_id}. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account#id Inspector2DelegatedAdminAccount#id}. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts">Inspector2DelegatedAdminAccountTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account#account_id Inspector2DelegatedAdminAccount#account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account#id Inspector2DelegatedAdminAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts">Inspector2DelegatedAdminAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account#timeouts Inspector2DelegatedAdminAccount#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account#create Inspector2DelegatedAdminAccount#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account#delete Inspector2DelegatedAdminAccount#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import inspector2_delegated_admin_account

inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import inspector2_delegated_admin_account

inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import inspector2_delegated_admin_account

inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.relationshipStatus">relationship_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference">Inspector2DelegatedAdminAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts">Inspector2DelegatedAdminAccountTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `relationship_status`<sup>Required</sup> <a name="relationship_status" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.relationshipStatus"></a>

```python
relationship_status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.timeouts"></a>

```python
timeouts: Inspector2DelegatedAdminAccountTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference">Inspector2DelegatedAdminAccountTimeoutsOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[Inspector2DelegatedAdminAccountTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts">Inspector2DelegatedAdminAccountTimeouts</a>, cdktf.IResolvable]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Inspector2DelegatedAdminAccountConfig <a name="Inspector2DelegatedAdminAccountConfig" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import inspector2_delegated_admin_account

inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  id: str = None,
  timeouts: Inspector2DelegatedAdminAccountTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account#account_id Inspector2DelegatedAdminAccount#account_id}. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account#id Inspector2DelegatedAdminAccount#id}. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts">Inspector2DelegatedAdminAccountTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account#account_id Inspector2DelegatedAdminAccount#account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account#id Inspector2DelegatedAdminAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.timeouts"></a>

```python
timeouts: Inspector2DelegatedAdminAccountTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts">Inspector2DelegatedAdminAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account#timeouts Inspector2DelegatedAdminAccount#timeouts}

---

### Inspector2DelegatedAdminAccountTimeouts <a name="Inspector2DelegatedAdminAccountTimeouts" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import inspector2_delegated_admin_account

inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account#create Inspector2DelegatedAdminAccount#create}. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account#delete Inspector2DelegatedAdminAccount#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account#create Inspector2DelegatedAdminAccount#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account#delete Inspector2DelegatedAdminAccount#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### Inspector2DelegatedAdminAccountTimeoutsOutputReference <a name="Inspector2DelegatedAdminAccountTimeoutsOutputReference" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import inspector2_delegated_admin_account

inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts">Inspector2DelegatedAdminAccountTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[Inspector2DelegatedAdminAccountTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts">Inspector2DelegatedAdminAccountTimeouts</a>, cdktf.IResolvable]

---



