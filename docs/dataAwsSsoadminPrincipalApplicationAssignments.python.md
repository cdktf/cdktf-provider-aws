# `dataAwsSsoadminPrincipalApplicationAssignments` Submodule <a name="`dataAwsSsoadminPrincipalApplicationAssignments` Submodule" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSsoadminPrincipalApplicationAssignments <a name="DataAwsSsoadminPrincipalApplicationAssignments" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/data-sources/ssoadmin_principal_application_assignments aws_ssoadmin_principal_application_assignments}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssoadmin_principal_application_assignments

dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_arn: str,
  principal_id: str,
  principal_type: str,
  application_assignments: typing.Union[IResolvable, typing.List[DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.Initializer.parameter.instanceArn">instance_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/data-sources/ssoadmin_principal_application_assignments#instance_arn DataAwsSsoadminPrincipalApplicationAssignments#instance_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.Initializer.parameter.principalId">principal_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/data-sources/ssoadmin_principal_application_assignments#principal_id DataAwsSsoadminPrincipalApplicationAssignments#principal_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.Initializer.parameter.principalType">principal_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/data-sources/ssoadmin_principal_application_assignments#principal_type DataAwsSsoadminPrincipalApplicationAssignments#principal_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.Initializer.parameter.applicationAssignments">application_assignments</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments">DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments</a>]]</code> | application_assignments block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.Initializer.parameter.instanceArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/data-sources/ssoadmin_principal_application_assignments#instance_arn DataAwsSsoadminPrincipalApplicationAssignments#instance_arn}.

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.Initializer.parameter.principalId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/data-sources/ssoadmin_principal_application_assignments#principal_id DataAwsSsoadminPrincipalApplicationAssignments#principal_id}.

---

##### `principal_type`<sup>Required</sup> <a name="principal_type" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.Initializer.parameter.principalType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/data-sources/ssoadmin_principal_application_assignments#principal_type DataAwsSsoadminPrincipalApplicationAssignments#principal_type}.

---

##### `application_assignments`<sup>Optional</sup> <a name="application_assignments" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.Initializer.parameter.applicationAssignments"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments">DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments</a>]]

application_assignments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/data-sources/ssoadmin_principal_application_assignments#application_assignments DataAwsSsoadminPrincipalApplicationAssignments#application_assignments}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.putApplicationAssignments">put_application_assignments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.resetApplicationAssignments">reset_application_assignments</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_application_assignments` <a name="put_application_assignments" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.putApplicationAssignments"></a>

```python
def put_application_assignments(
  value: typing.Union[IResolvable, typing.List[DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.putApplicationAssignments.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments">DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments</a>]]

---

##### `reset_application_assignments` <a name="reset_application_assignments" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.resetApplicationAssignments"></a>

```python
def reset_application_assignments() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsSsoadminPrincipalApplicationAssignments resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssoadmin_principal_application_assignments

dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssoadmin_principal_application_assignments

dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssoadmin_principal_application_assignments

dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssoadmin_principal_application_assignments

dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsSsoadminPrincipalApplicationAssignments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsSsoadminPrincipalApplicationAssignments to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsSsoadminPrincipalApplicationAssignments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/data-sources/ssoadmin_principal_application_assignments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsSsoadminPrincipalApplicationAssignments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.applicationAssignments">application_assignments</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList">DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.applicationAssignmentsInput">application_assignments_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments">DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.instanceArnInput">instance_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.principalIdInput">principal_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.principalTypeInput">principal_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.instanceArn">instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.principalType">principal_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `application_assignments`<sup>Required</sup> <a name="application_assignments" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.applicationAssignments"></a>

```python
application_assignments: DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList">DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `application_assignments_input`<sup>Optional</sup> <a name="application_assignments_input" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.applicationAssignmentsInput"></a>

```python
application_assignments_input: typing.Union[IResolvable, typing.List[DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments">DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments</a>]]

---

##### `instance_arn_input`<sup>Optional</sup> <a name="instance_arn_input" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.instanceArnInput"></a>

```python
instance_arn_input: str
```

- *Type:* str

---

##### `principal_id_input`<sup>Optional</sup> <a name="principal_id_input" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.principalIdInput"></a>

```python
principal_id_input: str
```

- *Type:* str

---

##### `principal_type_input`<sup>Optional</sup> <a name="principal_type_input" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.principalTypeInput"></a>

```python
principal_type_input: str
```

- *Type:* str

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `principal_type`<sup>Required</sup> <a name="principal_type" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments <a name="DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssoadmin_principal_application_assignments

dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments()
```


### DataAwsSsoadminPrincipalApplicationAssignmentsConfig <a name="DataAwsSsoadminPrincipalApplicationAssignmentsConfig" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssoadmin_principal_application_assignments

dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_arn: str,
  principal_id: str,
  principal_type: str,
  application_assignments: typing.Union[IResolvable, typing.List[DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig.property.instanceArn">instance_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/data-sources/ssoadmin_principal_application_assignments#instance_arn DataAwsSsoadminPrincipalApplicationAssignments#instance_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig.property.principalId">principal_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/data-sources/ssoadmin_principal_application_assignments#principal_id DataAwsSsoadminPrincipalApplicationAssignments#principal_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig.property.principalType">principal_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/data-sources/ssoadmin_principal_application_assignments#principal_type DataAwsSsoadminPrincipalApplicationAssignments#principal_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig.property.applicationAssignments">application_assignments</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments">DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments</a>]]</code> | application_assignments block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/data-sources/ssoadmin_principal_application_assignments#instance_arn DataAwsSsoadminPrincipalApplicationAssignments#instance_arn}.

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/data-sources/ssoadmin_principal_application_assignments#principal_id DataAwsSsoadminPrincipalApplicationAssignments#principal_id}.

---

##### `principal_type`<sup>Required</sup> <a name="principal_type" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/data-sources/ssoadmin_principal_application_assignments#principal_type DataAwsSsoadminPrincipalApplicationAssignments#principal_type}.

---

##### `application_assignments`<sup>Optional</sup> <a name="application_assignments" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig.property.applicationAssignments"></a>

```python
application_assignments: typing.Union[IResolvable, typing.List[DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments">DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments</a>]]

application_assignments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/data-sources/ssoadmin_principal_application_assignments#application_assignments DataAwsSsoadminPrincipalApplicationAssignments#application_assignments}

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList <a name="DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssoadmin_principal_application_assignments

dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments">DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments">DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments</a>]]

---


### DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference <a name="DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssoadmin_principal_application_assignments

dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.property.applicationArn">application_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.property.principalType">principal_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments">DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_arn`<sup>Required</sup> <a name="application_arn" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.property.applicationArn"></a>

```python
application_arn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `principal_type`<sup>Required</sup> <a name="principal_type" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments">DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments</a>]

---



