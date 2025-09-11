# `dataAwsRoute53Records` Submodule <a name="`dataAwsRoute53Records` Submodule" id="@cdktf/provider-aws.dataAwsRoute53Records"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRoute53Records <a name="DataAwsRoute53Records" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/route53_records aws_route53_records}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_records

dataAwsRoute53Records.DataAwsRoute53Records(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  zone_id: str,
  name_regex: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/route53_records#zone_id DataAwsRoute53Records#zone_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.nameRegex">name_regex</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/route53_records#name_regex DataAwsRoute53Records#name_regex}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.zoneId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/route53_records#zone_id DataAwsRoute53Records#zone_id}.

---

##### `name_regex`<sup>Optional</sup> <a name="name_regex" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.nameRegex"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/route53_records#name_regex DataAwsRoute53Records#name_regex}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.resetNameRegex">reset_name_regex</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_name_regex` <a name="reset_name_regex" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.resetNameRegex"></a>

```python
def reset_name_regex() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsRoute53Records resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_records

dataAwsRoute53Records.DataAwsRoute53Records.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_records

dataAwsRoute53Records.DataAwsRoute53Records.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_records

dataAwsRoute53Records.DataAwsRoute53Records.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_records

dataAwsRoute53Records.DataAwsRoute53Records.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsRoute53Records resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsRoute53Records to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsRoute53Records that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/route53_records#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsRoute53Records to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.resourceRecordSets">resource_record_sets</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList">DataAwsRoute53RecordsResourceRecordSetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.nameRegexInput">name_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.nameRegex">name_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `resource_record_sets`<sup>Required</sup> <a name="resource_record_sets" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.resourceRecordSets"></a>

```python
resource_record_sets: DataAwsRoute53RecordsResourceRecordSetsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList">DataAwsRoute53RecordsResourceRecordSetsList</a>

---

##### `name_regex_input`<sup>Optional</sup> <a name="name_regex_input" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.nameRegexInput"></a>

```python
name_regex_input: str
```

- *Type:* str

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `name_regex`<sup>Required</sup> <a name="name_regex" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.nameRegex"></a>

```python
name_regex: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRoute53RecordsConfig <a name="DataAwsRoute53RecordsConfig" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_records

dataAwsRoute53Records.DataAwsRoute53RecordsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  zone_id: str,
  name_regex: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.zoneId">zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/route53_records#zone_id DataAwsRoute53Records#zone_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.nameRegex">name_regex</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/route53_records#name_regex DataAwsRoute53Records#name_regex}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/route53_records#zone_id DataAwsRoute53Records#zone_id}.

---

##### `name_regex`<sup>Optional</sup> <a name="name_regex" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.nameRegex"></a>

```python
name_regex: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/route53_records#name_regex DataAwsRoute53Records#name_regex}.

---

### DataAwsRoute53RecordsResourceRecordSets <a name="DataAwsRoute53RecordsResourceRecordSets" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSets.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_records

dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSets()
```


### DataAwsRoute53RecordsResourceRecordSetsAliasTarget <a name="DataAwsRoute53RecordsResourceRecordSetsAliasTarget" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_records

dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTarget()
```


### DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfig <a name="DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfig" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_records

dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfig()
```


### DataAwsRoute53RecordsResourceRecordSetsGeolocation <a name="DataAwsRoute53RecordsResourceRecordSetsGeolocation" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_records

dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocation()
```


### DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocation <a name="DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocation" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_records

dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocation()
```


### DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinates <a name="DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinates" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinates.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_records

dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinates()
```


### DataAwsRoute53RecordsResourceRecordSetsResourceRecords <a name="DataAwsRoute53RecordsResourceRecordSetsResourceRecords" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecords.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_records

dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecords()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference <a name="DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_records

dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.property.evaluateTargetHealth">evaluate_target_health</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.property.hostedZoneId">hosted_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTarget">DataAwsRoute53RecordsResourceRecordSetsAliasTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `evaluate_target_health`<sup>Required</sup> <a name="evaluate_target_health" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.property.evaluateTargetHealth"></a>

```python
evaluate_target_health: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `hosted_zone_id`<sup>Required</sup> <a name="hosted_zone_id" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.property.hostedZoneId"></a>

```python
hosted_zone_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsRoute53RecordsResourceRecordSetsAliasTarget
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTarget">DataAwsRoute53RecordsResourceRecordSetsAliasTarget</a>

---


### DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference <a name="DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_records

dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.property.collectionId">collection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.property.locationName">location_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfig">DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.property.collectionId"></a>

```python
collection_id: str
```

- *Type:* str

---

##### `location_name`<sup>Required</sup> <a name="location_name" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.property.locationName"></a>

```python
location_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfig
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfig">DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfig</a>

---


### DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference <a name="DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_records

dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.property.continentCode">continent_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.property.countryCode">country_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.property.subdivisionCode">subdivision_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocation">DataAwsRoute53RecordsResourceRecordSetsGeolocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `continent_code`<sup>Required</sup> <a name="continent_code" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.property.continentCode"></a>

```python
continent_code: str
```

- *Type:* str

---

##### `country_code`<sup>Required</sup> <a name="country_code" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

---

##### `subdivision_code`<sup>Required</sup> <a name="subdivision_code" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.property.subdivisionCode"></a>

```python
subdivision_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsRoute53RecordsResourceRecordSetsGeolocation
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocation">DataAwsRoute53RecordsResourceRecordSetsGeolocation</a>

---


### DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference <a name="DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_records

dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.property.latitude">latitude</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.property.longitude">longitude</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinates">DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinates</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `latitude`<sup>Required</sup> <a name="latitude" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.property.latitude"></a>

```python
latitude: str
```

- *Type:* str

---

##### `longitude`<sup>Required</sup> <a name="longitude" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.property.longitude"></a>

```python
longitude: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinates
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinates">DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinates</a>

---


### DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference <a name="DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_records

dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.property.awsRegion">aws_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.property.bias">bias</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.property.coordinates">coordinates</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference">DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.property.localZoneGroup">local_zone_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocation">DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_region`<sup>Required</sup> <a name="aws_region" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

---

##### `bias`<sup>Required</sup> <a name="bias" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.property.bias"></a>

```python
bias: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `coordinates`<sup>Required</sup> <a name="coordinates" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.property.coordinates"></a>

```python
coordinates: DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference">DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference</a>

---

##### `local_zone_group`<sup>Required</sup> <a name="local_zone_group" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.property.localZoneGroup"></a>

```python
local_zone_group: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocation
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocation">DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocation</a>

---


### DataAwsRoute53RecordsResourceRecordSetsList <a name="DataAwsRoute53RecordsResourceRecordSetsList" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_records

dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsRoute53RecordsResourceRecordSetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsRoute53RecordsResourceRecordSetsOutputReference <a name="DataAwsRoute53RecordsResourceRecordSetsOutputReference" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_records

dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.aliasTarget">alias_target</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference">DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.cidrRoutingConfig">cidr_routing_config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference">DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.failover">failover</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.geolocation">geolocation</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference">DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.geoproximityLocation">geoproximity_location</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference">DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.healthCheckId">health_check_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.multiValueAnswer">multi_value_answer</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.resourceRecords">resource_records</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList">DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.setIdentifier">set_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.trafficPolicyInstanceId">traffic_policy_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSets">DataAwsRoute53RecordsResourceRecordSets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alias_target`<sup>Required</sup> <a name="alias_target" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.aliasTarget"></a>

```python
alias_target: DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference">DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference</a>

---

##### `cidr_routing_config`<sup>Required</sup> <a name="cidr_routing_config" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.cidrRoutingConfig"></a>

```python
cidr_routing_config: DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference">DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference</a>

---

##### `failover`<sup>Required</sup> <a name="failover" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.failover"></a>

```python
failover: str
```

- *Type:* str

---

##### `geolocation`<sup>Required</sup> <a name="geolocation" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.geolocation"></a>

```python
geolocation: DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference">DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference</a>

---

##### `geoproximity_location`<sup>Required</sup> <a name="geoproximity_location" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.geoproximityLocation"></a>

```python
geoproximity_location: DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference">DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference</a>

---

##### `health_check_id`<sup>Required</sup> <a name="health_check_id" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.healthCheckId"></a>

```python
health_check_id: str
```

- *Type:* str

---

##### `multi_value_answer`<sup>Required</sup> <a name="multi_value_answer" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.multiValueAnswer"></a>

```python
multi_value_answer: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `resource_records`<sup>Required</sup> <a name="resource_records" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.resourceRecords"></a>

```python
resource_records: DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList">DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList</a>

---

##### `set_identifier`<sup>Required</sup> <a name="set_identifier" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.setIdentifier"></a>

```python
set_identifier: str
```

- *Type:* str

---

##### `traffic_policy_instance_id`<sup>Required</sup> <a name="traffic_policy_instance_id" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.trafficPolicyInstanceId"></a>

```python
traffic_policy_instance_id: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsRoute53RecordsResourceRecordSets
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSets">DataAwsRoute53RecordsResourceRecordSets</a>

---


### DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList <a name="DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_records

dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference <a name="DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_records

dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecords">DataAwsRoute53RecordsResourceRecordSetsResourceRecords</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsRoute53RecordsResourceRecordSetsResourceRecords
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecords">DataAwsRoute53RecordsResourceRecordSetsResourceRecords</a>

---



