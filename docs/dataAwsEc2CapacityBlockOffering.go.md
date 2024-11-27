# `dataAwsEc2CapacityBlockOffering` Submodule <a name="`dataAwsEc2CapacityBlockOffering` Submodule" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2CapacityBlockOffering <a name="DataAwsEc2CapacityBlockOffering" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/data-sources/ec2_capacity_block_offering aws_ec2_capacity_block_offering}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsec2capacityblockoffering"

dataawsec2capacityblockoffering.NewDataAwsEc2CapacityBlockOffering(scope Construct, id *string, config DataAwsEc2CapacityBlockOfferingConfig) DataAwsEc2CapacityBlockOffering
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig">DataAwsEc2CapacityBlockOfferingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig">DataAwsEc2CapacityBlockOfferingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.resetEndDateRange">ResetEndDateRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.resetStartDateRange">ResetStartDateRange</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetEndDateRange` <a name="ResetEndDateRange" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.resetEndDateRange"></a>

```go
func ResetEndDateRange()
```

##### `ResetStartDateRange` <a name="ResetStartDateRange" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.resetStartDateRange"></a>

```go
func ResetStartDateRange()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsEc2CapacityBlockOffering resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsec2capacityblockoffering"

dataawsec2capacityblockoffering.DataAwsEc2CapacityBlockOffering_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsec2capacityblockoffering"

dataawsec2capacityblockoffering.DataAwsEc2CapacityBlockOffering_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsec2capacityblockoffering"

dataawsec2capacityblockoffering.DataAwsEc2CapacityBlockOffering_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsec2capacityblockoffering"

dataawsec2capacityblockoffering.DataAwsEc2CapacityBlockOffering_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAwsEc2CapacityBlockOffering resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsEc2CapacityBlockOffering to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsEc2CapacityBlockOffering that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/data-sources/ec2_capacity_block_offering#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsEc2CapacityBlockOffering to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.capacityBlockOfferingId">CapacityBlockOfferingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.currencyCode">CurrencyCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.tenancy">Tenancy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.upfrontFee">UpfrontFee</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.capacityDurationHoursInput">CapacityDurationHoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.endDateRangeInput">EndDateRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.instanceCountInput">InstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.startDateRangeInput">StartDateRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.capacityDurationHours">CapacityDurationHours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.endDateRange">EndDateRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.startDateRange">StartDateRange</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `CapacityBlockOfferingId`<sup>Required</sup> <a name="CapacityBlockOfferingId" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.capacityBlockOfferingId"></a>

```go
func CapacityBlockOfferingId() *string
```

- *Type:* *string

---

##### `CurrencyCode`<sup>Required</sup> <a name="CurrencyCode" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.currencyCode"></a>

```go
func CurrencyCode() *string
```

- *Type:* *string

---

##### `Tenancy`<sup>Required</sup> <a name="Tenancy" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.tenancy"></a>

```go
func Tenancy() *string
```

- *Type:* *string

---

##### `UpfrontFee`<sup>Required</sup> <a name="UpfrontFee" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.upfrontFee"></a>

```go
func UpfrontFee() *string
```

- *Type:* *string

---

##### `CapacityDurationHoursInput`<sup>Optional</sup> <a name="CapacityDurationHoursInput" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.capacityDurationHoursInput"></a>

```go
func CapacityDurationHoursInput() *f64
```

- *Type:* *f64

---

##### `EndDateRangeInput`<sup>Optional</sup> <a name="EndDateRangeInput" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.endDateRangeInput"></a>

```go
func EndDateRangeInput() *string
```

- *Type:* *string

---

##### `InstanceCountInput`<sup>Optional</sup> <a name="InstanceCountInput" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.instanceCountInput"></a>

```go
func InstanceCountInput() *f64
```

- *Type:* *f64

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `StartDateRangeInput`<sup>Optional</sup> <a name="StartDateRangeInput" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.startDateRangeInput"></a>

```go
func StartDateRangeInput() *string
```

- *Type:* *string

---

##### `CapacityDurationHours`<sup>Required</sup> <a name="CapacityDurationHours" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.capacityDurationHours"></a>

```go
func CapacityDurationHours() *f64
```

- *Type:* *f64

---

##### `EndDateRange`<sup>Required</sup> <a name="EndDateRange" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.endDateRange"></a>

```go
func EndDateRange() *string
```

- *Type:* *string

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.instanceCount"></a>

```go
func InstanceCount() *f64
```

- *Type:* *f64

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `StartDateRange`<sup>Required</sup> <a name="StartDateRange" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.startDateRange"></a>

```go
func StartDateRange() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2CapacityBlockOfferingConfig <a name="DataAwsEc2CapacityBlockOfferingConfig" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsec2capacityblockoffering"

&dataawsec2capacityblockoffering.DataAwsEc2CapacityBlockOfferingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CapacityDurationHours: *f64,
	InstanceCount: *f64,
	InstanceType: *string,
	EndDateRange: *string,
	StartDateRange: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.capacityDurationHours">CapacityDurationHours</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/data-sources/ec2_capacity_block_offering#capacity_duration_hours DataAwsEc2CapacityBlockOffering#capacity_duration_hours}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/data-sources/ec2_capacity_block_offering#instance_count DataAwsEc2CapacityBlockOffering#instance_count}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.instanceType">InstanceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/data-sources/ec2_capacity_block_offering#instance_type DataAwsEc2CapacityBlockOffering#instance_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.endDateRange">EndDateRange</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/data-sources/ec2_capacity_block_offering#end_date_range DataAwsEc2CapacityBlockOffering#end_date_range}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.startDateRange">StartDateRange</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/data-sources/ec2_capacity_block_offering#start_date_range DataAwsEc2CapacityBlockOffering#start_date_range}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CapacityDurationHours`<sup>Required</sup> <a name="CapacityDurationHours" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.capacityDurationHours"></a>

```go
CapacityDurationHours *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/data-sources/ec2_capacity_block_offering#capacity_duration_hours DataAwsEc2CapacityBlockOffering#capacity_duration_hours}.

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.instanceCount"></a>

```go
InstanceCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/data-sources/ec2_capacity_block_offering#instance_count DataAwsEc2CapacityBlockOffering#instance_count}.

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/data-sources/ec2_capacity_block_offering#instance_type DataAwsEc2CapacityBlockOffering#instance_type}.

---

##### `EndDateRange`<sup>Optional</sup> <a name="EndDateRange" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.endDateRange"></a>

```go
EndDateRange *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/data-sources/ec2_capacity_block_offering#end_date_range DataAwsEc2CapacityBlockOffering#end_date_range}.

---

##### `StartDateRange`<sup>Optional</sup> <a name="StartDateRange" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.startDateRange"></a>

```go
StartDateRange *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/data-sources/ec2_capacity_block_offering#start_date_range DataAwsEc2CapacityBlockOffering#start_date_range}.

---



