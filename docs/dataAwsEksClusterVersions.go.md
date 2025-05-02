# `dataAwsEksClusterVersions` Submodule <a name="`dataAwsEksClusterVersions` Submodule" id="@cdktf/provider-aws.dataAwsEksClusterVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEksClusterVersions <a name="DataAwsEksClusterVersions" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/data-sources/eks_cluster_versions aws_eks_cluster_versions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawseksclusterversions"

dataawseksclusterversions.NewDataAwsEksClusterVersions(scope Construct, id *string, config DataAwsEksClusterVersionsConfig) DataAwsEksClusterVersions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig">DataAwsEksClusterVersionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig">DataAwsEksClusterVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetClusterType">ResetClusterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetClusterVersionsOnly">ResetClusterVersionsOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetDefaultOnly">ResetDefaultOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetIncludeAll">ResetIncludeAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetVersionStatus">ResetVersionStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetClusterType` <a name="ResetClusterType" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetClusterType"></a>

```go
func ResetClusterType()
```

##### `ResetClusterVersionsOnly` <a name="ResetClusterVersionsOnly" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetClusterVersionsOnly"></a>

```go
func ResetClusterVersionsOnly()
```

##### `ResetDefaultOnly` <a name="ResetDefaultOnly" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetDefaultOnly"></a>

```go
func ResetDefaultOnly()
```

##### `ResetIncludeAll` <a name="ResetIncludeAll" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetIncludeAll"></a>

```go
func ResetIncludeAll()
```

##### `ResetVersionStatus` <a name="ResetVersionStatus" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetVersionStatus"></a>

```go
func ResetVersionStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsEksClusterVersions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawseksclusterversions"

dataawseksclusterversions.DataAwsEksClusterVersions_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawseksclusterversions"

dataawseksclusterversions.DataAwsEksClusterVersions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawseksclusterversions"

dataawseksclusterversions.DataAwsEksClusterVersions_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawseksclusterversions"

dataawseksclusterversions.DataAwsEksClusterVersions_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAwsEksClusterVersions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsEksClusterVersions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsEksClusterVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/data-sources/eks_cluster_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsEksClusterVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.clusterVersions">ClusterVersions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList">DataAwsEksClusterVersionsClusterVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.clusterTypeInput">ClusterTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.clusterVersionsOnlyInput">ClusterVersionsOnlyInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.defaultOnlyInput">DefaultOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.includeAllInput">IncludeAllInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.versionStatusInput">VersionStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.clusterType">ClusterType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.clusterVersionsOnly">ClusterVersionsOnly</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.defaultOnly">DefaultOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.includeAll">IncludeAll</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.versionStatus">VersionStatus</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ClusterVersions`<sup>Required</sup> <a name="ClusterVersions" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.clusterVersions"></a>

```go
func ClusterVersions() DataAwsEksClusterVersionsClusterVersionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList">DataAwsEksClusterVersionsClusterVersionsList</a>

---

##### `ClusterTypeInput`<sup>Optional</sup> <a name="ClusterTypeInput" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.clusterTypeInput"></a>

```go
func ClusterTypeInput() *string
```

- *Type:* *string

---

##### `ClusterVersionsOnlyInput`<sup>Optional</sup> <a name="ClusterVersionsOnlyInput" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.clusterVersionsOnlyInput"></a>

```go
func ClusterVersionsOnlyInput() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultOnlyInput`<sup>Optional</sup> <a name="DefaultOnlyInput" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.defaultOnlyInput"></a>

```go
func DefaultOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeAllInput`<sup>Optional</sup> <a name="IncludeAllInput" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.includeAllInput"></a>

```go
func IncludeAllInput() interface{}
```

- *Type:* interface{}

---

##### `VersionStatusInput`<sup>Optional</sup> <a name="VersionStatusInput" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.versionStatusInput"></a>

```go
func VersionStatusInput() *string
```

- *Type:* *string

---

##### `ClusterType`<sup>Required</sup> <a name="ClusterType" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.clusterType"></a>

```go
func ClusterType() *string
```

- *Type:* *string

---

##### `ClusterVersionsOnly`<sup>Required</sup> <a name="ClusterVersionsOnly" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.clusterVersionsOnly"></a>

```go
func ClusterVersionsOnly() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultOnly`<sup>Required</sup> <a name="DefaultOnly" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.defaultOnly"></a>

```go
func DefaultOnly() interface{}
```

- *Type:* interface{}

---

##### `IncludeAll`<sup>Required</sup> <a name="IncludeAll" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.includeAll"></a>

```go
func IncludeAll() interface{}
```

- *Type:* interface{}

---

##### `VersionStatus`<sup>Required</sup> <a name="VersionStatus" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.versionStatus"></a>

```go
func VersionStatus() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEksClusterVersionsClusterVersions <a name="DataAwsEksClusterVersionsClusterVersions" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawseksclusterversions"

&dataawseksclusterversions.DataAwsEksClusterVersionsClusterVersions {

}
```


### DataAwsEksClusterVersionsConfig <a name="DataAwsEksClusterVersionsConfig" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawseksclusterversions"

&dataawseksclusterversions.DataAwsEksClusterVersionsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterType: *string,
	ClusterVersionsOnly: *[]*string,
	DefaultOnly: interface{},
	IncludeAll: interface{},
	VersionStatus: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.clusterType">ClusterType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/data-sources/eks_cluster_versions#cluster_type DataAwsEksClusterVersions#cluster_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.clusterVersionsOnly">ClusterVersionsOnly</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/data-sources/eks_cluster_versions#cluster_versions_only DataAwsEksClusterVersions#cluster_versions_only}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.defaultOnly">DefaultOnly</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/data-sources/eks_cluster_versions#default_only DataAwsEksClusterVersions#default_only}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.includeAll">IncludeAll</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/data-sources/eks_cluster_versions#include_all DataAwsEksClusterVersions#include_all}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.versionStatus">VersionStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/data-sources/eks_cluster_versions#version_status DataAwsEksClusterVersions#version_status}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterType`<sup>Optional</sup> <a name="ClusterType" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.clusterType"></a>

```go
ClusterType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/data-sources/eks_cluster_versions#cluster_type DataAwsEksClusterVersions#cluster_type}.

---

##### `ClusterVersionsOnly`<sup>Optional</sup> <a name="ClusterVersionsOnly" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.clusterVersionsOnly"></a>

```go
ClusterVersionsOnly *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/data-sources/eks_cluster_versions#cluster_versions_only DataAwsEksClusterVersions#cluster_versions_only}.

---

##### `DefaultOnly`<sup>Optional</sup> <a name="DefaultOnly" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.defaultOnly"></a>

```go
DefaultOnly interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/data-sources/eks_cluster_versions#default_only DataAwsEksClusterVersions#default_only}.

---

##### `IncludeAll`<sup>Optional</sup> <a name="IncludeAll" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.includeAll"></a>

```go
IncludeAll interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/data-sources/eks_cluster_versions#include_all DataAwsEksClusterVersions#include_all}.

---

##### `VersionStatus`<sup>Optional</sup> <a name="VersionStatus" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.versionStatus"></a>

```go
VersionStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/data-sources/eks_cluster_versions#version_status DataAwsEksClusterVersions#version_status}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEksClusterVersionsClusterVersionsList <a name="DataAwsEksClusterVersionsClusterVersionsList" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawseksclusterversions"

dataawseksclusterversions.NewDataAwsEksClusterVersionsClusterVersionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsEksClusterVersionsClusterVersionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.get"></a>

```go
func Get(index *f64) DataAwsEksClusterVersionsClusterVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsEksClusterVersionsClusterVersionsOutputReference <a name="DataAwsEksClusterVersionsClusterVersionsOutputReference" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawseksclusterversions"

dataawseksclusterversions.NewDataAwsEksClusterVersionsClusterVersionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsEksClusterVersionsClusterVersionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.clusterType">ClusterType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.clusterVersion">ClusterVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.defaultPlatformVersion">DefaultPlatformVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.defaultVersion">DefaultVersion</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.endOfExtendedSupportDate">EndOfExtendedSupportDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.endOfStandardSupportDate">EndOfStandardSupportDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.kubernetesPatchVersion">KubernetesPatchVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.releaseDate">ReleaseDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.versionStatus">VersionStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersions">DataAwsEksClusterVersionsClusterVersions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterType`<sup>Required</sup> <a name="ClusterType" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.clusterType"></a>

```go
func ClusterType() *string
```

- *Type:* *string

---

##### `ClusterVersion`<sup>Required</sup> <a name="ClusterVersion" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.clusterVersion"></a>

```go
func ClusterVersion() *string
```

- *Type:* *string

---

##### `DefaultPlatformVersion`<sup>Required</sup> <a name="DefaultPlatformVersion" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.defaultPlatformVersion"></a>

```go
func DefaultPlatformVersion() *string
```

- *Type:* *string

---

##### `DefaultVersion`<sup>Required</sup> <a name="DefaultVersion" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.defaultVersion"></a>

```go
func DefaultVersion() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EndOfExtendedSupportDate`<sup>Required</sup> <a name="EndOfExtendedSupportDate" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.endOfExtendedSupportDate"></a>

```go
func EndOfExtendedSupportDate() *string
```

- *Type:* *string

---

##### `EndOfStandardSupportDate`<sup>Required</sup> <a name="EndOfStandardSupportDate" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.endOfStandardSupportDate"></a>

```go
func EndOfStandardSupportDate() *string
```

- *Type:* *string

---

##### `KubernetesPatchVersion`<sup>Required</sup> <a name="KubernetesPatchVersion" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.kubernetesPatchVersion"></a>

```go
func KubernetesPatchVersion() *string
```

- *Type:* *string

---

##### `ReleaseDate`<sup>Required</sup> <a name="ReleaseDate" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.releaseDate"></a>

```go
func ReleaseDate() *string
```

- *Type:* *string

---

##### `VersionStatus`<sup>Required</sup> <a name="VersionStatus" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.versionStatus"></a>

```go
func VersionStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsEksClusterVersionsClusterVersions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersions">DataAwsEksClusterVersionsClusterVersions</a>

---



