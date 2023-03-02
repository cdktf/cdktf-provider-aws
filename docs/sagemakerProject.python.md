# `sagemakerProject` Submodule <a name="`sagemakerProject` Submodule" id="@cdktf/provider-aws.sagemakerProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerProject <a name="SagemakerProject" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project aws_sagemaker_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_project

sagemakerProject.SagemakerProject(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project_name: str,
  service_catalog_provisioning_details: SagemakerProjectServiceCatalogProvisioningDetails,
  id: str = None,
  project_description: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.Initializer.parameter.projectName">project_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#project_name SagemakerProject#project_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.Initializer.parameter.serviceCatalogProvisioningDetails">service_catalog_provisioning_details</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails">SagemakerProjectServiceCatalogProvisioningDetails</a></code> | service_catalog_provisioning_details block. |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#id SagemakerProject#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.Initializer.parameter.projectDescription">project_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#project_description SagemakerProject#project_description}. |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#tags SagemakerProject#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#tags_all SagemakerProject#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_name`<sup>Required</sup> <a name="project_name" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.Initializer.parameter.projectName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#project_name SagemakerProject#project_name}.

---

##### `service_catalog_provisioning_details`<sup>Required</sup> <a name="service_catalog_provisioning_details" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.Initializer.parameter.serviceCatalogProvisioningDetails"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails">SagemakerProjectServiceCatalogProvisioningDetails</a>

service_catalog_provisioning_details block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#service_catalog_provisioning_details SagemakerProject#service_catalog_provisioning_details}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#id SagemakerProject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_description`<sup>Optional</sup> <a name="project_description" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.Initializer.parameter.projectDescription"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#project_description SagemakerProject#project_description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#tags SagemakerProject#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#tags_all SagemakerProject#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.putServiceCatalogProvisioningDetails">put_service_catalog_provisioning_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.resetProjectDescription">reset_project_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_service_catalog_provisioning_details` <a name="put_service_catalog_provisioning_details" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.putServiceCatalogProvisioningDetails"></a>

```python
def put_service_catalog_provisioning_details(
  product_id: str,
  path_id: str = None,
  provisioning_artifact_id: str = None,
  provisioning_parameter: typing.Union[IResolvable, typing.List[SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter]] = None
) -> None
```

###### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.putServiceCatalogProvisioningDetails.parameter.productId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#product_id SagemakerProject#product_id}.

---

###### `path_id`<sup>Optional</sup> <a name="path_id" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.putServiceCatalogProvisioningDetails.parameter.pathId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#path_id SagemakerProject#path_id}.

---

###### `provisioning_artifact_id`<sup>Optional</sup> <a name="provisioning_artifact_id" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.putServiceCatalogProvisioningDetails.parameter.provisioningArtifactId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#provisioning_artifact_id SagemakerProject#provisioning_artifact_id}.

---

###### `provisioning_parameter`<sup>Optional</sup> <a name="provisioning_parameter" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.putServiceCatalogProvisioningDetails.parameter.provisioningParameter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter</a>]]

provisioning_parameter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#provisioning_parameter SagemakerProject#provisioning_parameter}

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project_description` <a name="reset_project_description" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.resetProjectDescription"></a>

```python
def reset_project_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_project

sagemakerProject.SagemakerProject.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_project

sagemakerProject.SagemakerProject.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_project

sagemakerProject.SagemakerProject.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.serviceCatalogProvisioningDetails">service_catalog_provisioning_details</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference">SagemakerProjectServiceCatalogProvisioningDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.projectDescriptionInput">project_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.projectNameInput">project_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.serviceCatalogProvisioningDetailsInput">service_catalog_provisioning_details_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails">SagemakerProjectServiceCatalogProvisioningDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.projectDescription">project_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.projectName">project_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `service_catalog_provisioning_details`<sup>Required</sup> <a name="service_catalog_provisioning_details" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.serviceCatalogProvisioningDetails"></a>

```python
service_catalog_provisioning_details: SagemakerProjectServiceCatalogProvisioningDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference">SagemakerProjectServiceCatalogProvisioningDetailsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_description_input`<sup>Optional</sup> <a name="project_description_input" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.projectDescriptionInput"></a>

```python
project_description_input: str
```

- *Type:* str

---

##### `project_name_input`<sup>Optional</sup> <a name="project_name_input" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.projectNameInput"></a>

```python
project_name_input: str
```

- *Type:* str

---

##### `service_catalog_provisioning_details_input`<sup>Optional</sup> <a name="service_catalog_provisioning_details_input" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.serviceCatalogProvisioningDetailsInput"></a>

```python
service_catalog_provisioning_details_input: SagemakerProjectServiceCatalogProvisioningDetails
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails">SagemakerProjectServiceCatalogProvisioningDetails</a>

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_description`<sup>Required</sup> <a name="project_description" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.projectDescription"></a>

```python
project_description: str
```

- *Type:* str

---

##### `project_name`<sup>Required</sup> <a name="project_name" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.projectName"></a>

```python
project_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sagemakerProject.SagemakerProject.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerProjectConfig <a name="SagemakerProjectConfig" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_project

sagemakerProject.SagemakerProjectConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project_name: str,
  service_catalog_provisioning_details: SagemakerProjectServiceCatalogProvisioningDetails,
  id: str = None,
  project_description: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectConfig.property.projectName">project_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#project_name SagemakerProject#project_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectConfig.property.serviceCatalogProvisioningDetails">service_catalog_provisioning_details</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails">SagemakerProjectServiceCatalogProvisioningDetails</a></code> | service_catalog_provisioning_details block. |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#id SagemakerProject#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectConfig.property.projectDescription">project_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#project_description SagemakerProject#project_description}. |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#tags SagemakerProject#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#tags_all SagemakerProject#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_name`<sup>Required</sup> <a name="project_name" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectConfig.property.projectName"></a>

```python
project_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#project_name SagemakerProject#project_name}.

---

##### `service_catalog_provisioning_details`<sup>Required</sup> <a name="service_catalog_provisioning_details" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectConfig.property.serviceCatalogProvisioningDetails"></a>

```python
service_catalog_provisioning_details: SagemakerProjectServiceCatalogProvisioningDetails
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails">SagemakerProjectServiceCatalogProvisioningDetails</a>

service_catalog_provisioning_details block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#service_catalog_provisioning_details SagemakerProject#service_catalog_provisioning_details}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#id SagemakerProject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_description`<sup>Optional</sup> <a name="project_description" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectConfig.property.projectDescription"></a>

```python
project_description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#project_description SagemakerProject#project_description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#tags SagemakerProject#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#tags_all SagemakerProject#tags_all}.

---

### SagemakerProjectServiceCatalogProvisioningDetails <a name="SagemakerProjectServiceCatalogProvisioningDetails" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_project

sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails(
  product_id: str,
  path_id: str = None,
  provisioning_artifact_id: str = None,
  provisioning_parameter: typing.Union[IResolvable, typing.List[SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails.property.productId">product_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#product_id SagemakerProject#product_id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails.property.pathId">path_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#path_id SagemakerProject#path_id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails.property.provisioningArtifactId">provisioning_artifact_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#provisioning_artifact_id SagemakerProject#provisioning_artifact_id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails.property.provisioningParameter">provisioning_parameter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter</a>]]</code> | provisioning_parameter block. |

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails.property.productId"></a>

```python
product_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#product_id SagemakerProject#product_id}.

---

##### `path_id`<sup>Optional</sup> <a name="path_id" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails.property.pathId"></a>

```python
path_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#path_id SagemakerProject#path_id}.

---

##### `provisioning_artifact_id`<sup>Optional</sup> <a name="provisioning_artifact_id" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails.property.provisioningArtifactId"></a>

```python
provisioning_artifact_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#provisioning_artifact_id SagemakerProject#provisioning_artifact_id}.

---

##### `provisioning_parameter`<sup>Optional</sup> <a name="provisioning_parameter" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails.property.provisioningParameter"></a>

```python
provisioning_parameter: typing.Union[IResolvable, typing.List[SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter</a>]]

provisioning_parameter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#provisioning_parameter SagemakerProject#provisioning_parameter}

---

### SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter <a name="SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_project

sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter(
  key: str,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#key SagemakerProject#key}. |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#value SagemakerProject#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#key SagemakerProject#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#value SagemakerProject#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerProjectServiceCatalogProvisioningDetailsOutputReference <a name="SagemakerProjectServiceCatalogProvisioningDetailsOutputReference" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_project

sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.putProvisioningParameter">put_provisioning_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resetPathId">reset_path_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resetProvisioningArtifactId">reset_provisioning_artifact_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resetProvisioningParameter">reset_provisioning_parameter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_provisioning_parameter` <a name="put_provisioning_parameter" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.putProvisioningParameter"></a>

```python
def put_provisioning_parameter(
  value: typing.Union[IResolvable, typing.List[SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.putProvisioningParameter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter</a>]]

---

##### `reset_path_id` <a name="reset_path_id" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resetPathId"></a>

```python
def reset_path_id() -> None
```

##### `reset_provisioning_artifact_id` <a name="reset_provisioning_artifact_id" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resetProvisioningArtifactId"></a>

```python
def reset_provisioning_artifact_id() -> None
```

##### `reset_provisioning_parameter` <a name="reset_provisioning_parameter" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resetProvisioningParameter"></a>

```python
def reset_provisioning_parameter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.provisioningParameter">provisioning_parameter</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.pathIdInput">path_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.productIdInput">product_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.provisioningArtifactIdInput">provisioning_artifact_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.provisioningParameterInput">provisioning_parameter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.pathId">path_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.productId">product_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.provisioningArtifactId">provisioning_artifact_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails">SagemakerProjectServiceCatalogProvisioningDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `provisioning_parameter`<sup>Required</sup> <a name="provisioning_parameter" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.provisioningParameter"></a>

```python
provisioning_parameter: SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList</a>

---

##### `path_id_input`<sup>Optional</sup> <a name="path_id_input" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.pathIdInput"></a>

```python
path_id_input: str
```

- *Type:* str

---

##### `product_id_input`<sup>Optional</sup> <a name="product_id_input" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.productIdInput"></a>

```python
product_id_input: str
```

- *Type:* str

---

##### `provisioning_artifact_id_input`<sup>Optional</sup> <a name="provisioning_artifact_id_input" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.provisioningArtifactIdInput"></a>

```python
provisioning_artifact_id_input: str
```

- *Type:* str

---

##### `provisioning_parameter_input`<sup>Optional</sup> <a name="provisioning_parameter_input" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.provisioningParameterInput"></a>

```python
provisioning_parameter_input: typing.Union[IResolvable, typing.List[SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter</a>]]

---

##### `path_id`<sup>Required</sup> <a name="path_id" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.pathId"></a>

```python
path_id: str
```

- *Type:* str

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.productId"></a>

```python
product_id: str
```

- *Type:* str

---

##### `provisioning_artifact_id`<sup>Required</sup> <a name="provisioning_artifact_id" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.provisioningArtifactId"></a>

```python
provisioning_artifact_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerProjectServiceCatalogProvisioningDetails
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails">SagemakerProjectServiceCatalogProvisioningDetails</a>

---


### SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList <a name="SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_project

sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter</a>]]

---


### SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference <a name="SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_project

sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter</a>, cdktf.IResolvable]

---



