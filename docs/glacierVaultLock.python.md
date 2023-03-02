# `glacierVaultLock` Submodule <a name="`glacierVaultLock` Submodule" id="@cdktf/provider-aws.glacierVaultLock"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlacierVaultLock <a name="GlacierVaultLock" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock aws_glacier_vault_lock}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glacier_vault_lock

glacierVaultLock.GlacierVaultLock(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  complete_lock: typing.Union[bool, IResolvable],
  policy: str,
  vault_name: str,
  id: str = None,
  ignore_deletion_error: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.Initializer.parameter.completeLock">complete_lock</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock#complete_lock GlacierVaultLock#complete_lock}. |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.Initializer.parameter.policy">policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock#policy GlacierVaultLock#policy}. |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.Initializer.parameter.vaultName">vault_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock#vault_name GlacierVaultLock#vault_name}. |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock#id GlacierVaultLock#id}. |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.Initializer.parameter.ignoreDeletionError">ignore_deletion_error</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock#ignore_deletion_error GlacierVaultLock#ignore_deletion_error}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `complete_lock`<sup>Required</sup> <a name="complete_lock" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.Initializer.parameter.completeLock"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock#complete_lock GlacierVaultLock#complete_lock}.

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.Initializer.parameter.policy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock#policy GlacierVaultLock#policy}.

---

##### `vault_name`<sup>Required</sup> <a name="vault_name" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.Initializer.parameter.vaultName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock#vault_name GlacierVaultLock#vault_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock#id GlacierVaultLock#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_deletion_error`<sup>Optional</sup> <a name="ignore_deletion_error" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.Initializer.parameter.ignoreDeletionError"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock#ignore_deletion_error GlacierVaultLock#ignore_deletion_error}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.resetIgnoreDeletionError">reset_ignore_deletion_error</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ignore_deletion_error` <a name="reset_ignore_deletion_error" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.resetIgnoreDeletionError"></a>

```python
def reset_ignore_deletion_error() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import glacier_vault_lock

glacierVaultLock.GlacierVaultLock.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import glacier_vault_lock

glacierVaultLock.GlacierVaultLock.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import glacier_vault_lock

glacierVaultLock.GlacierVaultLock.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.completeLockInput">complete_lock_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.ignoreDeletionErrorInput">ignore_deletion_error_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.policyInput">policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.vaultNameInput">vault_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.completeLock">complete_lock</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.ignoreDeletionError">ignore_deletion_error</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.policy">policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.vaultName">vault_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `complete_lock_input`<sup>Optional</sup> <a name="complete_lock_input" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.completeLockInput"></a>

```python
complete_lock_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ignore_deletion_error_input`<sup>Optional</sup> <a name="ignore_deletion_error_input" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.ignoreDeletionErrorInput"></a>

```python
ignore_deletion_error_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `policy_input`<sup>Optional</sup> <a name="policy_input" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.policyInput"></a>

```python
policy_input: str
```

- *Type:* str

---

##### `vault_name_input`<sup>Optional</sup> <a name="vault_name_input" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.vaultNameInput"></a>

```python
vault_name_input: str
```

- *Type:* str

---

##### `complete_lock`<sup>Required</sup> <a name="complete_lock" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.completeLock"></a>

```python
complete_lock: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ignore_deletion_error`<sup>Required</sup> <a name="ignore_deletion_error" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.ignoreDeletionError"></a>

```python
ignore_deletion_error: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.policy"></a>

```python
policy: str
```

- *Type:* str

---

##### `vault_name`<sup>Required</sup> <a name="vault_name" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.vaultName"></a>

```python
vault_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GlacierVaultLockConfig <a name="GlacierVaultLockConfig" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glacier_vault_lock

glacierVaultLock.GlacierVaultLockConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  complete_lock: typing.Union[bool, IResolvable],
  policy: str,
  vault_name: str,
  id: str = None,
  ignore_deletion_error: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.completeLock">complete_lock</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock#complete_lock GlacierVaultLock#complete_lock}. |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.policy">policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock#policy GlacierVaultLock#policy}. |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.vaultName">vault_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock#vault_name GlacierVaultLock#vault_name}. |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock#id GlacierVaultLock#id}. |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.ignoreDeletionError">ignore_deletion_error</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock#ignore_deletion_error GlacierVaultLock#ignore_deletion_error}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `complete_lock`<sup>Required</sup> <a name="complete_lock" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.completeLock"></a>

```python
complete_lock: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock#complete_lock GlacierVaultLock#complete_lock}.

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.policy"></a>

```python
policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock#policy GlacierVaultLock#policy}.

---

##### `vault_name`<sup>Required</sup> <a name="vault_name" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.vaultName"></a>

```python
vault_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock#vault_name GlacierVaultLock#vault_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock#id GlacierVaultLock#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_deletion_error`<sup>Optional</sup> <a name="ignore_deletion_error" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.ignoreDeletionError"></a>

```python
ignore_deletion_error: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock#ignore_deletion_error GlacierVaultLock#ignore_deletion_error}.

---



