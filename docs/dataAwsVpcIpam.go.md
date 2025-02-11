# `dataAwsVpcIpam` Submodule <a name="`dataAwsVpcIpam` Submodule" id="@cdktf/provider-aws.dataAwsVpcIpam"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsVpcIpam <a name="DataAwsVpcIpam" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/vpc_ipam aws_vpc_ipam}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsvpcipam"

dataawsvpcipam.NewDataAwsVpcIpam(scope Construct, id *string, config DataAwsVpcIpamConfig) DataAwsVpcIpam
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamConfig">DataAwsVpcIpamConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamConfig">DataAwsVpcIpamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsVpcIpam resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsvpcipam"

dataawsvpcipam.DataAwsVpcIpam_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsvpcipam"

dataawsvpcipam.DataAwsVpcIpam_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsvpcipam"

dataawsvpcipam.DataAwsVpcIpam_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsvpcipam"

dataawsvpcipam.DataAwsVpcIpam_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAwsVpcIpam resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsVpcIpam to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsVpcIpam that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/vpc_ipam#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsVpcIpam to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.defaultResourceDiscoveryAssociationId">DefaultResourceDiscoveryAssociationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.defaultResourceDiscoveryId">DefaultResourceDiscoveryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.enablePrivateGua">EnablePrivateGua</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.ipamRegion">IpamRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.operatingRegions">OperatingRegions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList">DataAwsVpcIpamOperatingRegionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.ownerId">OwnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.privateDefaultScopeId">PrivateDefaultScopeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.publicDefaultScopeId">PublicDefaultScopeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.resourceDiscoveryAssociationCount">ResourceDiscoveryAssociationCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.scopeCount">ScopeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.stateMessage">StateMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.tags">Tags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.tier">Tier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DefaultResourceDiscoveryAssociationId`<sup>Required</sup> <a name="DefaultResourceDiscoveryAssociationId" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.defaultResourceDiscoveryAssociationId"></a>

```go
func DefaultResourceDiscoveryAssociationId() *string
```

- *Type:* *string

---

##### `DefaultResourceDiscoveryId`<sup>Required</sup> <a name="DefaultResourceDiscoveryId" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.defaultResourceDiscoveryId"></a>

```go
func DefaultResourceDiscoveryId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EnablePrivateGua`<sup>Required</sup> <a name="EnablePrivateGua" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.enablePrivateGua"></a>

```go
func EnablePrivateGua() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IpamRegion`<sup>Required</sup> <a name="IpamRegion" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.ipamRegion"></a>

```go
func IpamRegion() *string
```

- *Type:* *string

---

##### `OperatingRegions`<sup>Required</sup> <a name="OperatingRegions" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.operatingRegions"></a>

```go
func OperatingRegions() DataAwsVpcIpamOperatingRegionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList">DataAwsVpcIpamOperatingRegionsList</a>

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.ownerId"></a>

```go
func OwnerId() *string
```

- *Type:* *string

---

##### `PrivateDefaultScopeId`<sup>Required</sup> <a name="PrivateDefaultScopeId" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.privateDefaultScopeId"></a>

```go
func PrivateDefaultScopeId() *string
```

- *Type:* *string

---

##### `PublicDefaultScopeId`<sup>Required</sup> <a name="PublicDefaultScopeId" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.publicDefaultScopeId"></a>

```go
func PublicDefaultScopeId() *string
```

- *Type:* *string

---

##### `ResourceDiscoveryAssociationCount`<sup>Required</sup> <a name="ResourceDiscoveryAssociationCount" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.resourceDiscoveryAssociationCount"></a>

```go
func ResourceDiscoveryAssociationCount() *f64
```

- *Type:* *f64

---

##### `ScopeCount`<sup>Required</sup> <a name="ScopeCount" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.scopeCount"></a>

```go
func ScopeCount() *f64
```

- *Type:* *f64

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.stateMessage"></a>

```go
func StateMessage() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.tier"></a>

```go
func Tier() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpam.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsVpcIpamConfig <a name="DataAwsVpcIpamConfig" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsvpcipam"

&dataawsvpcipam.DataAwsVpcIpamConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/vpc_ipam#id DataAwsVpcIpam#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/vpc_ipam#id DataAwsVpcIpam#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsVpcIpamOperatingRegions <a name="DataAwsVpcIpamOperatingRegions" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsvpcipam"

&dataawsvpcipam.DataAwsVpcIpamOperatingRegions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsVpcIpamOperatingRegionsList <a name="DataAwsVpcIpamOperatingRegionsList" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsvpcipam"

dataawsvpcipam.NewDataAwsVpcIpamOperatingRegionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsVpcIpamOperatingRegionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList.get"></a>

```go
func Get(index *f64) DataAwsVpcIpamOperatingRegionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsVpcIpamOperatingRegionsOutputReference <a name="DataAwsVpcIpamOperatingRegionsOutputReference" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsvpcipam"

dataawsvpcipam.NewDataAwsVpcIpamOperatingRegionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsVpcIpamOperatingRegionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.property.regionName">RegionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegions">DataAwsVpcIpamOperatingRegions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RegionName`<sup>Required</sup> <a name="RegionName" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.property.regionName"></a>

```go
func RegionName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsVpcIpamOperatingRegions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpam.DataAwsVpcIpamOperatingRegions">DataAwsVpcIpamOperatingRegions</a>

---



