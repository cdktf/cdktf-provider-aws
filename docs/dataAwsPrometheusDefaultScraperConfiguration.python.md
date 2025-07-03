# `dataAwsPrometheusDefaultScraperConfiguration` Submodule <a name="`dataAwsPrometheusDefaultScraperConfiguration` Submodule" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsPrometheusDefaultScraperConfiguration <a name="DataAwsPrometheusDefaultScraperConfiguration" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/prometheus_default_scraper_configuration aws_prometheus_default_scraper_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_prometheus_default_scraper_configuration

dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/prometheus_default_scraper_configuration#region DataAwsPrometheusDefaultScraperConfiguration#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsPrometheusDefaultScraperConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_prometheus_default_scraper_configuration

dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_prometheus_default_scraper_configuration

dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_prometheus_default_scraper_configuration

dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_prometheus_default_scraper_configuration

dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsPrometheusDefaultScraperConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsPrometheusDefaultScraperConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsPrometheusDefaultScraperConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/prometheus_default_scraper_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsPrometheusDefaultScraperConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.configuration">configuration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.configuration"></a>

```python
configuration: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsPrometheusDefaultScraperConfigurationConfig <a name="DataAwsPrometheusDefaultScraperConfigurationConfig" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_prometheus_default_scraper_configuration

dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfigurationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfigurationConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfigurationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfigurationConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/prometheus_default_scraper_configuration#region DataAwsPrometheusDefaultScraperConfiguration#region}

---



