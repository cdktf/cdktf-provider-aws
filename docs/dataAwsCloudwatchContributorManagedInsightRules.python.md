# `dataAwsCloudwatchContributorManagedInsightRules` Submodule <a name="`dataAwsCloudwatchContributorManagedInsightRules` Submodule" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCloudwatchContributorManagedInsightRules <a name="DataAwsCloudwatchContributorManagedInsightRules" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/cloudwatch_contributor_managed_insight_rules aws_cloudwatch_contributor_managed_insight_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudwatch_contributor_managed_insight_rules

dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  resource_arn: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.Initializer.parameter.resourceArn">resource_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/cloudwatch_contributor_managed_insight_rules#resource_arn DataAwsCloudwatchContributorManagedInsightRules#resource_arn}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.Initializer.parameter.resourceArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/cloudwatch_contributor_managed_insight_rules#resource_arn DataAwsCloudwatchContributorManagedInsightRules#resource_arn}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsCloudwatchContributorManagedInsightRules resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudwatch_contributor_managed_insight_rules

dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudwatch_contributor_managed_insight_rules

dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudwatch_contributor_managed_insight_rules

dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudwatch_contributor_managed_insight_rules

dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsCloudwatchContributorManagedInsightRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsCloudwatchContributorManagedInsightRules to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsCloudwatchContributorManagedInsightRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/cloudwatch_contributor_managed_insight_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsCloudwatchContributorManagedInsightRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.managedRules">managed_rules</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList">DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.resourceArnInput">resource_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `managed_rules`<sup>Required</sup> <a name="managed_rules" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.managedRules"></a>

```python
managed_rules: DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList">DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList</a>

---

##### `resource_arn_input`<sup>Optional</sup> <a name="resource_arn_input" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.resourceArnInput"></a>

```python
resource_arn_input: str
```

- *Type:* str

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCloudwatchContributorManagedInsightRulesConfig <a name="DataAwsCloudwatchContributorManagedInsightRulesConfig" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudwatch_contributor_managed_insight_rules

dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  resource_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.resourceArn">resource_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/cloudwatch_contributor_managed_insight_rules#resource_arn DataAwsCloudwatchContributorManagedInsightRules#resource_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/cloudwatch_contributor_managed_insight_rules#resource_arn DataAwsCloudwatchContributorManagedInsightRules#resource_arn}.

---

### DataAwsCloudwatchContributorManagedInsightRulesManagedRules <a name="DataAwsCloudwatchContributorManagedInsightRulesManagedRules" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRules.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudwatch_contributor_managed_insight_rules

dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRules()
```


### DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleState <a name="DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleState" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleState.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudwatch_contributor_managed_insight_rules

dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleState()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList <a name="DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudwatch_contributor_managed_insight_rules

dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference <a name="DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudwatch_contributor_managed_insight_rules

dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.property.ruleState">rule_state</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList">DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.property.templateName">template_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRules">DataAwsCloudwatchContributorManagedInsightRulesManagedRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `rule_state`<sup>Required</sup> <a name="rule_state" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.property.ruleState"></a>

```python
rule_state: DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList">DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList</a>

---

##### `template_name`<sup>Required</sup> <a name="template_name" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.property.templateName"></a>

```python
template_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCloudwatchContributorManagedInsightRulesManagedRules
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRules">DataAwsCloudwatchContributorManagedInsightRulesManagedRules</a>

---


### DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList <a name="DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudwatch_contributor_managed_insight_rules

dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference <a name="DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudwatch_contributor_managed_insight_rules

dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.property.ruleName">rule_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleState">DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleState</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleState
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleState">DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleState</a>

---



