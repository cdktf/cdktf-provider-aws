# `dxGatewayAssociation` Submodule <a name="`dxGatewayAssociation` Submodule" id="@cdktf/provider-aws.dxGatewayAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DxGatewayAssociation <a name="DxGatewayAssociation" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association aws_dx_gateway_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dx_gateway_association

dxGatewayAssociation.DxGatewayAssociation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dx_gateway_id: str,
  allowed_prefixes: typing.List[str] = None,
  associated_gateway_id: str = None,
  associated_gateway_owner_account_id: str = None,
  id: str = None,
  proposal_id: str = None,
  timeouts: DxGatewayAssociationTimeouts = None,
  vpn_gateway_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.Initializer.parameter.dxGatewayId">dx_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#dx_gateway_id DxGatewayAssociation#dx_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.Initializer.parameter.allowedPrefixes">allowed_prefixes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#allowed_prefixes DxGatewayAssociation#allowed_prefixes}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.Initializer.parameter.associatedGatewayId">associated_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#associated_gateway_id DxGatewayAssociation#associated_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.Initializer.parameter.associatedGatewayOwnerAccountId">associated_gateway_owner_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#associated_gateway_owner_account_id DxGatewayAssociation#associated_gateway_owner_account_id}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#id DxGatewayAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.Initializer.parameter.proposalId">proposal_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#proposal_id DxGatewayAssociation#proposal_id}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeouts">DxGatewayAssociationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.Initializer.parameter.vpnGatewayId">vpn_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#vpn_gateway_id DxGatewayAssociation#vpn_gateway_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dx_gateway_id`<sup>Required</sup> <a name="dx_gateway_id" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.Initializer.parameter.dxGatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#dx_gateway_id DxGatewayAssociation#dx_gateway_id}.

---

##### `allowed_prefixes`<sup>Optional</sup> <a name="allowed_prefixes" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.Initializer.parameter.allowedPrefixes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#allowed_prefixes DxGatewayAssociation#allowed_prefixes}.

---

##### `associated_gateway_id`<sup>Optional</sup> <a name="associated_gateway_id" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.Initializer.parameter.associatedGatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#associated_gateway_id DxGatewayAssociation#associated_gateway_id}.

---

##### `associated_gateway_owner_account_id`<sup>Optional</sup> <a name="associated_gateway_owner_account_id" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.Initializer.parameter.associatedGatewayOwnerAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#associated_gateway_owner_account_id DxGatewayAssociation#associated_gateway_owner_account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#id DxGatewayAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `proposal_id`<sup>Optional</sup> <a name="proposal_id" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.Initializer.parameter.proposalId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#proposal_id DxGatewayAssociation#proposal_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeouts">DxGatewayAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#timeouts DxGatewayAssociation#timeouts}

---

##### `vpn_gateway_id`<sup>Optional</sup> <a name="vpn_gateway_id" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.Initializer.parameter.vpnGatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#vpn_gateway_id DxGatewayAssociation#vpn_gateway_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.resetAllowedPrefixes">reset_allowed_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.resetAssociatedGatewayId">reset_associated_gateway_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.resetAssociatedGatewayOwnerAccountId">reset_associated_gateway_owner_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.resetProposalId">reset_proposal_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.resetVpnGatewayId">reset_vpn_gateway_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#create DxGatewayAssociation#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#delete DxGatewayAssociation#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#update DxGatewayAssociation#update}.

---

##### `reset_allowed_prefixes` <a name="reset_allowed_prefixes" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.resetAllowedPrefixes"></a>

```python
def reset_allowed_prefixes() -> None
```

##### `reset_associated_gateway_id` <a name="reset_associated_gateway_id" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.resetAssociatedGatewayId"></a>

```python
def reset_associated_gateway_id() -> None
```

##### `reset_associated_gateway_owner_account_id` <a name="reset_associated_gateway_owner_account_id" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.resetAssociatedGatewayOwnerAccountId"></a>

```python
def reset_associated_gateway_owner_account_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_proposal_id` <a name="reset_proposal_id" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.resetProposalId"></a>

```python
def reset_proposal_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vpn_gateway_id` <a name="reset_vpn_gateway_id" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.resetVpnGatewayId"></a>

```python
def reset_vpn_gateway_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import dx_gateway_association

dxGatewayAssociation.DxGatewayAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import dx_gateway_association

dxGatewayAssociation.DxGatewayAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import dx_gateway_association

dxGatewayAssociation.DxGatewayAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.associatedGatewayType">associated_gateway_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.dxGatewayAssociationId">dx_gateway_association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.dxGatewayOwnerAccountId">dx_gateway_owner_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference">DxGatewayAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.allowedPrefixesInput">allowed_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.associatedGatewayIdInput">associated_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.associatedGatewayOwnerAccountIdInput">associated_gateway_owner_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.dxGatewayIdInput">dx_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.proposalIdInput">proposal_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeouts">DxGatewayAssociationTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.vpnGatewayIdInput">vpn_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.allowedPrefixes">allowed_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.associatedGatewayId">associated_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.associatedGatewayOwnerAccountId">associated_gateway_owner_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.dxGatewayId">dx_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.proposalId">proposal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.vpnGatewayId">vpn_gateway_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `associated_gateway_type`<sup>Required</sup> <a name="associated_gateway_type" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.associatedGatewayType"></a>

```python
associated_gateway_type: str
```

- *Type:* str

---

##### `dx_gateway_association_id`<sup>Required</sup> <a name="dx_gateway_association_id" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.dxGatewayAssociationId"></a>

```python
dx_gateway_association_id: str
```

- *Type:* str

---

##### `dx_gateway_owner_account_id`<sup>Required</sup> <a name="dx_gateway_owner_account_id" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.dxGatewayOwnerAccountId"></a>

```python
dx_gateway_owner_account_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.timeouts"></a>

```python
timeouts: DxGatewayAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference">DxGatewayAssociationTimeoutsOutputReference</a>

---

##### `allowed_prefixes_input`<sup>Optional</sup> <a name="allowed_prefixes_input" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.allowedPrefixesInput"></a>

```python
allowed_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `associated_gateway_id_input`<sup>Optional</sup> <a name="associated_gateway_id_input" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.associatedGatewayIdInput"></a>

```python
associated_gateway_id_input: str
```

- *Type:* str

---

##### `associated_gateway_owner_account_id_input`<sup>Optional</sup> <a name="associated_gateway_owner_account_id_input" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.associatedGatewayOwnerAccountIdInput"></a>

```python
associated_gateway_owner_account_id_input: str
```

- *Type:* str

---

##### `dx_gateway_id_input`<sup>Optional</sup> <a name="dx_gateway_id_input" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.dxGatewayIdInput"></a>

```python
dx_gateway_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `proposal_id_input`<sup>Optional</sup> <a name="proposal_id_input" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.proposalIdInput"></a>

```python
proposal_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DxGatewayAssociationTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeouts">DxGatewayAssociationTimeouts</a>, cdktf.IResolvable]

---

##### `vpn_gateway_id_input`<sup>Optional</sup> <a name="vpn_gateway_id_input" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.vpnGatewayIdInput"></a>

```python
vpn_gateway_id_input: str
```

- *Type:* str

---

##### `allowed_prefixes`<sup>Required</sup> <a name="allowed_prefixes" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.allowedPrefixes"></a>

```python
allowed_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `associated_gateway_id`<sup>Required</sup> <a name="associated_gateway_id" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.associatedGatewayId"></a>

```python
associated_gateway_id: str
```

- *Type:* str

---

##### `associated_gateway_owner_account_id`<sup>Required</sup> <a name="associated_gateway_owner_account_id" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.associatedGatewayOwnerAccountId"></a>

```python
associated_gateway_owner_account_id: str
```

- *Type:* str

---

##### `dx_gateway_id`<sup>Required</sup> <a name="dx_gateway_id" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.dxGatewayId"></a>

```python
dx_gateway_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `proposal_id`<sup>Required</sup> <a name="proposal_id" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.proposalId"></a>

```python
proposal_id: str
```

- *Type:* str

---

##### `vpn_gateway_id`<sup>Required</sup> <a name="vpn_gateway_id" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.vpnGatewayId"></a>

```python
vpn_gateway_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DxGatewayAssociationConfig <a name="DxGatewayAssociationConfig" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dx_gateway_association

dxGatewayAssociation.DxGatewayAssociationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dx_gateway_id: str,
  allowed_prefixes: typing.List[str] = None,
  associated_gateway_id: str = None,
  associated_gateway_owner_account_id: str = None,
  id: str = None,
  proposal_id: str = None,
  timeouts: DxGatewayAssociationTimeouts = None,
  vpn_gateway_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.dxGatewayId">dx_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#dx_gateway_id DxGatewayAssociation#dx_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.allowedPrefixes">allowed_prefixes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#allowed_prefixes DxGatewayAssociation#allowed_prefixes}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.associatedGatewayId">associated_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#associated_gateway_id DxGatewayAssociation#associated_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.associatedGatewayOwnerAccountId">associated_gateway_owner_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#associated_gateway_owner_account_id DxGatewayAssociation#associated_gateway_owner_account_id}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#id DxGatewayAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.proposalId">proposal_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#proposal_id DxGatewayAssociation#proposal_id}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeouts">DxGatewayAssociationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.vpnGatewayId">vpn_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#vpn_gateway_id DxGatewayAssociation#vpn_gateway_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dx_gateway_id`<sup>Required</sup> <a name="dx_gateway_id" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.dxGatewayId"></a>

```python
dx_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#dx_gateway_id DxGatewayAssociation#dx_gateway_id}.

---

##### `allowed_prefixes`<sup>Optional</sup> <a name="allowed_prefixes" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.allowedPrefixes"></a>

```python
allowed_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#allowed_prefixes DxGatewayAssociation#allowed_prefixes}.

---

##### `associated_gateway_id`<sup>Optional</sup> <a name="associated_gateway_id" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.associatedGatewayId"></a>

```python
associated_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#associated_gateway_id DxGatewayAssociation#associated_gateway_id}.

---

##### `associated_gateway_owner_account_id`<sup>Optional</sup> <a name="associated_gateway_owner_account_id" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.associatedGatewayOwnerAccountId"></a>

```python
associated_gateway_owner_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#associated_gateway_owner_account_id DxGatewayAssociation#associated_gateway_owner_account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#id DxGatewayAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `proposal_id`<sup>Optional</sup> <a name="proposal_id" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.proposalId"></a>

```python
proposal_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#proposal_id DxGatewayAssociation#proposal_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.timeouts"></a>

```python
timeouts: DxGatewayAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeouts">DxGatewayAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#timeouts DxGatewayAssociation#timeouts}

---

##### `vpn_gateway_id`<sup>Optional</sup> <a name="vpn_gateway_id" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.vpnGatewayId"></a>

```python
vpn_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#vpn_gateway_id DxGatewayAssociation#vpn_gateway_id}.

---

### DxGatewayAssociationTimeouts <a name="DxGatewayAssociationTimeouts" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dx_gateway_association

dxGatewayAssociation.DxGatewayAssociationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#create DxGatewayAssociation#create}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#delete DxGatewayAssociation#delete}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#update DxGatewayAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#create DxGatewayAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#delete DxGatewayAssociation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#update DxGatewayAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DxGatewayAssociationTimeoutsOutputReference <a name="DxGatewayAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dx_gateway_association

dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeouts">DxGatewayAssociationTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DxGatewayAssociationTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeouts">DxGatewayAssociationTimeouts</a>, cdktf.IResolvable]

---



