# `dataAwsEksClusterVersions` Submodule <a name="`dataAwsEksClusterVersions` Submodule" id="@cdktf/provider-aws.dataAwsEksClusterVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEksClusterVersions <a name="DataAwsEksClusterVersions" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/eks_cluster_versions aws_eks_cluster_versions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_eks_cluster_versions

dataAwsEksClusterVersions.DataAwsEksClusterVersions(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_type: str = None,
  cluster_versions_only: typing.List[str] = None,
  default_only: typing.Union[bool, IResolvable] = None,
  include_all: typing.Union[bool, IResolvable] = None,
  region: str = None,
  version_status: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer.parameter.clusterType">cluster_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/eks_cluster_versions#cluster_type DataAwsEksClusterVersions#cluster_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer.parameter.clusterVersionsOnly">cluster_versions_only</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/eks_cluster_versions#cluster_versions_only DataAwsEksClusterVersions#cluster_versions_only}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer.parameter.defaultOnly">default_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/eks_cluster_versions#default_only DataAwsEksClusterVersions#default_only}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer.parameter.includeAll">include_all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/eks_cluster_versions#include_all DataAwsEksClusterVersions#include_all}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer.parameter.versionStatus">version_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/eks_cluster_versions#version_status DataAwsEksClusterVersions#version_status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_type`<sup>Optional</sup> <a name="cluster_type" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer.parameter.clusterType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/eks_cluster_versions#cluster_type DataAwsEksClusterVersions#cluster_type}.

---

##### `cluster_versions_only`<sup>Optional</sup> <a name="cluster_versions_only" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer.parameter.clusterVersionsOnly"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/eks_cluster_versions#cluster_versions_only DataAwsEksClusterVersions#cluster_versions_only}.

---

##### `default_only`<sup>Optional</sup> <a name="default_only" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer.parameter.defaultOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/eks_cluster_versions#default_only DataAwsEksClusterVersions#default_only}.

---

##### `include_all`<sup>Optional</sup> <a name="include_all" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer.parameter.includeAll"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/eks_cluster_versions#include_all DataAwsEksClusterVersions#include_all}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/eks_cluster_versions#region DataAwsEksClusterVersions#region}

---

##### `version_status`<sup>Optional</sup> <a name="version_status" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer.parameter.versionStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/eks_cluster_versions#version_status DataAwsEksClusterVersions#version_status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetClusterType">reset_cluster_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetClusterVersionsOnly">reset_cluster_versions_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetDefaultOnly">reset_default_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetIncludeAll">reset_include_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetVersionStatus">reset_version_status</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_cluster_type` <a name="reset_cluster_type" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetClusterType"></a>

```python
def reset_cluster_type() -> None
```

##### `reset_cluster_versions_only` <a name="reset_cluster_versions_only" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetClusterVersionsOnly"></a>

```python
def reset_cluster_versions_only() -> None
```

##### `reset_default_only` <a name="reset_default_only" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetDefaultOnly"></a>

```python
def reset_default_only() -> None
```

##### `reset_include_all` <a name="reset_include_all" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetIncludeAll"></a>

```python
def reset_include_all() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_version_status` <a name="reset_version_status" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetVersionStatus"></a>

```python
def reset_version_status() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsEksClusterVersions resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_eks_cluster_versions

dataAwsEksClusterVersions.DataAwsEksClusterVersions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_eks_cluster_versions

dataAwsEksClusterVersions.DataAwsEksClusterVersions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_eks_cluster_versions

dataAwsEksClusterVersions.DataAwsEksClusterVersions.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_eks_cluster_versions

dataAwsEksClusterVersions.DataAwsEksClusterVersions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsEksClusterVersions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsEksClusterVersions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsEksClusterVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/eks_cluster_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsEksClusterVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.clusterVersions">cluster_versions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList">DataAwsEksClusterVersionsClusterVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.clusterTypeInput">cluster_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.clusterVersionsOnlyInput">cluster_versions_only_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.defaultOnlyInput">default_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.includeAllInput">include_all_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.versionStatusInput">version_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.clusterType">cluster_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.clusterVersionsOnly">cluster_versions_only</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.defaultOnly">default_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.includeAll">include_all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.versionStatus">version_status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `cluster_versions`<sup>Required</sup> <a name="cluster_versions" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.clusterVersions"></a>

```python
cluster_versions: DataAwsEksClusterVersionsClusterVersionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList">DataAwsEksClusterVersionsClusterVersionsList</a>

---

##### `cluster_type_input`<sup>Optional</sup> <a name="cluster_type_input" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.clusterTypeInput"></a>

```python
cluster_type_input: str
```

- *Type:* str

---

##### `cluster_versions_only_input`<sup>Optional</sup> <a name="cluster_versions_only_input" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.clusterVersionsOnlyInput"></a>

```python
cluster_versions_only_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_only_input`<sup>Optional</sup> <a name="default_only_input" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.defaultOnlyInput"></a>

```python
default_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_all_input`<sup>Optional</sup> <a name="include_all_input" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.includeAllInput"></a>

```python
include_all_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `version_status_input`<sup>Optional</sup> <a name="version_status_input" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.versionStatusInput"></a>

```python
version_status_input: str
```

- *Type:* str

---

##### `cluster_type`<sup>Required</sup> <a name="cluster_type" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.clusterType"></a>

```python
cluster_type: str
```

- *Type:* str

---

##### `cluster_versions_only`<sup>Required</sup> <a name="cluster_versions_only" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.clusterVersionsOnly"></a>

```python
cluster_versions_only: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_only`<sup>Required</sup> <a name="default_only" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.defaultOnly"></a>

```python
default_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_all`<sup>Required</sup> <a name="include_all" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.includeAll"></a>

```python
include_all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `version_status`<sup>Required</sup> <a name="version_status" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.versionStatus"></a>

```python
version_status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEksClusterVersionsClusterVersions <a name="DataAwsEksClusterVersionsClusterVersions" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_eks_cluster_versions

dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersions()
```


### DataAwsEksClusterVersionsConfig <a name="DataAwsEksClusterVersionsConfig" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_eks_cluster_versions

dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_type: str = None,
  cluster_versions_only: typing.List[str] = None,
  default_only: typing.Union[bool, IResolvable] = None,
  include_all: typing.Union[bool, IResolvable] = None,
  region: str = None,
  version_status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.clusterType">cluster_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/eks_cluster_versions#cluster_type DataAwsEksClusterVersions#cluster_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.clusterVersionsOnly">cluster_versions_only</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/eks_cluster_versions#cluster_versions_only DataAwsEksClusterVersions#cluster_versions_only}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.defaultOnly">default_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/eks_cluster_versions#default_only DataAwsEksClusterVersions#default_only}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.includeAll">include_all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/eks_cluster_versions#include_all DataAwsEksClusterVersions#include_all}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.versionStatus">version_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/eks_cluster_versions#version_status DataAwsEksClusterVersions#version_status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_type`<sup>Optional</sup> <a name="cluster_type" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.clusterType"></a>

```python
cluster_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/eks_cluster_versions#cluster_type DataAwsEksClusterVersions#cluster_type}.

---

##### `cluster_versions_only`<sup>Optional</sup> <a name="cluster_versions_only" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.clusterVersionsOnly"></a>

```python
cluster_versions_only: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/eks_cluster_versions#cluster_versions_only DataAwsEksClusterVersions#cluster_versions_only}.

---

##### `default_only`<sup>Optional</sup> <a name="default_only" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.defaultOnly"></a>

```python
default_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/eks_cluster_versions#default_only DataAwsEksClusterVersions#default_only}.

---

##### `include_all`<sup>Optional</sup> <a name="include_all" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.includeAll"></a>

```python
include_all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/eks_cluster_versions#include_all DataAwsEksClusterVersions#include_all}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/eks_cluster_versions#region DataAwsEksClusterVersions#region}

---

##### `version_status`<sup>Optional</sup> <a name="version_status" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.versionStatus"></a>

```python
version_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/eks_cluster_versions#version_status DataAwsEksClusterVersions#version_status}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEksClusterVersionsClusterVersionsList <a name="DataAwsEksClusterVersionsClusterVersionsList" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_eks_cluster_versions

dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsEksClusterVersionsClusterVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsEksClusterVersionsClusterVersionsOutputReference <a name="DataAwsEksClusterVersionsClusterVersionsOutputReference" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_eks_cluster_versions

dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.clusterType">cluster_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.clusterVersion">cluster_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.defaultPlatformVersion">default_platform_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.defaultVersion">default_version</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.endOfExtendedSupportDate">end_of_extended_support_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.endOfStandardSupportDate">end_of_standard_support_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.kubernetesPatchVersion">kubernetes_patch_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.releaseDate">release_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.versionStatus">version_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersions">DataAwsEksClusterVersionsClusterVersions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_type`<sup>Required</sup> <a name="cluster_type" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.clusterType"></a>

```python
cluster_type: str
```

- *Type:* str

---

##### `cluster_version`<sup>Required</sup> <a name="cluster_version" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.clusterVersion"></a>

```python
cluster_version: str
```

- *Type:* str

---

##### `default_platform_version`<sup>Required</sup> <a name="default_platform_version" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.defaultPlatformVersion"></a>

```python
default_platform_version: str
```

- *Type:* str

---

##### `default_version`<sup>Required</sup> <a name="default_version" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.defaultVersion"></a>

```python
default_version: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `end_of_extended_support_date`<sup>Required</sup> <a name="end_of_extended_support_date" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.endOfExtendedSupportDate"></a>

```python
end_of_extended_support_date: str
```

- *Type:* str

---

##### `end_of_standard_support_date`<sup>Required</sup> <a name="end_of_standard_support_date" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.endOfStandardSupportDate"></a>

```python
end_of_standard_support_date: str
```

- *Type:* str

---

##### `kubernetes_patch_version`<sup>Required</sup> <a name="kubernetes_patch_version" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.kubernetesPatchVersion"></a>

```python
kubernetes_patch_version: str
```

- *Type:* str

---

##### `release_date`<sup>Required</sup> <a name="release_date" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.releaseDate"></a>

```python
release_date: str
```

- *Type:* str

---

##### `version_status`<sup>Required</sup> <a name="version_status" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.versionStatus"></a>

```python
version_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsEksClusterVersionsClusterVersions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersions">DataAwsEksClusterVersionsClusterVersions</a>

---



