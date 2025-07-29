# `dataAwsElasticacheReservedCacheNodeOffering` Submodule <a name="`dataAwsElasticacheReservedCacheNodeOffering` Submodule" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsElasticacheReservedCacheNodeOffering <a name="DataAwsElasticacheReservedCacheNodeOffering" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/elasticache_reserved_cache_node_offering aws_elasticache_reserved_cache_node_offering}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticache_reserved_cache_node_offering

dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cache_node_type: str,
  duration: str,
  offering_type: str,
  product_description: str,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.Initializer.parameter.cacheNodeType">cache_node_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/elasticache_reserved_cache_node_offering#cache_node_type DataAwsElasticacheReservedCacheNodeOffering#cache_node_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.Initializer.parameter.duration">duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/elasticache_reserved_cache_node_offering#duration DataAwsElasticacheReservedCacheNodeOffering#duration}. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.Initializer.parameter.offeringType">offering_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/elasticache_reserved_cache_node_offering#offering_type DataAwsElasticacheReservedCacheNodeOffering#offering_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.Initializer.parameter.productDescription">product_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/elasticache_reserved_cache_node_offering#product_description DataAwsElasticacheReservedCacheNodeOffering#product_description}. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cache_node_type`<sup>Required</sup> <a name="cache_node_type" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.Initializer.parameter.cacheNodeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/elasticache_reserved_cache_node_offering#cache_node_type DataAwsElasticacheReservedCacheNodeOffering#cache_node_type}.

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.Initializer.parameter.duration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/elasticache_reserved_cache_node_offering#duration DataAwsElasticacheReservedCacheNodeOffering#duration}.

---

##### `offering_type`<sup>Required</sup> <a name="offering_type" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.Initializer.parameter.offeringType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/elasticache_reserved_cache_node_offering#offering_type DataAwsElasticacheReservedCacheNodeOffering#offering_type}.

---

##### `product_description`<sup>Required</sup> <a name="product_description" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.Initializer.parameter.productDescription"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/elasticache_reserved_cache_node_offering#product_description DataAwsElasticacheReservedCacheNodeOffering#product_description}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/elasticache_reserved_cache_node_offering#region DataAwsElasticacheReservedCacheNodeOffering#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsElasticacheReservedCacheNodeOffering resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticache_reserved_cache_node_offering

dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticache_reserved_cache_node_offering

dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticache_reserved_cache_node_offering

dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticache_reserved_cache_node_offering

dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsElasticacheReservedCacheNodeOffering resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsElasticacheReservedCacheNodeOffering to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsElasticacheReservedCacheNodeOffering that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/elasticache_reserved_cache_node_offering#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsElasticacheReservedCacheNodeOffering to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.fixedPrice">fixed_price</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.offeringId">offering_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.cacheNodeTypeInput">cache_node_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.durationInput">duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.offeringTypeInput">offering_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.productDescriptionInput">product_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.cacheNodeType">cache_node_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.duration">duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.offeringType">offering_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.productDescription">product_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `fixed_price`<sup>Required</sup> <a name="fixed_price" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.fixedPrice"></a>

```python
fixed_price: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `offering_id`<sup>Required</sup> <a name="offering_id" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.offeringId"></a>

```python
offering_id: str
```

- *Type:* str

---

##### `cache_node_type_input`<sup>Optional</sup> <a name="cache_node_type_input" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.cacheNodeTypeInput"></a>

```python
cache_node_type_input: str
```

- *Type:* str

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.durationInput"></a>

```python
duration_input: str
```

- *Type:* str

---

##### `offering_type_input`<sup>Optional</sup> <a name="offering_type_input" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.offeringTypeInput"></a>

```python
offering_type_input: str
```

- *Type:* str

---

##### `product_description_input`<sup>Optional</sup> <a name="product_description_input" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.productDescriptionInput"></a>

```python
product_description_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `cache_node_type`<sup>Required</sup> <a name="cache_node_type" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.cacheNodeType"></a>

```python
cache_node_type: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.duration"></a>

```python
duration: str
```

- *Type:* str

---

##### `offering_type`<sup>Required</sup> <a name="offering_type" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.offeringType"></a>

```python
offering_type: str
```

- *Type:* str

---

##### `product_description`<sup>Required</sup> <a name="product_description" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.productDescription"></a>

```python
product_description: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsElasticacheReservedCacheNodeOfferingConfig <a name="DataAwsElasticacheReservedCacheNodeOfferingConfig" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticache_reserved_cache_node_offering

dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cache_node_type: str,
  duration: str,
  offering_type: str,
  product_description: str,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig.property.cacheNodeType">cache_node_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/elasticache_reserved_cache_node_offering#cache_node_type DataAwsElasticacheReservedCacheNodeOffering#cache_node_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig.property.duration">duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/elasticache_reserved_cache_node_offering#duration DataAwsElasticacheReservedCacheNodeOffering#duration}. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig.property.offeringType">offering_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/elasticache_reserved_cache_node_offering#offering_type DataAwsElasticacheReservedCacheNodeOffering#offering_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig.property.productDescription">product_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/elasticache_reserved_cache_node_offering#product_description DataAwsElasticacheReservedCacheNodeOffering#product_description}. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cache_node_type`<sup>Required</sup> <a name="cache_node_type" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig.property.cacheNodeType"></a>

```python
cache_node_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/elasticache_reserved_cache_node_offering#cache_node_type DataAwsElasticacheReservedCacheNodeOffering#cache_node_type}.

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig.property.duration"></a>

```python
duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/elasticache_reserved_cache_node_offering#duration DataAwsElasticacheReservedCacheNodeOffering#duration}.

---

##### `offering_type`<sup>Required</sup> <a name="offering_type" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig.property.offeringType"></a>

```python
offering_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/elasticache_reserved_cache_node_offering#offering_type DataAwsElasticacheReservedCacheNodeOffering#offering_type}.

---

##### `product_description`<sup>Required</sup> <a name="product_description" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig.property.productDescription"></a>

```python
product_description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/elasticache_reserved_cache_node_offering#product_description DataAwsElasticacheReservedCacheNodeOffering#product_description}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/elasticache_reserved_cache_node_offering#region DataAwsElasticacheReservedCacheNodeOffering#region}

---



