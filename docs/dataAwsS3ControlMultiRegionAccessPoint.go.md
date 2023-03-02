# `dataAwsS3ControlMultiRegionAccessPoint` Submodule <a name="`dataAwsS3ControlMultiRegionAccessPoint` Submodule" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsS3ControlMultiRegionAccessPoint <a name="DataAwsS3ControlMultiRegionAccessPoint" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/s3control_multi_region_access_point aws_s3control_multi_region_access_point}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawss3controlmultiregionaccesspoint"

dataawss3controlmultiregionaccesspoint.NewDataAwsS3ControlMultiRegionAccessPoint(scope Construct, id *string, config DataAwsS3ControlMultiRegionAccessPointConfig) DataAwsS3ControlMultiRegionAccessPoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig">DataAwsS3ControlMultiRegionAccessPointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig">DataAwsS3ControlMultiRegionAccessPointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawss3controlmultiregionaccesspoint"

dataawss3controlmultiregionaccesspoint.DataAwsS3ControlMultiRegionAccessPoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawss3controlmultiregionaccesspoint"

dataawss3controlmultiregionaccesspoint.DataAwsS3ControlMultiRegionAccessPoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawss3controlmultiregionaccesspoint"

dataawss3controlmultiregionaccesspoint.DataAwsS3ControlMultiRegionAccessPoint_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.publicAccessBlock">PublicAccessBlock</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList">DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.regions">Regions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList">DataAwsS3ControlMultiRegionAccessPointRegionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `PublicAccessBlock`<sup>Required</sup> <a name="PublicAccessBlock" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.publicAccessBlock"></a>

```go
func PublicAccessBlock() DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList">DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList</a>

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.regions"></a>

```go
func Regions() DataAwsS3ControlMultiRegionAccessPointRegionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList">DataAwsS3ControlMultiRegionAccessPointRegionsList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsS3ControlMultiRegionAccessPointConfig <a name="DataAwsS3ControlMultiRegionAccessPointConfig" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawss3controlmultiregionaccesspoint"

&dataawss3controlmultiregionaccesspoint.DataAwsS3ControlMultiRegionAccessPointConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AccountId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3control_multi_region_access_point#name DataAwsS3ControlMultiRegionAccessPoint#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3control_multi_region_access_point#account_id DataAwsS3ControlMultiRegionAccessPoint#account_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3control_multi_region_access_point#id DataAwsS3ControlMultiRegionAccessPoint#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3control_multi_region_access_point#name DataAwsS3ControlMultiRegionAccessPoint#name}.

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3control_multi_region_access_point#account_id DataAwsS3ControlMultiRegionAccessPoint#account_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3control_multi_region_access_point#id DataAwsS3ControlMultiRegionAccessPoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsS3ControlMultiRegionAccessPointPublicAccessBlock <a name="DataAwsS3ControlMultiRegionAccessPointPublicAccessBlock" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlock"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlock.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawss3controlmultiregionaccesspoint"

&dataawss3controlmultiregionaccesspoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlock {

}
```


### DataAwsS3ControlMultiRegionAccessPointRegions <a name="DataAwsS3ControlMultiRegionAccessPointRegions" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawss3controlmultiregionaccesspoint"

&dataawss3controlmultiregionaccesspoint.DataAwsS3ControlMultiRegionAccessPointRegions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList <a name="DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawss3controlmultiregionaccesspoint"

dataawss3controlmultiregionaccesspoint.NewDataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.get"></a>

```go
func Get(index *f64) DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference <a name="DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawss3controlmultiregionaccesspoint"

dataawss3controlmultiregionaccesspoint.NewDataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.blockPublicAcls">BlockPublicAcls</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.blockPublicPolicy">BlockPublicPolicy</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.ignorePublicAcls">IgnorePublicAcls</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.restrictPublicBuckets">RestrictPublicBuckets</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlock">DataAwsS3ControlMultiRegionAccessPointPublicAccessBlock</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BlockPublicAcls`<sup>Required</sup> <a name="BlockPublicAcls" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.blockPublicAcls"></a>

```go
func BlockPublicAcls() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `BlockPublicPolicy`<sup>Required</sup> <a name="BlockPublicPolicy" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.blockPublicPolicy"></a>

```go
func BlockPublicPolicy() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IgnorePublicAcls`<sup>Required</sup> <a name="IgnorePublicAcls" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.ignorePublicAcls"></a>

```go
func IgnorePublicAcls() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `RestrictPublicBuckets`<sup>Required</sup> <a name="RestrictPublicBuckets" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.restrictPublicBuckets"></a>

```go
func RestrictPublicBuckets() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsS3ControlMultiRegionAccessPointPublicAccessBlock
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlock">DataAwsS3ControlMultiRegionAccessPointPublicAccessBlock</a>

---


### DataAwsS3ControlMultiRegionAccessPointRegionsList <a name="DataAwsS3ControlMultiRegionAccessPointRegionsList" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawss3controlmultiregionaccesspoint"

dataawss3controlmultiregionaccesspoint.NewDataAwsS3ControlMultiRegionAccessPointRegionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsS3ControlMultiRegionAccessPointRegionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.get"></a>

```go
func Get(index *f64) DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference <a name="DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawss3controlmultiregionaccesspoint"

dataawss3controlmultiregionaccesspoint.NewDataAwsS3ControlMultiRegionAccessPointRegionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegions">DataAwsS3ControlMultiRegionAccessPointRegions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsS3ControlMultiRegionAccessPointRegions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegions">DataAwsS3ControlMultiRegionAccessPointRegions</a>

---



