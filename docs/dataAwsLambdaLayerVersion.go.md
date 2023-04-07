# `dataAwsLambdaLayerVersion` Submodule <a name="`dataAwsLambdaLayerVersion` Submodule" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsLambdaLayerVersion <a name="DataAwsLambdaLayerVersion" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version aws_lambda_layer_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslambdalayerversion"

dataawslambdalayerversion.NewDataAwsLambdaLayerVersion(scope Construct, id *string, config DataAwsLambdaLayerVersionConfig) DataAwsLambdaLayerVersion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig">DataAwsLambdaLayerVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig">DataAwsLambdaLayerVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetCompatibleArchitecture">ResetCompatibleArchitecture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetCompatibleRuntime">ResetCompatibleRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetCompatibleArchitecture` <a name="ResetCompatibleArchitecture" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetCompatibleArchitecture"></a>

```go
func ResetCompatibleArchitecture()
```

##### `ResetCompatibleRuntime` <a name="ResetCompatibleRuntime" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetCompatibleRuntime"></a>

```go
func ResetCompatibleRuntime()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetId"></a>

```go
func ResetId()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetVersion"></a>

```go
func ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslambdalayerversion"

dataawslambdalayerversion.DataAwsLambdaLayerVersion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslambdalayerversion"

dataawslambdalayerversion.DataAwsLambdaLayerVersion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslambdalayerversion"

dataawslambdalayerversion.DataAwsLambdaLayerVersion_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleArchitectures">CompatibleArchitectures</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleRuntimes">CompatibleRuntimes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.createdDate">CreatedDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.layerArn">LayerArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.licenseInfo">LicenseInfo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.signingJobArn">SigningJobArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.signingProfileVersionArn">SigningProfileVersionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.sourceCodeHash">SourceCodeHash</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.sourceCodeSize">SourceCodeSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleArchitectureInput">CompatibleArchitectureInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleRuntimeInput">CompatibleRuntimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.layerNameInput">LayerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.versionInput">VersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleArchitecture">CompatibleArchitecture</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleRuntime">CompatibleRuntime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.layerName">LayerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.version">Version</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CompatibleArchitectures`<sup>Required</sup> <a name="CompatibleArchitectures" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleArchitectures"></a>

```go
func CompatibleArchitectures() *[]*string
```

- *Type:* *[]*string

---

##### `CompatibleRuntimes`<sup>Required</sup> <a name="CompatibleRuntimes" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleRuntimes"></a>

```go
func CompatibleRuntimes() *[]*string
```

- *Type:* *[]*string

---

##### `CreatedDate`<sup>Required</sup> <a name="CreatedDate" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.createdDate"></a>

```go
func CreatedDate() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `LayerArn`<sup>Required</sup> <a name="LayerArn" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.layerArn"></a>

```go
func LayerArn() *string
```

- *Type:* *string

---

##### `LicenseInfo`<sup>Required</sup> <a name="LicenseInfo" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.licenseInfo"></a>

```go
func LicenseInfo() *string
```

- *Type:* *string

---

##### `SigningJobArn`<sup>Required</sup> <a name="SigningJobArn" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.signingJobArn"></a>

```go
func SigningJobArn() *string
```

- *Type:* *string

---

##### `SigningProfileVersionArn`<sup>Required</sup> <a name="SigningProfileVersionArn" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.signingProfileVersionArn"></a>

```go
func SigningProfileVersionArn() *string
```

- *Type:* *string

---

##### `SourceCodeHash`<sup>Required</sup> <a name="SourceCodeHash" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.sourceCodeHash"></a>

```go
func SourceCodeHash() *string
```

- *Type:* *string

---

##### `SourceCodeSize`<sup>Required</sup> <a name="SourceCodeSize" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.sourceCodeSize"></a>

```go
func SourceCodeSize() *f64
```

- *Type:* *f64

---

##### `CompatibleArchitectureInput`<sup>Optional</sup> <a name="CompatibleArchitectureInput" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleArchitectureInput"></a>

```go
func CompatibleArchitectureInput() *string
```

- *Type:* *string

---

##### `CompatibleRuntimeInput`<sup>Optional</sup> <a name="CompatibleRuntimeInput" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleRuntimeInput"></a>

```go
func CompatibleRuntimeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LayerNameInput`<sup>Optional</sup> <a name="LayerNameInput" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.layerNameInput"></a>

```go
func LayerNameInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.versionInput"></a>

```go
func VersionInput() *f64
```

- *Type:* *f64

---

##### `CompatibleArchitecture`<sup>Required</sup> <a name="CompatibleArchitecture" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleArchitecture"></a>

```go
func CompatibleArchitecture() *string
```

- *Type:* *string

---

##### `CompatibleRuntime`<sup>Required</sup> <a name="CompatibleRuntime" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleRuntime"></a>

```go
func CompatibleRuntime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LayerName`<sup>Required</sup> <a name="LayerName" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.layerName"></a>

```go
func LayerName() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsLambdaLayerVersionConfig <a name="DataAwsLambdaLayerVersionConfig" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslambdalayerversion"

&dataawslambdalayerversion.DataAwsLambdaLayerVersionConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	LayerName: *string,
	CompatibleArchitecture: *string,
	CompatibleRuntime: *string,
	Id: *string,
	Version: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.layerName">LayerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#layer_name DataAwsLambdaLayerVersion#layer_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.compatibleArchitecture">CompatibleArchitecture</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#compatible_architecture DataAwsLambdaLayerVersion#compatible_architecture}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.compatibleRuntime">CompatibleRuntime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#compatible_runtime DataAwsLambdaLayerVersion#compatible_runtime}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#id DataAwsLambdaLayerVersion#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.version">Version</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#version DataAwsLambdaLayerVersion#version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LayerName`<sup>Required</sup> <a name="LayerName" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.layerName"></a>

```go
LayerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#layer_name DataAwsLambdaLayerVersion#layer_name}.

---

##### `CompatibleArchitecture`<sup>Optional</sup> <a name="CompatibleArchitecture" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.compatibleArchitecture"></a>

```go
CompatibleArchitecture *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#compatible_architecture DataAwsLambdaLayerVersion#compatible_architecture}.

---

##### `CompatibleRuntime`<sup>Optional</sup> <a name="CompatibleRuntime" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.compatibleRuntime"></a>

```go
CompatibleRuntime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#compatible_runtime DataAwsLambdaLayerVersion#compatible_runtime}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#id DataAwsLambdaLayerVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.version"></a>

```go
Version *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#version DataAwsLambdaLayerVersion#version}.

---



