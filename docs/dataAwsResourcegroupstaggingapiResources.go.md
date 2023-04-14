# `dataAwsResourcegroupstaggingapiResources` Submodule <a name="`dataAwsResourcegroupstaggingapiResources` Submodule" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsResourcegroupstaggingapiResources <a name="DataAwsResourcegroupstaggingapiResources" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources aws_resourcegroupstaggingapi_resources}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsresourcegroupstaggingapiresources"

dataawsresourcegroupstaggingapiresources.NewDataAwsResourcegroupstaggingapiResources(scope Construct, id *string, config DataAwsResourcegroupstaggingapiResourcesConfig) DataAwsResourcegroupstaggingapiResources
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig">DataAwsResourcegroupstaggingapiResourcesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig">DataAwsResourcegroupstaggingapiResourcesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.putTagFilter">PutTagFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.resetExcludeCompliantResources">ResetExcludeCompliantResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.resetIncludeComplianceDetails">ResetIncludeComplianceDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.resetResourceArnList">ResetResourceArnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.resetResourceTypeFilters">ResetResourceTypeFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.resetTagFilter">ResetTagFilter</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTagFilter` <a name="PutTagFilter" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.putTagFilter"></a>

```go
func PutTagFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.putTagFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetExcludeCompliantResources` <a name="ResetExcludeCompliantResources" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.resetExcludeCompliantResources"></a>

```go
func ResetExcludeCompliantResources()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.resetId"></a>

```go
func ResetId()
```

##### `ResetIncludeComplianceDetails` <a name="ResetIncludeComplianceDetails" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.resetIncludeComplianceDetails"></a>

```go
func ResetIncludeComplianceDetails()
```

##### `ResetResourceArnList` <a name="ResetResourceArnList" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.resetResourceArnList"></a>

```go
func ResetResourceArnList()
```

##### `ResetResourceTypeFilters` <a name="ResetResourceTypeFilters" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.resetResourceTypeFilters"></a>

```go
func ResetResourceTypeFilters()
```

##### `ResetTagFilter` <a name="ResetTagFilter" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.resetTagFilter"></a>

```go
func ResetTagFilter()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsresourcegroupstaggingapiresources"

dataawsresourcegroupstaggingapiresources.DataAwsResourcegroupstaggingapiResources_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsresourcegroupstaggingapiresources"

dataawsresourcegroupstaggingapiresources.DataAwsResourcegroupstaggingapiResources_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsresourcegroupstaggingapiresources"

dataawsresourcegroupstaggingapiresources.DataAwsResourcegroupstaggingapiResources_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.resourceTagMappingList">ResourceTagMappingList</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList">DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.tagFilter">TagFilter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList">DataAwsResourcegroupstaggingapiResourcesTagFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.excludeCompliantResourcesInput">ExcludeCompliantResourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.includeComplianceDetailsInput">IncludeComplianceDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.resourceArnListInput">ResourceArnListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.resourceTypeFiltersInput">ResourceTypeFiltersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.tagFilterInput">TagFilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.excludeCompliantResources">ExcludeCompliantResources</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.includeComplianceDetails">IncludeComplianceDetails</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.resourceArnList">ResourceArnList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.resourceTypeFilters">ResourceTypeFilters</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ResourceTagMappingList`<sup>Required</sup> <a name="ResourceTagMappingList" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.resourceTagMappingList"></a>

```go
func ResourceTagMappingList() DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList">DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList</a>

---

##### `TagFilter`<sup>Required</sup> <a name="TagFilter" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.tagFilter"></a>

```go
func TagFilter() DataAwsResourcegroupstaggingapiResourcesTagFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList">DataAwsResourcegroupstaggingapiResourcesTagFilterList</a>

---

##### `ExcludeCompliantResourcesInput`<sup>Optional</sup> <a name="ExcludeCompliantResourcesInput" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.excludeCompliantResourcesInput"></a>

```go
func ExcludeCompliantResourcesInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IncludeComplianceDetailsInput`<sup>Optional</sup> <a name="IncludeComplianceDetailsInput" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.includeComplianceDetailsInput"></a>

```go
func IncludeComplianceDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceArnListInput`<sup>Optional</sup> <a name="ResourceArnListInput" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.resourceArnListInput"></a>

```go
func ResourceArnListInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceTypeFiltersInput`<sup>Optional</sup> <a name="ResourceTypeFiltersInput" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.resourceTypeFiltersInput"></a>

```go
func ResourceTypeFiltersInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagFilterInput`<sup>Optional</sup> <a name="TagFilterInput" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.tagFilterInput"></a>

```go
func TagFilterInput() interface{}
```

- *Type:* interface{}

---

##### `ExcludeCompliantResources`<sup>Required</sup> <a name="ExcludeCompliantResources" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.excludeCompliantResources"></a>

```go
func ExcludeCompliantResources() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IncludeComplianceDetails`<sup>Required</sup> <a name="IncludeComplianceDetails" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.includeComplianceDetails"></a>

```go
func IncludeComplianceDetails() interface{}
```

- *Type:* interface{}

---

##### `ResourceArnList`<sup>Required</sup> <a name="ResourceArnList" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.resourceArnList"></a>

```go
func ResourceArnList() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceTypeFilters`<sup>Required</sup> <a name="ResourceTypeFilters" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.resourceTypeFilters"></a>

```go
func ResourceTypeFilters() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsResourcegroupstaggingapiResourcesConfig <a name="DataAwsResourcegroupstaggingapiResourcesConfig" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsresourcegroupstaggingapiresources"

&dataawsresourcegroupstaggingapiresources.DataAwsResourcegroupstaggingapiResourcesConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ExcludeCompliantResources: interface{},
	Id: *string,
	IncludeComplianceDetails: interface{},
	ResourceArnList: *[]*string,
	ResourceTypeFilters: *[]*string,
	TagFilter: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.excludeCompliantResources">ExcludeCompliantResources</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources#exclude_compliant_resources DataAwsResourcegroupstaggingapiResources#exclude_compliant_resources}. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources#id DataAwsResourcegroupstaggingapiResources#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.includeComplianceDetails">IncludeComplianceDetails</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources#include_compliance_details DataAwsResourcegroupstaggingapiResources#include_compliance_details}. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.resourceArnList">ResourceArnList</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources#resource_arn_list DataAwsResourcegroupstaggingapiResources#resource_arn_list}. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.resourceTypeFilters">ResourceTypeFilters</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources#resource_type_filters DataAwsResourcegroupstaggingapiResources#resource_type_filters}. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.tagFilter">TagFilter</a></code> | <code>interface{}</code> | tag_filter block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExcludeCompliantResources`<sup>Optional</sup> <a name="ExcludeCompliantResources" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.excludeCompliantResources"></a>

```go
ExcludeCompliantResources interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources#exclude_compliant_resources DataAwsResourcegroupstaggingapiResources#exclude_compliant_resources}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources#id DataAwsResourcegroupstaggingapiResources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeComplianceDetails`<sup>Optional</sup> <a name="IncludeComplianceDetails" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.includeComplianceDetails"></a>

```go
IncludeComplianceDetails interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources#include_compliance_details DataAwsResourcegroupstaggingapiResources#include_compliance_details}.

---

##### `ResourceArnList`<sup>Optional</sup> <a name="ResourceArnList" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.resourceArnList"></a>

```go
ResourceArnList *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources#resource_arn_list DataAwsResourcegroupstaggingapiResources#resource_arn_list}.

---

##### `ResourceTypeFilters`<sup>Optional</sup> <a name="ResourceTypeFilters" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.resourceTypeFilters"></a>

```go
ResourceTypeFilters *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources#resource_type_filters DataAwsResourcegroupstaggingapiResources#resource_type_filters}.

---

##### `TagFilter`<sup>Optional</sup> <a name="TagFilter" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.tagFilter"></a>

```go
TagFilter interface{}
```

- *Type:* interface{}

tag_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources#tag_filter DataAwsResourcegroupstaggingapiResources#tag_filter}

---

### DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList <a name="DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsresourcegroupstaggingapiresources"

&dataawsresourcegroupstaggingapiresources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList {

}
```


### DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails <a name="DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsresourcegroupstaggingapiresources"

&dataawsresourcegroupstaggingapiresources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails {

}
```


### DataAwsResourcegroupstaggingapiResourcesTagFilter <a name="DataAwsResourcegroupstaggingapiResourcesTagFilter" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsresourcegroupstaggingapiresources"

&dataawsresourcegroupstaggingapiresources.DataAwsResourcegroupstaggingapiResourcesTagFilter {
	Key: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilter.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources#key DataAwsResourcegroupstaggingapiResources#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources#values DataAwsResourcegroupstaggingapiResources#values}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilter.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources#key DataAwsResourcegroupstaggingapiResources#key}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources#values DataAwsResourcegroupstaggingapiResources#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList <a name="DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsresourcegroupstaggingapiresources"

dataawsresourcegroupstaggingapiresources.NewDataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList.get"></a>

```go
func Get(index *f64) DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference <a name="DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsresourcegroupstaggingapiresources"

dataawsresourcegroupstaggingapiresources.NewDataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.property.complianceStatus">ComplianceStatus</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.property.keysWithNoncompliantValues">KeysWithNoncompliantValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.property.nonCompliantKeys">NonCompliantKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails">DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComplianceStatus`<sup>Required</sup> <a name="ComplianceStatus" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.property.complianceStatus"></a>

```go
func ComplianceStatus() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `KeysWithNoncompliantValues`<sup>Required</sup> <a name="KeysWithNoncompliantValues" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.property.keysWithNoncompliantValues"></a>

```go
func KeysWithNoncompliantValues() *[]*string
```

- *Type:* *[]*string

---

##### `NonCompliantKeys`<sup>Required</sup> <a name="NonCompliantKeys" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.property.nonCompliantKeys"></a>

```go
func NonCompliantKeys() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails">DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails</a>

---


### DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList <a name="DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsresourcegroupstaggingapiresources"

dataawsresourcegroupstaggingapiresources.NewDataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList.get"></a>

```go
func Get(index *f64) DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference <a name="DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsresourcegroupstaggingapiresources"

dataawsresourcegroupstaggingapiresources.NewDataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.property.complianceDetails">ComplianceDetails</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList">DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.property.tags">Tags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList">DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComplianceDetails`<sup>Required</sup> <a name="ComplianceDetails" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.property.complianceDetails"></a>

```go
func ComplianceDetails() DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList">DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList</a>

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.property.resourceArn"></a>

```go
func ResourceArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList">DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList</a>

---


### DataAwsResourcegroupstaggingapiResourcesTagFilterList <a name="DataAwsResourcegroupstaggingapiResourcesTagFilterList" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsresourcegroupstaggingapiresources"

dataawsresourcegroupstaggingapiresources.NewDataAwsResourcegroupstaggingapiResourcesTagFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsResourcegroupstaggingapiResourcesTagFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList.get"></a>

```go
func Get(index *f64) DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference <a name="DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsresourcegroupstaggingapiresources"

dataawsresourcegroupstaggingapiresources.NewDataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



