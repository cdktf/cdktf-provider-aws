# `dxMacsecKeyAssociation` Submodule <a name="`dxMacsecKeyAssociation` Submodule" id="@cdktf/provider-aws.dxMacsecKeyAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DxMacsecKeyAssociation <a name="DxMacsecKeyAssociation" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_macsec_key_association aws_dx_macsec_key_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dx_macsec_key_association

dxMacsecKeyAssociation.DxMacsecKeyAssociation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  connection_id: str,
  cak: str = None,
  ckn: str = None,
  id: str = None,
  secret_arn: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.Initializer.parameter.connectionId">connection_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_macsec_key_association#connection_id DxMacsecKeyAssociation#connection_id}. |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.Initializer.parameter.cak">cak</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_macsec_key_association#cak DxMacsecKeyAssociation#cak}. |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.Initializer.parameter.ckn">ckn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_macsec_key_association#ckn DxMacsecKeyAssociation#ckn}. |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_macsec_key_association#id DxMacsecKeyAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.Initializer.parameter.secretArn">secret_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_macsec_key_association#secret_arn DxMacsecKeyAssociation#secret_arn}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.Initializer.parameter.connectionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_macsec_key_association#connection_id DxMacsecKeyAssociation#connection_id}.

---

##### `cak`<sup>Optional</sup> <a name="cak" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.Initializer.parameter.cak"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_macsec_key_association#cak DxMacsecKeyAssociation#cak}.

---

##### `ckn`<sup>Optional</sup> <a name="ckn" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.Initializer.parameter.ckn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_macsec_key_association#ckn DxMacsecKeyAssociation#ckn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_macsec_key_association#id DxMacsecKeyAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `secret_arn`<sup>Optional</sup> <a name="secret_arn" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.Initializer.parameter.secretArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_macsec_key_association#secret_arn DxMacsecKeyAssociation#secret_arn}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.resetCak">reset_cak</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.resetCkn">reset_ckn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.resetSecretArn">reset_secret_arn</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_cak` <a name="reset_cak" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.resetCak"></a>

```python
def reset_cak() -> None
```

##### `reset_ckn` <a name="reset_ckn" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.resetCkn"></a>

```python
def reset_ckn() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_secret_arn` <a name="reset_secret_arn" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.resetSecretArn"></a>

```python
def reset_secret_arn() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import dx_macsec_key_association

dxMacsecKeyAssociation.DxMacsecKeyAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import dx_macsec_key_association

dxMacsecKeyAssociation.DxMacsecKeyAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import dx_macsec_key_association

dxMacsecKeyAssociation.DxMacsecKeyAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.startOn">start_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.cakInput">cak_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.cknInput">ckn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.connectionIdInput">connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.secretArnInput">secret_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.cak">cak</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.ckn">ckn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.connectionId">connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `start_on`<sup>Required</sup> <a name="start_on" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.startOn"></a>

```python
start_on: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `cak_input`<sup>Optional</sup> <a name="cak_input" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.cakInput"></a>

```python
cak_input: str
```

- *Type:* str

---

##### `ckn_input`<sup>Optional</sup> <a name="ckn_input" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.cknInput"></a>

```python
ckn_input: str
```

- *Type:* str

---

##### `connection_id_input`<sup>Optional</sup> <a name="connection_id_input" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.connectionIdInput"></a>

```python
connection_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `secret_arn_input`<sup>Optional</sup> <a name="secret_arn_input" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.secretArnInput"></a>

```python
secret_arn_input: str
```

- *Type:* str

---

##### `cak`<sup>Required</sup> <a name="cak" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.cak"></a>

```python
cak: str
```

- *Type:* str

---

##### `ckn`<sup>Required</sup> <a name="ckn" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.ckn"></a>

```python
ckn: str
```

- *Type:* str

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DxMacsecKeyAssociationConfig <a name="DxMacsecKeyAssociationConfig" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dx_macsec_key_association

dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  connection_id: str,
  cak: str = None,
  ckn: str = None,
  id: str = None,
  secret_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.connectionId">connection_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_macsec_key_association#connection_id DxMacsecKeyAssociation#connection_id}. |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.cak">cak</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_macsec_key_association#cak DxMacsecKeyAssociation#cak}. |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.ckn">ckn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_macsec_key_association#ckn DxMacsecKeyAssociation#ckn}. |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_macsec_key_association#id DxMacsecKeyAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.secretArn">secret_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_macsec_key_association#secret_arn DxMacsecKeyAssociation#secret_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_macsec_key_association#connection_id DxMacsecKeyAssociation#connection_id}.

---

##### `cak`<sup>Optional</sup> <a name="cak" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.cak"></a>

```python
cak: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_macsec_key_association#cak DxMacsecKeyAssociation#cak}.

---

##### `ckn`<sup>Optional</sup> <a name="ckn" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.ckn"></a>

```python
ckn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_macsec_key_association#ckn DxMacsecKeyAssociation#ckn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_macsec_key_association#id DxMacsecKeyAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `secret_arn`<sup>Optional</sup> <a name="secret_arn" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_macsec_key_association#secret_arn DxMacsecKeyAssociation#secret_arn}.

---



