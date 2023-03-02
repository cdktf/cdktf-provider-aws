# `dataAwsRdsReservedInstanceOffering` Submodule <a name="`dataAwsRdsReservedInstanceOffering` Submodule" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRdsReservedInstanceOffering <a name="DataAwsRdsReservedInstanceOffering" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering aws_rds_reserved_instance_offering}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_rds_reserved_instance_offering

dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  db_instance_class: str,
  duration: typing.Union[int, float],
  multi_az: typing.Union[bool, IResolvable],
  offering_type: str,
  product_description: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.dbInstanceClass">db_instance_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#db_instance_class DataAwsRdsReservedInstanceOffering#db_instance_class}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.duration">duration</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#duration DataAwsRdsReservedInstanceOffering#duration}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.multiAz">multi_az</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#multi_az DataAwsRdsReservedInstanceOffering#multi_az}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.offeringType">offering_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#offering_type DataAwsRdsReservedInstanceOffering#offering_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.productDescription">product_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#product_description DataAwsRdsReservedInstanceOffering#product_description}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#id DataAwsRdsReservedInstanceOffering#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `db_instance_class`<sup>Required</sup> <a name="db_instance_class" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.dbInstanceClass"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#db_instance_class DataAwsRdsReservedInstanceOffering#db_instance_class}.

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.duration"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#duration DataAwsRdsReservedInstanceOffering#duration}.

---

##### `multi_az`<sup>Required</sup> <a name="multi_az" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.multiAz"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#multi_az DataAwsRdsReservedInstanceOffering#multi_az}.

---

##### `offering_type`<sup>Required</sup> <a name="offering_type" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.offeringType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#offering_type DataAwsRdsReservedInstanceOffering#offering_type}.

---

##### `product_description`<sup>Required</sup> <a name="product_description" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.productDescription"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#product_description DataAwsRdsReservedInstanceOffering#product_description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#id DataAwsRdsReservedInstanceOffering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_rds_reserved_instance_offering

dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_rds_reserved_instance_offering

dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_rds_reserved_instance_offering

dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.currencyCode">currency_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.fixedPrice">fixed_price</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.offeringId">offering_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.dbInstanceClassInput">db_instance_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.durationInput">duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.multiAzInput">multi_az_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.offeringTypeInput">offering_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.productDescriptionInput">product_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.dbInstanceClass">db_instance_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.duration">duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.multiAz">multi_az</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.offeringType">offering_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.productDescription">product_description</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `currency_code`<sup>Required</sup> <a name="currency_code" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.currencyCode"></a>

```python
currency_code: str
```

- *Type:* str

---

##### `fixed_price`<sup>Required</sup> <a name="fixed_price" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.fixedPrice"></a>

```python
fixed_price: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `offering_id`<sup>Required</sup> <a name="offering_id" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.offeringId"></a>

```python
offering_id: str
```

- *Type:* str

---

##### `db_instance_class_input`<sup>Optional</sup> <a name="db_instance_class_input" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.dbInstanceClassInput"></a>

```python
db_instance_class_input: str
```

- *Type:* str

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.durationInput"></a>

```python
duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `multi_az_input`<sup>Optional</sup> <a name="multi_az_input" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.multiAzInput"></a>

```python
multi_az_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `offering_type_input`<sup>Optional</sup> <a name="offering_type_input" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.offeringTypeInput"></a>

```python
offering_type_input: str
```

- *Type:* str

---

##### `product_description_input`<sup>Optional</sup> <a name="product_description_input" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.productDescriptionInput"></a>

```python
product_description_input: str
```

- *Type:* str

---

##### `db_instance_class`<sup>Required</sup> <a name="db_instance_class" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.dbInstanceClass"></a>

```python
db_instance_class: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.duration"></a>

```python
duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `multi_az`<sup>Required</sup> <a name="multi_az" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.multiAz"></a>

```python
multi_az: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `offering_type`<sup>Required</sup> <a name="offering_type" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.offeringType"></a>

```python
offering_type: str
```

- *Type:* str

---

##### `product_description`<sup>Required</sup> <a name="product_description" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.productDescription"></a>

```python
product_description: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRdsReservedInstanceOfferingConfig <a name="DataAwsRdsReservedInstanceOfferingConfig" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_rds_reserved_instance_offering

dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  db_instance_class: str,
  duration: typing.Union[int, float],
  multi_az: typing.Union[bool, IResolvable],
  offering_type: str,
  product_description: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.dbInstanceClass">db_instance_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#db_instance_class DataAwsRdsReservedInstanceOffering#db_instance_class}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.duration">duration</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#duration DataAwsRdsReservedInstanceOffering#duration}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.multiAz">multi_az</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#multi_az DataAwsRdsReservedInstanceOffering#multi_az}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.offeringType">offering_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#offering_type DataAwsRdsReservedInstanceOffering#offering_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.productDescription">product_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#product_description DataAwsRdsReservedInstanceOffering#product_description}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#id DataAwsRdsReservedInstanceOffering#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `db_instance_class`<sup>Required</sup> <a name="db_instance_class" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.dbInstanceClass"></a>

```python
db_instance_class: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#db_instance_class DataAwsRdsReservedInstanceOffering#db_instance_class}.

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.duration"></a>

```python
duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#duration DataAwsRdsReservedInstanceOffering#duration}.

---

##### `multi_az`<sup>Required</sup> <a name="multi_az" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.multiAz"></a>

```python
multi_az: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#multi_az DataAwsRdsReservedInstanceOffering#multi_az}.

---

##### `offering_type`<sup>Required</sup> <a name="offering_type" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.offeringType"></a>

```python
offering_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#offering_type DataAwsRdsReservedInstanceOffering#offering_type}.

---

##### `product_description`<sup>Required</sup> <a name="product_description" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.productDescription"></a>

```python
product_description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#product_description DataAwsRdsReservedInstanceOffering#product_description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#id DataAwsRdsReservedInstanceOffering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



