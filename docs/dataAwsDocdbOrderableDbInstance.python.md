# `dataAwsDocdbOrderableDbInstance` Submodule <a name="`dataAwsDocdbOrderableDbInstance` Submodule" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsDocdbOrderableDbInstance <a name="DataAwsDocdbOrderableDbInstance" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance aws_docdb_orderable_db_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_docdb_orderable_db_instance

dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  engine: str = None,
  engine_version: str = None,
  id: str = None,
  instance_class: str = None,
  license_model: str = None,
  preferred_instance_classes: typing.List[str] = None,
  vpc: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.engine">engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#engine DataAwsDocdbOrderableDbInstance#engine}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.engineVersion">engine_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#engine_version DataAwsDocdbOrderableDbInstance#engine_version}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#id DataAwsDocdbOrderableDbInstance#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.instanceClass">instance_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#instance_class DataAwsDocdbOrderableDbInstance#instance_class}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.licenseModel">license_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#license_model DataAwsDocdbOrderableDbInstance#license_model}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.preferredInstanceClasses">preferred_instance_classes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#preferred_instance_classes DataAwsDocdbOrderableDbInstance#preferred_instance_classes}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.vpc">vpc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#vpc DataAwsDocdbOrderableDbInstance#vpc}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.engine"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#engine DataAwsDocdbOrderableDbInstance#engine}.

---

##### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.engineVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#engine_version DataAwsDocdbOrderableDbInstance#engine_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#id DataAwsDocdbOrderableDbInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_class`<sup>Optional</sup> <a name="instance_class" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.instanceClass"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#instance_class DataAwsDocdbOrderableDbInstance#instance_class}.

---

##### `license_model`<sup>Optional</sup> <a name="license_model" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.licenseModel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#license_model DataAwsDocdbOrderableDbInstance#license_model}.

---

##### `preferred_instance_classes`<sup>Optional</sup> <a name="preferred_instance_classes" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.preferredInstanceClasses"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#preferred_instance_classes DataAwsDocdbOrderableDbInstance#preferred_instance_classes}.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.vpc"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#vpc DataAwsDocdbOrderableDbInstance#vpc}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetEngine">reset_engine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetEngineVersion">reset_engine_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetInstanceClass">reset_instance_class</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetLicenseModel">reset_license_model</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetPreferredInstanceClasses">reset_preferred_instance_classes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetVpc">reset_vpc</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_engine` <a name="reset_engine" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetEngine"></a>

```python
def reset_engine() -> None
```

##### `reset_engine_version` <a name="reset_engine_version" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetEngineVersion"></a>

```python
def reset_engine_version() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instance_class` <a name="reset_instance_class" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetInstanceClass"></a>

```python
def reset_instance_class() -> None
```

##### `reset_license_model` <a name="reset_license_model" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetLicenseModel"></a>

```python
def reset_license_model() -> None
```

##### `reset_preferred_instance_classes` <a name="reset_preferred_instance_classes" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetPreferredInstanceClasses"></a>

```python
def reset_preferred_instance_classes() -> None
```

##### `reset_vpc` <a name="reset_vpc" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetVpc"></a>

```python
def reset_vpc() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_docdb_orderable_db_instance

dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_docdb_orderable_db_instance

dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_docdb_orderable_db_instance

dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.engineInput">engine_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.engineVersionInput">engine_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.instanceClassInput">instance_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.licenseModelInput">license_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.preferredInstanceClassesInput">preferred_instance_classes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.vpcInput">vpc_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.engineVersion">engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.instanceClass">instance_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.preferredInstanceClasses">preferred_instance_classes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.vpc">vpc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `availability_zones`<sup>Required</sup> <a name="availability_zones" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.availabilityZones"></a>

```python
availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `engine_input`<sup>Optional</sup> <a name="engine_input" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.engineInput"></a>

```python
engine_input: str
```

- *Type:* str

---

##### `engine_version_input`<sup>Optional</sup> <a name="engine_version_input" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.engineVersionInput"></a>

```python
engine_version_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_class_input`<sup>Optional</sup> <a name="instance_class_input" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.instanceClassInput"></a>

```python
instance_class_input: str
```

- *Type:* str

---

##### `license_model_input`<sup>Optional</sup> <a name="license_model_input" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.licenseModelInput"></a>

```python
license_model_input: str
```

- *Type:* str

---

##### `preferred_instance_classes_input`<sup>Optional</sup> <a name="preferred_instance_classes_input" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.preferredInstanceClassesInput"></a>

```python
preferred_instance_classes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_input`<sup>Optional</sup> <a name="vpc_input" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.vpcInput"></a>

```python
vpc_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_class`<sup>Required</sup> <a name="instance_class" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.instanceClass"></a>

```python
instance_class: str
```

- *Type:* str

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `preferred_instance_classes`<sup>Required</sup> <a name="preferred_instance_classes" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.preferredInstanceClasses"></a>

```python
preferred_instance_classes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.vpc"></a>

```python
vpc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsDocdbOrderableDbInstanceConfig <a name="DataAwsDocdbOrderableDbInstanceConfig" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_docdb_orderable_db_instance

dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  engine: str = None,
  engine_version: str = None,
  id: str = None,
  instance_class: str = None,
  license_model: str = None,
  preferred_instance_classes: typing.List[str] = None,
  vpc: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.engine">engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#engine DataAwsDocdbOrderableDbInstance#engine}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.engineVersion">engine_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#engine_version DataAwsDocdbOrderableDbInstance#engine_version}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#id DataAwsDocdbOrderableDbInstance#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.instanceClass">instance_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#instance_class DataAwsDocdbOrderableDbInstance#instance_class}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.licenseModel">license_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#license_model DataAwsDocdbOrderableDbInstance#license_model}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.preferredInstanceClasses">preferred_instance_classes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#preferred_instance_classes DataAwsDocdbOrderableDbInstance#preferred_instance_classes}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.vpc">vpc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#vpc DataAwsDocdbOrderableDbInstance#vpc}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.engine"></a>

```python
engine: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#engine DataAwsDocdbOrderableDbInstance#engine}.

---

##### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#engine_version DataAwsDocdbOrderableDbInstance#engine_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#id DataAwsDocdbOrderableDbInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_class`<sup>Optional</sup> <a name="instance_class" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.instanceClass"></a>

```python
instance_class: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#instance_class DataAwsDocdbOrderableDbInstance#instance_class}.

---

##### `license_model`<sup>Optional</sup> <a name="license_model" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#license_model DataAwsDocdbOrderableDbInstance#license_model}.

---

##### `preferred_instance_classes`<sup>Optional</sup> <a name="preferred_instance_classes" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.preferredInstanceClasses"></a>

```python
preferred_instance_classes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#preferred_instance_classes DataAwsDocdbOrderableDbInstance#preferred_instance_classes}.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.vpc"></a>

```python
vpc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#vpc DataAwsDocdbOrderableDbInstance#vpc}.

---



