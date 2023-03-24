# `dataAwsDocdbOrderableDbInstance` Submodule <a name="`dataAwsDocdbOrderableDbInstance` Submodule" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsDocdbOrderableDbInstance <a name="DataAwsDocdbOrderableDbInstance" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance aws_docdb_orderable_db_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdocdborderabledbinstance"

dataawsdocdborderabledbinstance.NewDataAwsDocdbOrderableDbInstance(scope Construct, id *string, config DataAwsDocdbOrderableDbInstanceConfig) DataAwsDocdbOrderableDbInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig">DataAwsDocdbOrderableDbInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig">DataAwsDocdbOrderableDbInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetEngine">ResetEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetEngineVersion">ResetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetInstanceClass">ResetInstanceClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetLicenseModel">ResetLicenseModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetPreferredInstanceClasses">ResetPreferredInstanceClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetVpc">ResetVpc</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetEngine` <a name="ResetEngine" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetEngine"></a>

```go
func ResetEngine()
```

##### `ResetEngineVersion` <a name="ResetEngineVersion" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetEngineVersion"></a>

```go
func ResetEngineVersion()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetInstanceClass` <a name="ResetInstanceClass" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetInstanceClass"></a>

```go
func ResetInstanceClass()
```

##### `ResetLicenseModel` <a name="ResetLicenseModel" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetLicenseModel"></a>

```go
func ResetLicenseModel()
```

##### `ResetPreferredInstanceClasses` <a name="ResetPreferredInstanceClasses" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetPreferredInstanceClasses"></a>

```go
func ResetPreferredInstanceClasses()
```

##### `ResetVpc` <a name="ResetVpc" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetVpc"></a>

```go
func ResetVpc()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdocdborderabledbinstance"

dataawsdocdborderabledbinstance.DataAwsDocdbOrderableDbInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdocdborderabledbinstance"

dataawsdocdborderabledbinstance.DataAwsDocdbOrderableDbInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdocdborderabledbinstance"

dataawsdocdborderabledbinstance.DataAwsDocdbOrderableDbInstance_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.availabilityZones">AvailabilityZones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.engineInput">EngineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.engineVersionInput">EngineVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.instanceClassInput">InstanceClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.licenseModelInput">LicenseModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.preferredInstanceClassesInput">PreferredInstanceClassesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.vpcInput">VpcInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.engine">Engine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.instanceClass">InstanceClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.licenseModel">LicenseModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.preferredInstanceClasses">PreferredInstanceClasses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.vpc">Vpc</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.availabilityZones"></a>

```go
func AvailabilityZones() *[]*string
```

- *Type:* *[]*string

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.engineInput"></a>

```go
func EngineInput() *string
```

- *Type:* *string

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.engineVersionInput"></a>

```go
func EngineVersionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceClassInput`<sup>Optional</sup> <a name="InstanceClassInput" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.instanceClassInput"></a>

```go
func InstanceClassInput() *string
```

- *Type:* *string

---

##### `LicenseModelInput`<sup>Optional</sup> <a name="LicenseModelInput" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.licenseModelInput"></a>

```go
func LicenseModelInput() *string
```

- *Type:* *string

---

##### `PreferredInstanceClassesInput`<sup>Optional</sup> <a name="PreferredInstanceClassesInput" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.preferredInstanceClassesInput"></a>

```go
func PreferredInstanceClassesInput() *[]*string
```

- *Type:* *[]*string

---

##### `VpcInput`<sup>Optional</sup> <a name="VpcInput" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.vpcInput"></a>

```go
func VpcInput() interface{}
```

- *Type:* interface{}

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.engine"></a>

```go
func Engine() *string
```

- *Type:* *string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.engineVersion"></a>

```go
func EngineVersion() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceClass`<sup>Required</sup> <a name="InstanceClass" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.instanceClass"></a>

```go
func InstanceClass() *string
```

- *Type:* *string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.licenseModel"></a>

```go
func LicenseModel() *string
```

- *Type:* *string

---

##### `PreferredInstanceClasses`<sup>Required</sup> <a name="PreferredInstanceClasses" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.preferredInstanceClasses"></a>

```go
func PreferredInstanceClasses() *[]*string
```

- *Type:* *[]*string

---

##### `Vpc`<sup>Required</sup> <a name="Vpc" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.vpc"></a>

```go
func Vpc() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsDocdbOrderableDbInstanceConfig <a name="DataAwsDocdbOrderableDbInstanceConfig" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdocdborderabledbinstance"

&dataawsdocdborderabledbinstance.DataAwsDocdbOrderableDbInstanceConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Engine: *string,
	EngineVersion: *string,
	Id: *string,
	InstanceClass: *string,
	LicenseModel: *string,
	PreferredInstanceClasses: *[]*string,
	Vpc: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.engine">Engine</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#engine DataAwsDocdbOrderableDbInstance#engine}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#engine_version DataAwsDocdbOrderableDbInstance#engine_version}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#id DataAwsDocdbOrderableDbInstance#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.instanceClass">InstanceClass</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#instance_class DataAwsDocdbOrderableDbInstance#instance_class}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.licenseModel">LicenseModel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#license_model DataAwsDocdbOrderableDbInstance#license_model}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.preferredInstanceClasses">PreferredInstanceClasses</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#preferred_instance_classes DataAwsDocdbOrderableDbInstance#preferred_instance_classes}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.vpc">Vpc</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#vpc DataAwsDocdbOrderableDbInstance#vpc}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Engine`<sup>Optional</sup> <a name="Engine" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.engine"></a>

```go
Engine *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#engine DataAwsDocdbOrderableDbInstance#engine}.

---

##### `EngineVersion`<sup>Optional</sup> <a name="EngineVersion" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.engineVersion"></a>

```go
EngineVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#engine_version DataAwsDocdbOrderableDbInstance#engine_version}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#id DataAwsDocdbOrderableDbInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceClass`<sup>Optional</sup> <a name="InstanceClass" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.instanceClass"></a>

```go
InstanceClass *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#instance_class DataAwsDocdbOrderableDbInstance#instance_class}.

---

##### `LicenseModel`<sup>Optional</sup> <a name="LicenseModel" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.licenseModel"></a>

```go
LicenseModel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#license_model DataAwsDocdbOrderableDbInstance#license_model}.

---

##### `PreferredInstanceClasses`<sup>Optional</sup> <a name="PreferredInstanceClasses" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.preferredInstanceClasses"></a>

```go
PreferredInstanceClasses *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#preferred_instance_classes DataAwsDocdbOrderableDbInstance#preferred_instance_classes}.

---

##### `Vpc`<sup>Optional</sup> <a name="Vpc" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.vpc"></a>

```go
Vpc interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#vpc DataAwsDocdbOrderableDbInstance#vpc}.

---



