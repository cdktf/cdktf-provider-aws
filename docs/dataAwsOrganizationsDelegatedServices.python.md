# `dataAwsOrganizationsDelegatedServices` Submodule <a name="`dataAwsOrganizationsDelegatedServices` Submodule" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOrganizationsDelegatedServices <a name="DataAwsOrganizationsDelegatedServices" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/organizations_delegated_services aws_organizations_delegated_services}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_organizations_delegated_services

dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/organizations_delegated_services#account_id DataAwsOrganizationsDelegatedServices#account_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/organizations_delegated_services#id DataAwsOrganizationsDelegatedServices#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/organizations_delegated_services#account_id DataAwsOrganizationsDelegatedServices#account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/organizations_delegated_services#id DataAwsOrganizationsDelegatedServices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsOrganizationsDelegatedServices resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_organizations_delegated_services

dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_organizations_delegated_services

dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_organizations_delegated_services

dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_organizations_delegated_services

dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsOrganizationsDelegatedServices resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsOrganizationsDelegatedServices to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsOrganizationsDelegatedServices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/organizations_delegated_services#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsOrganizationsDelegatedServices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.delegatedServices">delegated_services</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList">DataAwsOrganizationsDelegatedServicesDelegatedServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `delegated_services`<sup>Required</sup> <a name="delegated_services" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.delegatedServices"></a>

```python
delegated_services: DataAwsOrganizationsDelegatedServicesDelegatedServicesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList">DataAwsOrganizationsDelegatedServicesDelegatedServicesList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOrganizationsDelegatedServicesConfig <a name="DataAwsOrganizationsDelegatedServicesConfig" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_organizations_delegated_services

dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/organizations_delegated_services#account_id DataAwsOrganizationsDelegatedServices#account_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/organizations_delegated_services#id DataAwsOrganizationsDelegatedServices#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/organizations_delegated_services#account_id DataAwsOrganizationsDelegatedServices#account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/organizations_delegated_services#id DataAwsOrganizationsDelegatedServices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsOrganizationsDelegatedServicesDelegatedServices <a name="DataAwsOrganizationsDelegatedServicesDelegatedServices" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServices.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_organizations_delegated_services

dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServices()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsOrganizationsDelegatedServicesDelegatedServicesList <a name="DataAwsOrganizationsDelegatedServicesDelegatedServicesList" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_organizations_delegated_services

dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference <a name="DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_organizations_delegated_services

dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.property.delegationEnabledDate">delegation_enabled_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.property.servicePrincipal">service_principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServices">DataAwsOrganizationsDelegatedServicesDelegatedServices</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delegation_enabled_date`<sup>Required</sup> <a name="delegation_enabled_date" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.property.delegationEnabledDate"></a>

```python
delegation_enabled_date: str
```

- *Type:* str

---

##### `service_principal`<sup>Required</sup> <a name="service_principal" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.property.servicePrincipal"></a>

```python
service_principal: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsOrganizationsDelegatedServicesDelegatedServices
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServices">DataAwsOrganizationsDelegatedServicesDelegatedServices</a>

---



