# `dataAwsMqBrokerEngineTypes` Submodule <a name="`dataAwsMqBrokerEngineTypes` Submodule" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsMqBrokerEngineTypes <a name="DataAwsMqBrokerEngineTypes" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/data-sources/mq_broker_engine_types aws_mq_broker_engine_types}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_mq_broker_engine_types

dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  engine_type: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.Initializer.parameter.engineType">engine_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/data-sources/mq_broker_engine_types#engine_type DataAwsMqBrokerEngineTypes#engine_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/data-sources/mq_broker_engine_types#id DataAwsMqBrokerEngineTypes#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `engine_type`<sup>Optional</sup> <a name="engine_type" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.Initializer.parameter.engineType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/data-sources/mq_broker_engine_types#engine_type DataAwsMqBrokerEngineTypes#engine_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/data-sources/mq_broker_engine_types#id DataAwsMqBrokerEngineTypes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.resetEngineType">reset_engine_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_engine_type` <a name="reset_engine_type" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.resetEngineType"></a>

```python
def reset_engine_type() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsMqBrokerEngineTypes resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_mq_broker_engine_types

dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_mq_broker_engine_types

dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_mq_broker_engine_types

dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_mq_broker_engine_types

dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsMqBrokerEngineTypes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsMqBrokerEngineTypes to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsMqBrokerEngineTypes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/data-sources/mq_broker_engine_types#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsMqBrokerEngineTypes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.brokerEngineTypes">broker_engine_types</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList">DataAwsMqBrokerEngineTypesBrokerEngineTypesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.engineTypeInput">engine_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.engineType">engine_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `broker_engine_types`<sup>Required</sup> <a name="broker_engine_types" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.brokerEngineTypes"></a>

```python
broker_engine_types: DataAwsMqBrokerEngineTypesBrokerEngineTypesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList">DataAwsMqBrokerEngineTypesBrokerEngineTypesList</a>

---

##### `engine_type_input`<sup>Optional</sup> <a name="engine_type_input" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.engineTypeInput"></a>

```python
engine_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `engine_type`<sup>Required</sup> <a name="engine_type" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.engineType"></a>

```python
engine_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsMqBrokerEngineTypesBrokerEngineTypes <a name="DataAwsMqBrokerEngineTypesBrokerEngineTypes" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypes.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_mq_broker_engine_types

dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypes()
```


### DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersions <a name="DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersions" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_mq_broker_engine_types

dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersions()
```


### DataAwsMqBrokerEngineTypesConfig <a name="DataAwsMqBrokerEngineTypesConfig" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_mq_broker_engine_types

dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  engine_type: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.engineType">engine_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/data-sources/mq_broker_engine_types#engine_type DataAwsMqBrokerEngineTypes#engine_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/data-sources/mq_broker_engine_types#id DataAwsMqBrokerEngineTypes#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `engine_type`<sup>Optional</sup> <a name="engine_type" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.engineType"></a>

```python
engine_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/data-sources/mq_broker_engine_types#engine_type DataAwsMqBrokerEngineTypes#engine_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/data-sources/mq_broker_engine_types#id DataAwsMqBrokerEngineTypes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList <a name="DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_mq_broker_engine_types

dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference <a name="DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_mq_broker_engine_types

dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersions">DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersions">DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersions</a>

---


### DataAwsMqBrokerEngineTypesBrokerEngineTypesList <a name="DataAwsMqBrokerEngineTypesBrokerEngineTypesList" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_mq_broker_engine_types

dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference <a name="DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_mq_broker_engine_types

dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.property.engineType">engine_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.property.engineVersions">engine_versions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList">DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypes">DataAwsMqBrokerEngineTypesBrokerEngineTypes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `engine_type`<sup>Required</sup> <a name="engine_type" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.property.engineType"></a>

```python
engine_type: str
```

- *Type:* str

---

##### `engine_versions`<sup>Required</sup> <a name="engine_versions" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.property.engineVersions"></a>

```python
engine_versions: DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList">DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsMqBrokerEngineTypesBrokerEngineTypes
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypes">DataAwsMqBrokerEngineTypesBrokerEngineTypes</a>

---



