# `dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits` Submodule <a name="`dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits` Submodule" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits <a name="DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/organizations_organizational_unit_descendant_organizational_units aws_organizations_organizational_unit_descendant_organizational_units}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_organizations_organizational_unit_descendant_organizational_units

dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  parent_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.Initializer.parameter.parentId">parent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/organizations_organizational_unit_descendant_organizational_units#parent_id DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits#parent_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/organizations_organizational_unit_descendant_organizational_units#id DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.Initializer.parameter.parentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/organizations_organizational_unit_descendant_organizational_units#parent_id DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits#parent_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/organizations_organizational_unit_descendant_organizational_units#id DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_organizations_organizational_unit_descendant_organizational_units

dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_organizations_organizational_unit_descendant_organizational_units

dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_organizations_organizational_unit_descendant_organizational_units

dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_organizations_organizational_unit_descendant_organizational_units

dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/organizations_organizational_unit_descendant_organizational_units#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.property.children">children</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenList">DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.property.parentIdInput">parent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.property.parentId">parent_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `children`<sup>Required</sup> <a name="children" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.property.children"></a>

```python
children: DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenList">DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `parent_id_input`<sup>Optional</sup> <a name="parent_id_input" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.property.parentIdInput"></a>

```python
parent_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.property.parentId"></a>

```python
parent_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildren <a name="DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildren" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildren"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildren.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_organizations_organizational_unit_descendant_organizational_units

dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildren()
```


### DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsConfig <a name="DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsConfig" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_organizations_organizational_unit_descendant_organizational_units

dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  parent_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsConfig.property.parentId">parent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/organizations_organizational_unit_descendant_organizational_units#parent_id DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits#parent_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/organizations_organizational_unit_descendant_organizational_units#id DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsConfig.property.parentId"></a>

```python
parent_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/organizations_organizational_unit_descendant_organizational_units#parent_id DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits#parent_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/organizations_organizational_unit_descendant_organizational_units#id DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenList <a name="DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenList" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_organizations_organizational_unit_descendant_organizational_units

dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference <a name="DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_organizations_organizational_unit_descendant_organizational_units

dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildren">DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildren</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildrenOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildren
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildren">DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsChildren</a>

---



