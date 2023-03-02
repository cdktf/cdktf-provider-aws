# `dxGatewayAssociationProposal` Submodule <a name="`dxGatewayAssociationProposal` Submodule" id="@cdktf/provider-aws.dxGatewayAssociationProposal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DxGatewayAssociationProposal <a name="DxGatewayAssociationProposal" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal aws_dx_gateway_association_proposal}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dx_gateway_association_proposal

dxGatewayAssociationProposal.DxGatewayAssociationProposal(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  associated_gateway_id: str,
  dx_gateway_id: str,
  dx_gateway_owner_account_id: str,
  allowed_prefixes: typing.List[str] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.associatedGatewayId">associated_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#associated_gateway_id DxGatewayAssociationProposal#associated_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.dxGatewayId">dx_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#dx_gateway_id DxGatewayAssociationProposal#dx_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.dxGatewayOwnerAccountId">dx_gateway_owner_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#dx_gateway_owner_account_id DxGatewayAssociationProposal#dx_gateway_owner_account_id}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.allowedPrefixes">allowed_prefixes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#allowed_prefixes DxGatewayAssociationProposal#allowed_prefixes}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#id DxGatewayAssociationProposal#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `associated_gateway_id`<sup>Required</sup> <a name="associated_gateway_id" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.associatedGatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#associated_gateway_id DxGatewayAssociationProposal#associated_gateway_id}.

---

##### `dx_gateway_id`<sup>Required</sup> <a name="dx_gateway_id" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.dxGatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#dx_gateway_id DxGatewayAssociationProposal#dx_gateway_id}.

---

##### `dx_gateway_owner_account_id`<sup>Required</sup> <a name="dx_gateway_owner_account_id" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.dxGatewayOwnerAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#dx_gateway_owner_account_id DxGatewayAssociationProposal#dx_gateway_owner_account_id}.

---

##### `allowed_prefixes`<sup>Optional</sup> <a name="allowed_prefixes" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.allowedPrefixes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#allowed_prefixes DxGatewayAssociationProposal#allowed_prefixes}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#id DxGatewayAssociationProposal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.resetAllowedPrefixes">reset_allowed_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_allowed_prefixes` <a name="reset_allowed_prefixes" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.resetAllowedPrefixes"></a>

```python
def reset_allowed_prefixes() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import dx_gateway_association_proposal

dxGatewayAssociationProposal.DxGatewayAssociationProposal.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import dx_gateway_association_proposal

dxGatewayAssociationProposal.DxGatewayAssociationProposal.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import dx_gateway_association_proposal

dxGatewayAssociationProposal.DxGatewayAssociationProposal.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.associatedGatewayOwnerAccountId">associated_gateway_owner_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.associatedGatewayType">associated_gateway_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.allowedPrefixesInput">allowed_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.associatedGatewayIdInput">associated_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dxGatewayIdInput">dx_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dxGatewayOwnerAccountIdInput">dx_gateway_owner_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.allowedPrefixes">allowed_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.associatedGatewayId">associated_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dxGatewayId">dx_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dxGatewayOwnerAccountId">dx_gateway_owner_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `associated_gateway_owner_account_id`<sup>Required</sup> <a name="associated_gateway_owner_account_id" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.associatedGatewayOwnerAccountId"></a>

```python
associated_gateway_owner_account_id: str
```

- *Type:* str

---

##### `associated_gateway_type`<sup>Required</sup> <a name="associated_gateway_type" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.associatedGatewayType"></a>

```python
associated_gateway_type: str
```

- *Type:* str

---

##### `allowed_prefixes_input`<sup>Optional</sup> <a name="allowed_prefixes_input" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.allowedPrefixesInput"></a>

```python
allowed_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `associated_gateway_id_input`<sup>Optional</sup> <a name="associated_gateway_id_input" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.associatedGatewayIdInput"></a>

```python
associated_gateway_id_input: str
```

- *Type:* str

---

##### `dx_gateway_id_input`<sup>Optional</sup> <a name="dx_gateway_id_input" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dxGatewayIdInput"></a>

```python
dx_gateway_id_input: str
```

- *Type:* str

---

##### `dx_gateway_owner_account_id_input`<sup>Optional</sup> <a name="dx_gateway_owner_account_id_input" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dxGatewayOwnerAccountIdInput"></a>

```python
dx_gateway_owner_account_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `allowed_prefixes`<sup>Required</sup> <a name="allowed_prefixes" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.allowedPrefixes"></a>

```python
allowed_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `associated_gateway_id`<sup>Required</sup> <a name="associated_gateway_id" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.associatedGatewayId"></a>

```python
associated_gateway_id: str
```

- *Type:* str

---

##### `dx_gateway_id`<sup>Required</sup> <a name="dx_gateway_id" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dxGatewayId"></a>

```python
dx_gateway_id: str
```

- *Type:* str

---

##### `dx_gateway_owner_account_id`<sup>Required</sup> <a name="dx_gateway_owner_account_id" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dxGatewayOwnerAccountId"></a>

```python
dx_gateway_owner_account_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DxGatewayAssociationProposalConfig <a name="DxGatewayAssociationProposalConfig" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dx_gateway_association_proposal

dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  associated_gateway_id: str,
  dx_gateway_id: str,
  dx_gateway_owner_account_id: str,
  allowed_prefixes: typing.List[str] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.associatedGatewayId">associated_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#associated_gateway_id DxGatewayAssociationProposal#associated_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.dxGatewayId">dx_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#dx_gateway_id DxGatewayAssociationProposal#dx_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.dxGatewayOwnerAccountId">dx_gateway_owner_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#dx_gateway_owner_account_id DxGatewayAssociationProposal#dx_gateway_owner_account_id}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.allowedPrefixes">allowed_prefixes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#allowed_prefixes DxGatewayAssociationProposal#allowed_prefixes}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#id DxGatewayAssociationProposal#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `associated_gateway_id`<sup>Required</sup> <a name="associated_gateway_id" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.associatedGatewayId"></a>

```python
associated_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#associated_gateway_id DxGatewayAssociationProposal#associated_gateway_id}.

---

##### `dx_gateway_id`<sup>Required</sup> <a name="dx_gateway_id" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.dxGatewayId"></a>

```python
dx_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#dx_gateway_id DxGatewayAssociationProposal#dx_gateway_id}.

---

##### `dx_gateway_owner_account_id`<sup>Required</sup> <a name="dx_gateway_owner_account_id" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.dxGatewayOwnerAccountId"></a>

```python
dx_gateway_owner_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#dx_gateway_owner_account_id DxGatewayAssociationProposal#dx_gateway_owner_account_id}.

---

##### `allowed_prefixes`<sup>Optional</sup> <a name="allowed_prefixes" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.allowedPrefixes"></a>

```python
allowed_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#allowed_prefixes DxGatewayAssociationProposal#allowed_prefixes}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#id DxGatewayAssociationProposal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



