# `kmsGrant` Submodule <a name="`kmsGrant` Submodule" id="@cdktf/provider-aws.kmsGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsGrant <a name="KmsGrant" id="@cdktf/provider-aws.kmsGrant.KmsGrant"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/kms_grant aws_kms_grant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kms_grant

kmsGrant.KmsGrant(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  grantee_principal: str,
  key_id: str,
  operations: typing.List[str],
  constraints: typing.Union[IResolvable, typing.List[KmsGrantConstraints]] = None,
  grant_creation_tokens: typing.List[str] = None,
  id: str = None,
  name: str = None,
  retire_on_delete: typing.Union[bool, IResolvable] = None,
  retiring_principal: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer.parameter.granteePrincipal">grantee_principal</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#grantee_principal KmsGrant#grantee_principal}. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer.parameter.keyId">key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#key_id KmsGrant#key_id}. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer.parameter.operations">operations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#operations KmsGrant#operations}. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer.parameter.constraints">constraints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraints">KmsGrantConstraints</a>]]</code> | constraints block. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer.parameter.grantCreationTokens">grant_creation_tokens</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#grant_creation_tokens KmsGrant#grant_creation_tokens}. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#id KmsGrant#id}. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#name KmsGrant#name}. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer.parameter.retireOnDelete">retire_on_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#retire_on_delete KmsGrant#retire_on_delete}. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer.parameter.retiringPrincipal">retiring_principal</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#retiring_principal KmsGrant#retiring_principal}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `grantee_principal`<sup>Required</sup> <a name="grantee_principal" id="@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer.parameter.granteePrincipal"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#grantee_principal KmsGrant#grantee_principal}.

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer.parameter.keyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#key_id KmsGrant#key_id}.

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer.parameter.operations"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#operations KmsGrant#operations}.

---

##### `constraints`<sup>Optional</sup> <a name="constraints" id="@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer.parameter.constraints"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraints">KmsGrantConstraints</a>]]

constraints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#constraints KmsGrant#constraints}

---

##### `grant_creation_tokens`<sup>Optional</sup> <a name="grant_creation_tokens" id="@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer.parameter.grantCreationTokens"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#grant_creation_tokens KmsGrant#grant_creation_tokens}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#id KmsGrant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#name KmsGrant#name}.

---

##### `retire_on_delete`<sup>Optional</sup> <a name="retire_on_delete" id="@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer.parameter.retireOnDelete"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#retire_on_delete KmsGrant#retire_on_delete}.

---

##### `retiring_principal`<sup>Optional</sup> <a name="retiring_principal" id="@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer.parameter.retiringPrincipal"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#retiring_principal KmsGrant#retiring_principal}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.putConstraints">put_constraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.resetConstraints">reset_constraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.resetGrantCreationTokens">reset_grant_creation_tokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.resetRetireOnDelete">reset_retire_on_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.resetRetiringPrincipal">reset_retiring_principal</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kmsGrant.KmsGrant.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.kmsGrant.KmsGrant.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.kmsGrant.KmsGrant.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kmsGrant.KmsGrant.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.kmsGrant.KmsGrant.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.kmsGrant.KmsGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.kmsGrant.KmsGrant.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.kmsGrant.KmsGrant.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.kmsGrant.KmsGrant.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_constraints` <a name="put_constraints" id="@cdktf/provider-aws.kmsGrant.KmsGrant.putConstraints"></a>

```python
def put_constraints(
  value: typing.Union[IResolvable, typing.List[KmsGrantConstraints]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kmsGrant.KmsGrant.putConstraints.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraints">KmsGrantConstraints</a>]]

---

##### `reset_constraints` <a name="reset_constraints" id="@cdktf/provider-aws.kmsGrant.KmsGrant.resetConstraints"></a>

```python
def reset_constraints() -> None
```

##### `reset_grant_creation_tokens` <a name="reset_grant_creation_tokens" id="@cdktf/provider-aws.kmsGrant.KmsGrant.resetGrantCreationTokens"></a>

```python
def reset_grant_creation_tokens() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.kmsGrant.KmsGrant.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.kmsGrant.KmsGrant.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_retire_on_delete` <a name="reset_retire_on_delete" id="@cdktf/provider-aws.kmsGrant.KmsGrant.resetRetireOnDelete"></a>

```python
def reset_retire_on_delete() -> None
```

##### `reset_retiring_principal` <a name="reset_retiring_principal" id="@cdktf/provider-aws.kmsGrant.KmsGrant.resetRetiringPrincipal"></a>

```python
def reset_retiring_principal() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.kmsGrant.KmsGrant.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import kms_grant

kmsGrant.KmsGrant.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kmsGrant.KmsGrant.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.kmsGrant.KmsGrant.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import kms_grant

kmsGrant.KmsGrant.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kmsGrant.KmsGrant.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.kmsGrant.KmsGrant.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import kms_grant

kmsGrant.KmsGrant.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kmsGrant.KmsGrant.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.constraints">constraints</a></code> | <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList">KmsGrantConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.grantId">grant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.grantToken">grant_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.constraintsInput">constraints_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraints">KmsGrantConstraints</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.grantCreationTokensInput">grant_creation_tokens_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.granteePrincipalInput">grantee_principal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.keyIdInput">key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.operationsInput">operations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.retireOnDeleteInput">retire_on_delete_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.retiringPrincipalInput">retiring_principal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.grantCreationTokens">grant_creation_tokens</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.granteePrincipal">grantee_principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.operations">operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.retireOnDelete">retire_on_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.retiringPrincipal">retiring_principal</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `constraints`<sup>Required</sup> <a name="constraints" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.constraints"></a>

```python
constraints: KmsGrantConstraintsList
```

- *Type:* <a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList">KmsGrantConstraintsList</a>

---

##### `grant_id`<sup>Required</sup> <a name="grant_id" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.grantId"></a>

```python
grant_id: str
```

- *Type:* str

---

##### `grant_token`<sup>Required</sup> <a name="grant_token" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.grantToken"></a>

```python
grant_token: str
```

- *Type:* str

---

##### `constraints_input`<sup>Optional</sup> <a name="constraints_input" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.constraintsInput"></a>

```python
constraints_input: typing.Union[IResolvable, typing.List[KmsGrantConstraints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraints">KmsGrantConstraints</a>]]

---

##### `grant_creation_tokens_input`<sup>Optional</sup> <a name="grant_creation_tokens_input" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.grantCreationTokensInput"></a>

```python
grant_creation_tokens_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `grantee_principal_input`<sup>Optional</sup> <a name="grantee_principal_input" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.granteePrincipalInput"></a>

```python
grantee_principal_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_id_input`<sup>Optional</sup> <a name="key_id_input" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.keyIdInput"></a>

```python
key_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `operations_input`<sup>Optional</sup> <a name="operations_input" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.operationsInput"></a>

```python
operations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `retire_on_delete_input`<sup>Optional</sup> <a name="retire_on_delete_input" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.retireOnDeleteInput"></a>

```python
retire_on_delete_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retiring_principal_input`<sup>Optional</sup> <a name="retiring_principal_input" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.retiringPrincipalInput"></a>

```python
retiring_principal_input: str
```

- *Type:* str

---

##### `grant_creation_tokens`<sup>Required</sup> <a name="grant_creation_tokens" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.grantCreationTokens"></a>

```python
grant_creation_tokens: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `grantee_principal`<sup>Required</sup> <a name="grantee_principal" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.granteePrincipal"></a>

```python
grantee_principal: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.operations"></a>

```python
operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `retire_on_delete`<sup>Required</sup> <a name="retire_on_delete" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.retireOnDelete"></a>

```python
retire_on_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retiring_principal`<sup>Required</sup> <a name="retiring_principal" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.retiringPrincipal"></a>

```python
retiring_principal: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KmsGrantConfig <a name="KmsGrantConfig" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kms_grant

kmsGrant.KmsGrantConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  grantee_principal: str,
  key_id: str,
  operations: typing.List[str],
  constraints: typing.Union[IResolvable, typing.List[KmsGrantConstraints]] = None,
  grant_creation_tokens: typing.List[str] = None,
  id: str = None,
  name: str = None,
  retire_on_delete: typing.Union[bool, IResolvable] = None,
  retiring_principal: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.granteePrincipal">grantee_principal</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#grantee_principal KmsGrant#grantee_principal}. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.keyId">key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#key_id KmsGrant#key_id}. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.operations">operations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#operations KmsGrant#operations}. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.constraints">constraints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraints">KmsGrantConstraints</a>]]</code> | constraints block. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.grantCreationTokens">grant_creation_tokens</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#grant_creation_tokens KmsGrant#grant_creation_tokens}. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#id KmsGrant#id}. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#name KmsGrant#name}. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.retireOnDelete">retire_on_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#retire_on_delete KmsGrant#retire_on_delete}. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.retiringPrincipal">retiring_principal</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#retiring_principal KmsGrant#retiring_principal}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `grantee_principal`<sup>Required</sup> <a name="grantee_principal" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.granteePrincipal"></a>

```python
grantee_principal: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#grantee_principal KmsGrant#grantee_principal}.

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#key_id KmsGrant#key_id}.

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.operations"></a>

```python
operations: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#operations KmsGrant#operations}.

---

##### `constraints`<sup>Optional</sup> <a name="constraints" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.constraints"></a>

```python
constraints: typing.Union[IResolvable, typing.List[KmsGrantConstraints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraints">KmsGrantConstraints</a>]]

constraints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#constraints KmsGrant#constraints}

---

##### `grant_creation_tokens`<sup>Optional</sup> <a name="grant_creation_tokens" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.grantCreationTokens"></a>

```python
grant_creation_tokens: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#grant_creation_tokens KmsGrant#grant_creation_tokens}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#id KmsGrant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#name KmsGrant#name}.

---

##### `retire_on_delete`<sup>Optional</sup> <a name="retire_on_delete" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.retireOnDelete"></a>

```python
retire_on_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#retire_on_delete KmsGrant#retire_on_delete}.

---

##### `retiring_principal`<sup>Optional</sup> <a name="retiring_principal" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.retiringPrincipal"></a>

```python
retiring_principal: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#retiring_principal KmsGrant#retiring_principal}.

---

### KmsGrantConstraints <a name="KmsGrantConstraints" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraints.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kms_grant

kmsGrant.KmsGrantConstraints(
  encryption_context_equals: typing.Mapping[str] = None,
  encryption_context_subset: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraints.property.encryptionContextEquals">encryption_context_equals</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#encryption_context_equals KmsGrant#encryption_context_equals}. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraints.property.encryptionContextSubset">encryption_context_subset</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#encryption_context_subset KmsGrant#encryption_context_subset}. |

---

##### `encryption_context_equals`<sup>Optional</sup> <a name="encryption_context_equals" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraints.property.encryptionContextEquals"></a>

```python
encryption_context_equals: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#encryption_context_equals KmsGrant#encryption_context_equals}.

---

##### `encryption_context_subset`<sup>Optional</sup> <a name="encryption_context_subset" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraints.property.encryptionContextSubset"></a>

```python
encryption_context_subset: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#encryption_context_subset KmsGrant#encryption_context_subset}.

---

## Classes <a name="Classes" id="Classes"></a>

### KmsGrantConstraintsList <a name="KmsGrantConstraintsList" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kms_grant

kmsGrant.KmsGrantConstraintsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KmsGrantConstraintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraints">KmsGrantConstraints</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[KmsGrantConstraints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraints">KmsGrantConstraints</a>]]

---


### KmsGrantConstraintsOutputReference <a name="KmsGrantConstraintsOutputReference" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kms_grant

kmsGrant.KmsGrantConstraintsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.resetEncryptionContextEquals">reset_encryption_context_equals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.resetEncryptionContextSubset">reset_encryption_context_subset</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_encryption_context_equals` <a name="reset_encryption_context_equals" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.resetEncryptionContextEquals"></a>

```python
def reset_encryption_context_equals() -> None
```

##### `reset_encryption_context_subset` <a name="reset_encryption_context_subset" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.resetEncryptionContextSubset"></a>

```python
def reset_encryption_context_subset() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.property.encryptionContextEqualsInput">encryption_context_equals_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.property.encryptionContextSubsetInput">encryption_context_subset_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.property.encryptionContextEquals">encryption_context_equals</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.property.encryptionContextSubset">encryption_context_subset</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraints">KmsGrantConstraints</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_context_equals_input`<sup>Optional</sup> <a name="encryption_context_equals_input" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.property.encryptionContextEqualsInput"></a>

```python
encryption_context_equals_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `encryption_context_subset_input`<sup>Optional</sup> <a name="encryption_context_subset_input" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.property.encryptionContextSubsetInput"></a>

```python
encryption_context_subset_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `encryption_context_equals`<sup>Required</sup> <a name="encryption_context_equals" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.property.encryptionContextEquals"></a>

```python
encryption_context_equals: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `encryption_context_subset`<sup>Required</sup> <a name="encryption_context_subset" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.property.encryptionContextSubset"></a>

```python
encryption_context_subset: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[KmsGrantConstraints, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraints">KmsGrantConstraints</a>, cdktf.IResolvable]

---



