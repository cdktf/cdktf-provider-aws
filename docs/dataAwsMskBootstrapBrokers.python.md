# `dataAwsMskBootstrapBrokers` Submodule <a name="`dataAwsMskBootstrapBrokers` Submodule" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsMskBootstrapBrokers <a name="DataAwsMskBootstrapBrokers" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/data-sources/msk_bootstrap_brokers aws_msk_bootstrap_brokers}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_msk_bootstrap_brokers

dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_arn: str,
  id: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.clusterArn">cluster_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/data-sources/msk_bootstrap_brokers#cluster_arn DataAwsMskBootstrapBrokers#cluster_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/data-sources/msk_bootstrap_brokers#id DataAwsMskBootstrapBrokers#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_arn`<sup>Required</sup> <a name="cluster_arn" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.clusterArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/data-sources/msk_bootstrap_brokers#cluster_arn DataAwsMskBootstrapBrokers#cluster_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/data-sources/msk_bootstrap_brokers#id DataAwsMskBootstrapBrokers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/data-sources/msk_bootstrap_brokers#region DataAwsMskBootstrapBrokers#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsMskBootstrapBrokers resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_msk_bootstrap_brokers

dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_msk_bootstrap_brokers

dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_msk_bootstrap_brokers

dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_msk_bootstrap_brokers

dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsMskBootstrapBrokers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsMskBootstrapBrokers to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsMskBootstrapBrokers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/data-sources/msk_bootstrap_brokers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsMskBootstrapBrokers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokers">bootstrap_brokers</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersPublicSaslIam">bootstrap_brokers_public_sasl_iam</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersPublicSaslScram">bootstrap_brokers_public_sasl_scram</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersPublicTls">bootstrap_brokers_public_tls</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersSaslIam">bootstrap_brokers_sasl_iam</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersSaslScram">bootstrap_brokers_sasl_scram</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersTls">bootstrap_brokers_tls</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersVpcConnectivitySaslIam">bootstrap_brokers_vpc_connectivity_sasl_iam</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersVpcConnectivitySaslScram">bootstrap_brokers_vpc_connectivity_sasl_scram</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersVpcConnectivityTls">bootstrap_brokers_vpc_connectivity_tls</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.clusterArnInput">cluster_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.clusterArn">cluster_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `bootstrap_brokers`<sup>Required</sup> <a name="bootstrap_brokers" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokers"></a>

```python
bootstrap_brokers: str
```

- *Type:* str

---

##### `bootstrap_brokers_public_sasl_iam`<sup>Required</sup> <a name="bootstrap_brokers_public_sasl_iam" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersPublicSaslIam"></a>

```python
bootstrap_brokers_public_sasl_iam: str
```

- *Type:* str

---

##### `bootstrap_brokers_public_sasl_scram`<sup>Required</sup> <a name="bootstrap_brokers_public_sasl_scram" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersPublicSaslScram"></a>

```python
bootstrap_brokers_public_sasl_scram: str
```

- *Type:* str

---

##### `bootstrap_brokers_public_tls`<sup>Required</sup> <a name="bootstrap_brokers_public_tls" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersPublicTls"></a>

```python
bootstrap_brokers_public_tls: str
```

- *Type:* str

---

##### `bootstrap_brokers_sasl_iam`<sup>Required</sup> <a name="bootstrap_brokers_sasl_iam" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersSaslIam"></a>

```python
bootstrap_brokers_sasl_iam: str
```

- *Type:* str

---

##### `bootstrap_brokers_sasl_scram`<sup>Required</sup> <a name="bootstrap_brokers_sasl_scram" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersSaslScram"></a>

```python
bootstrap_brokers_sasl_scram: str
```

- *Type:* str

---

##### `bootstrap_brokers_tls`<sup>Required</sup> <a name="bootstrap_brokers_tls" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersTls"></a>

```python
bootstrap_brokers_tls: str
```

- *Type:* str

---

##### `bootstrap_brokers_vpc_connectivity_sasl_iam`<sup>Required</sup> <a name="bootstrap_brokers_vpc_connectivity_sasl_iam" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersVpcConnectivitySaslIam"></a>

```python
bootstrap_brokers_vpc_connectivity_sasl_iam: str
```

- *Type:* str

---

##### `bootstrap_brokers_vpc_connectivity_sasl_scram`<sup>Required</sup> <a name="bootstrap_brokers_vpc_connectivity_sasl_scram" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersVpcConnectivitySaslScram"></a>

```python
bootstrap_brokers_vpc_connectivity_sasl_scram: str
```

- *Type:* str

---

##### `bootstrap_brokers_vpc_connectivity_tls`<sup>Required</sup> <a name="bootstrap_brokers_vpc_connectivity_tls" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersVpcConnectivityTls"></a>

```python
bootstrap_brokers_vpc_connectivity_tls: str
```

- *Type:* str

---

##### `cluster_arn_input`<sup>Optional</sup> <a name="cluster_arn_input" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.clusterArnInput"></a>

```python
cluster_arn_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `cluster_arn`<sup>Required</sup> <a name="cluster_arn" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.clusterArn"></a>

```python
cluster_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsMskBootstrapBrokersConfig <a name="DataAwsMskBootstrapBrokersConfig" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_msk_bootstrap_brokers

dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_arn: str,
  id: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.clusterArn">cluster_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/data-sources/msk_bootstrap_brokers#cluster_arn DataAwsMskBootstrapBrokers#cluster_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/data-sources/msk_bootstrap_brokers#id DataAwsMskBootstrapBrokers#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_arn`<sup>Required</sup> <a name="cluster_arn" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.clusterArn"></a>

```python
cluster_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/data-sources/msk_bootstrap_brokers#cluster_arn DataAwsMskBootstrapBrokers#cluster_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/data-sources/msk_bootstrap_brokers#id DataAwsMskBootstrapBrokers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/data-sources/msk_bootstrap_brokers#region DataAwsMskBootstrapBrokers#region}

---



