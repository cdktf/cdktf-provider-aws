# `dataAwsSsoadminApplicationProviders` Submodule <a name="`dataAwsSsoadminApplicationProviders` Submodule" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSsoadminApplicationProviders <a name="DataAwsSsoadminApplicationProviders" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/ssoadmin_application_providers aws_ssoadmin_application_providers}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssoadmin_application_providers

dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_providers: typing.Union[IResolvable, typing.List[DataAwsSsoadminApplicationProvidersApplicationProviders]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.Initializer.parameter.applicationProviders">application_providers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProviders">DataAwsSsoadminApplicationProvidersApplicationProviders</a>]]</code> | application_providers block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_providers`<sup>Optional</sup> <a name="application_providers" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.Initializer.parameter.applicationProviders"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProviders">DataAwsSsoadminApplicationProvidersApplicationProviders</a>]]

application_providers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/ssoadmin_application_providers#application_providers DataAwsSsoadminApplicationProviders#application_providers}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.putApplicationProviders">put_application_providers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.resetApplicationProviders">reset_application_providers</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_application_providers` <a name="put_application_providers" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.putApplicationProviders"></a>

```python
def put_application_providers(
  value: typing.Union[IResolvable, typing.List[DataAwsSsoadminApplicationProvidersApplicationProviders]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.putApplicationProviders.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProviders">DataAwsSsoadminApplicationProvidersApplicationProviders</a>]]

---

##### `reset_application_providers` <a name="reset_application_providers" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.resetApplicationProviders"></a>

```python
def reset_application_providers() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsSsoadminApplicationProviders resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssoadmin_application_providers

dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssoadmin_application_providers

dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssoadmin_application_providers

dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssoadmin_application_providers

dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsSsoadminApplicationProviders resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsSsoadminApplicationProviders to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsSsoadminApplicationProviders that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/ssoadmin_application_providers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsSsoadminApplicationProviders to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.applicationProviders">application_providers</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList">DataAwsSsoadminApplicationProvidersApplicationProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.applicationProvidersInput">application_providers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProviders">DataAwsSsoadminApplicationProvidersApplicationProviders</a>]]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `application_providers`<sup>Required</sup> <a name="application_providers" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.applicationProviders"></a>

```python
application_providers: DataAwsSsoadminApplicationProvidersApplicationProvidersList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList">DataAwsSsoadminApplicationProvidersApplicationProvidersList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `application_providers_input`<sup>Optional</sup> <a name="application_providers_input" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.applicationProvidersInput"></a>

```python
application_providers_input: typing.Union[IResolvable, typing.List[DataAwsSsoadminApplicationProvidersApplicationProviders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProviders">DataAwsSsoadminApplicationProvidersApplicationProviders</a>]]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSsoadminApplicationProvidersApplicationProviders <a name="DataAwsSsoadminApplicationProvidersApplicationProviders" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProviders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProviders.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssoadmin_application_providers

dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProviders(
  display_data: typing.Union[IResolvable, typing.List[DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProviders.property.displayData">display_data</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData">DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData</a>]]</code> | display_data block. |

---

##### `display_data`<sup>Optional</sup> <a name="display_data" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProviders.property.displayData"></a>

```python
display_data: typing.Union[IResolvable, typing.List[DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData">DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData</a>]]

display_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/ssoadmin_application_providers#display_data DataAwsSsoadminApplicationProviders#display_data}

---

### DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData <a name="DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssoadmin_application_providers

dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData()
```


### DataAwsSsoadminApplicationProvidersConfig <a name="DataAwsSsoadminApplicationProvidersConfig" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssoadmin_application_providers

dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_providers: typing.Union[IResolvable, typing.List[DataAwsSsoadminApplicationProvidersApplicationProviders]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.property.applicationProviders">application_providers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProviders">DataAwsSsoadminApplicationProvidersApplicationProviders</a>]]</code> | application_providers block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_providers`<sup>Optional</sup> <a name="application_providers" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.property.applicationProviders"></a>

```python
application_providers: typing.Union[IResolvable, typing.List[DataAwsSsoadminApplicationProvidersApplicationProviders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProviders">DataAwsSsoadminApplicationProvidersApplicationProviders</a>]]

application_providers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/ssoadmin_application_providers#application_providers DataAwsSsoadminApplicationProviders#application_providers}

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList <a name="DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssoadmin_application_providers

dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData">DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData">DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData</a>]]

---


### DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference <a name="DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssoadmin_application_providers

dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.property.iconUrl">icon_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData">DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `icon_url`<sup>Required</sup> <a name="icon_url" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.property.iconUrl"></a>

```python
icon_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData">DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData</a>]

---


### DataAwsSsoadminApplicationProvidersApplicationProvidersList <a name="DataAwsSsoadminApplicationProvidersApplicationProvidersList" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssoadmin_application_providers

dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProviders">DataAwsSsoadminApplicationProvidersApplicationProviders</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsSsoadminApplicationProvidersApplicationProviders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProviders">DataAwsSsoadminApplicationProvidersApplicationProviders</a>]]

---


### DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference <a name="DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssoadmin_application_providers

dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.putDisplayData">put_display_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.resetDisplayData">reset_display_data</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_display_data` <a name="put_display_data" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.putDisplayData"></a>

```python
def put_display_data(
  value: typing.Union[IResolvable, typing.List[DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.putDisplayData.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData">DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData</a>]]

---

##### `reset_display_data` <a name="reset_display_data" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.resetDisplayData"></a>

```python
def reset_display_data() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.property.applicationProviderArn">application_provider_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.property.displayData">display_data</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList">DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.property.federationProtocol">federation_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.property.displayDataInput">display_data_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData">DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProviders">DataAwsSsoadminApplicationProvidersApplicationProviders</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_provider_arn`<sup>Required</sup> <a name="application_provider_arn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.property.applicationProviderArn"></a>

```python
application_provider_arn: str
```

- *Type:* str

---

##### `display_data`<sup>Required</sup> <a name="display_data" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.property.displayData"></a>

```python
display_data: DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList">DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList</a>

---

##### `federation_protocol`<sup>Required</sup> <a name="federation_protocol" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.property.federationProtocol"></a>

```python
federation_protocol: str
```

- *Type:* str

---

##### `display_data_input`<sup>Optional</sup> <a name="display_data_input" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.property.displayDataInput"></a>

```python
display_data_input: typing.Union[IResolvable, typing.List[DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData">DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAwsSsoadminApplicationProvidersApplicationProviders]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProviders">DataAwsSsoadminApplicationProvidersApplicationProviders</a>]

---



