# `iotDomainConfiguration` Submodule <a name="`iotDomainConfiguration` Submodule" id="@cdktf/provider-aws.iotDomainConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotDomainConfiguration <a name="IotDomainConfiguration" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/iot_domain_configuration aws_iot_domain_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/iotdomainconfiguration"

iotdomainconfiguration.NewIotDomainConfiguration(scope Construct, id *string, config IotDomainConfigurationConfig) IotDomainConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig">IotDomainConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig">IotDomainConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.putAuthorizerConfig">PutAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.putTlsConfig">PutTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetAuthorizerConfig">ResetAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetDomainName">ResetDomainName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetServerCertificateArns">ResetServerCertificateArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetServiceType">ResetServiceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetTlsConfig">ResetTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetValidationCertificateArn">ResetValidationCertificateArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthorizerConfig` <a name="PutAuthorizerConfig" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.putAuthorizerConfig"></a>

```go
func PutAuthorizerConfig(value IotDomainConfigurationAuthorizerConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.putAuthorizerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig">IotDomainConfigurationAuthorizerConfig</a>

---

##### `PutTlsConfig` <a name="PutTlsConfig" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.putTlsConfig"></a>

```go
func PutTlsConfig(value IotDomainConfigurationTlsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.putTlsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfig">IotDomainConfigurationTlsConfig</a>

---

##### `ResetAuthorizerConfig` <a name="ResetAuthorizerConfig" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetAuthorizerConfig"></a>

```go
func ResetAuthorizerConfig()
```

##### `ResetDomainName` <a name="ResetDomainName" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetDomainName"></a>

```go
func ResetDomainName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetId"></a>

```go
func ResetId()
```

##### `ResetServerCertificateArns` <a name="ResetServerCertificateArns" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetServerCertificateArns"></a>

```go
func ResetServerCertificateArns()
```

##### `ResetServiceType` <a name="ResetServiceType" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetServiceType"></a>

```go
func ResetServiceType()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTlsConfig` <a name="ResetTlsConfig" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetTlsConfig"></a>

```go
func ResetTlsConfig()
```

##### `ResetValidationCertificateArn` <a name="ResetValidationCertificateArn" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetValidationCertificateArn"></a>

```go
func ResetValidationCertificateArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IotDomainConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/iotdomainconfiguration"

iotdomainconfiguration.IotDomainConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/iotdomainconfiguration"

iotdomainconfiguration.IotDomainConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/iotdomainconfiguration"

iotdomainconfiguration.IotDomainConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/iotdomainconfiguration"

iotdomainconfiguration.IotDomainConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a IotDomainConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IotDomainConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IotDomainConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/iot_domain_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the IotDomainConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.authorizerConfig">AuthorizerConfig</a></code> | <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference">IotDomainConfigurationAuthorizerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.domainType">DomainType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tlsConfig">TlsConfig</a></code> | <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference">IotDomainConfigurationTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.authorizerConfigInput">AuthorizerConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig">IotDomainConfigurationAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.domainNameInput">DomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.serverCertificateArnsInput">ServerCertificateArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.serviceTypeInput">ServiceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tlsConfigInput">TlsConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfig">IotDomainConfigurationTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.validationCertificateArnInput">ValidationCertificateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.serverCertificateArns">ServerCertificateArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.serviceType">ServiceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.validationCertificateArn">ValidationCertificateArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AuthorizerConfig`<sup>Required</sup> <a name="AuthorizerConfig" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.authorizerConfig"></a>

```go
func AuthorizerConfig() IotDomainConfigurationAuthorizerConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference">IotDomainConfigurationAuthorizerConfigOutputReference</a>

---

##### `DomainType`<sup>Required</sup> <a name="DomainType" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.domainType"></a>

```go
func DomainType() *string
```

- *Type:* *string

---

##### `TlsConfig`<sup>Required</sup> <a name="TlsConfig" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tlsConfig"></a>

```go
func TlsConfig() IotDomainConfigurationTlsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference">IotDomainConfigurationTlsConfigOutputReference</a>

---

##### `AuthorizerConfigInput`<sup>Optional</sup> <a name="AuthorizerConfigInput" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.authorizerConfigInput"></a>

```go
func AuthorizerConfigInput() IotDomainConfigurationAuthorizerConfig
```

- *Type:* <a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig">IotDomainConfigurationAuthorizerConfig</a>

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.domainNameInput"></a>

```go
func DomainNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ServerCertificateArnsInput`<sup>Optional</sup> <a name="ServerCertificateArnsInput" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.serverCertificateArnsInput"></a>

```go
func ServerCertificateArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceTypeInput`<sup>Optional</sup> <a name="ServiceTypeInput" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.serviceTypeInput"></a>

```go
func ServiceTypeInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TlsConfigInput`<sup>Optional</sup> <a name="TlsConfigInput" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tlsConfigInput"></a>

```go
func TlsConfigInput() IotDomainConfigurationTlsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfig">IotDomainConfigurationTlsConfig</a>

---

##### `ValidationCertificateArnInput`<sup>Optional</sup> <a name="ValidationCertificateArnInput" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.validationCertificateArnInput"></a>

```go
func ValidationCertificateArnInput() *string
```

- *Type:* *string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ServerCertificateArns`<sup>Required</sup> <a name="ServerCertificateArns" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.serverCertificateArns"></a>

```go
func ServerCertificateArns() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceType`<sup>Required</sup> <a name="ServiceType" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.serviceType"></a>

```go
func ServiceType() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ValidationCertificateArn`<sup>Required</sup> <a name="ValidationCertificateArn" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.validationCertificateArn"></a>

```go
func ValidationCertificateArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IotDomainConfigurationAuthorizerConfig <a name="IotDomainConfigurationAuthorizerConfig" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/iotdomainconfiguration"

&iotdomainconfiguration.IotDomainConfigurationAuthorizerConfig {
	AllowAuthorizerOverride: interface{},
	DefaultAuthorizerName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig.property.allowAuthorizerOverride">AllowAuthorizerOverride</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/iot_domain_configuration#allow_authorizer_override IotDomainConfiguration#allow_authorizer_override}. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig.property.defaultAuthorizerName">DefaultAuthorizerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/iot_domain_configuration#default_authorizer_name IotDomainConfiguration#default_authorizer_name}. |

---

##### `AllowAuthorizerOverride`<sup>Optional</sup> <a name="AllowAuthorizerOverride" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig.property.allowAuthorizerOverride"></a>

```go
AllowAuthorizerOverride interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/iot_domain_configuration#allow_authorizer_override IotDomainConfiguration#allow_authorizer_override}.

---

##### `DefaultAuthorizerName`<sup>Optional</sup> <a name="DefaultAuthorizerName" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig.property.defaultAuthorizerName"></a>

```go
DefaultAuthorizerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/iot_domain_configuration#default_authorizer_name IotDomainConfiguration#default_authorizer_name}.

---

### IotDomainConfigurationConfig <a name="IotDomainConfigurationConfig" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/iotdomainconfiguration"

&iotdomainconfiguration.IotDomainConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AuthorizerConfig: github.com/cdktf/cdktf-provider-aws-go/aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig,
	DomainName: *string,
	Id: *string,
	ServerCertificateArns: *[]*string,
	ServiceType: *string,
	Status: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	TlsConfig: github.com/cdktf/cdktf-provider-aws-go/aws.iotDomainConfiguration.IotDomainConfigurationTlsConfig,
	ValidationCertificateArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/iot_domain_configuration#name IotDomainConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.authorizerConfig">AuthorizerConfig</a></code> | <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig">IotDomainConfigurationAuthorizerConfig</a></code> | authorizer_config block. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.domainName">DomainName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/iot_domain_configuration#domain_name IotDomainConfiguration#domain_name}. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/iot_domain_configuration#id IotDomainConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.serverCertificateArns">ServerCertificateArns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/iot_domain_configuration#server_certificate_arns IotDomainConfiguration#server_certificate_arns}. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.serviceType">ServiceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/iot_domain_configuration#service_type IotDomainConfiguration#service_type}. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/iot_domain_configuration#status IotDomainConfiguration#status}. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/iot_domain_configuration#tags IotDomainConfiguration#tags}. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/iot_domain_configuration#tags_all IotDomainConfiguration#tags_all}. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.tlsConfig">TlsConfig</a></code> | <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfig">IotDomainConfigurationTlsConfig</a></code> | tls_config block. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.validationCertificateArn">ValidationCertificateArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/iot_domain_configuration#validation_certificate_arn IotDomainConfiguration#validation_certificate_arn}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/iot_domain_configuration#name IotDomainConfiguration#name}.

---

##### `AuthorizerConfig`<sup>Optional</sup> <a name="AuthorizerConfig" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.authorizerConfig"></a>

```go
AuthorizerConfig IotDomainConfigurationAuthorizerConfig
```

- *Type:* <a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig">IotDomainConfigurationAuthorizerConfig</a>

authorizer_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/iot_domain_configuration#authorizer_config IotDomainConfiguration#authorizer_config}

---

##### `DomainName`<sup>Optional</sup> <a name="DomainName" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.domainName"></a>

```go
DomainName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/iot_domain_configuration#domain_name IotDomainConfiguration#domain_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/iot_domain_configuration#id IotDomainConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ServerCertificateArns`<sup>Optional</sup> <a name="ServerCertificateArns" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.serverCertificateArns"></a>

```go
ServerCertificateArns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/iot_domain_configuration#server_certificate_arns IotDomainConfiguration#server_certificate_arns}.

---

##### `ServiceType`<sup>Optional</sup> <a name="ServiceType" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.serviceType"></a>

```go
ServiceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/iot_domain_configuration#service_type IotDomainConfiguration#service_type}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/iot_domain_configuration#status IotDomainConfiguration#status}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/iot_domain_configuration#tags IotDomainConfiguration#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/iot_domain_configuration#tags_all IotDomainConfiguration#tags_all}.

---

##### `TlsConfig`<sup>Optional</sup> <a name="TlsConfig" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.tlsConfig"></a>

```go
TlsConfig IotDomainConfigurationTlsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfig">IotDomainConfigurationTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/iot_domain_configuration#tls_config IotDomainConfiguration#tls_config}

---

##### `ValidationCertificateArn`<sup>Optional</sup> <a name="ValidationCertificateArn" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.validationCertificateArn"></a>

```go
ValidationCertificateArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/iot_domain_configuration#validation_certificate_arn IotDomainConfiguration#validation_certificate_arn}.

---

### IotDomainConfigurationTlsConfig <a name="IotDomainConfigurationTlsConfig" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/iotdomainconfiguration"

&iotdomainconfiguration.IotDomainConfigurationTlsConfig {
	SecurityPolicy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfig.property.securityPolicy">SecurityPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/iot_domain_configuration#security_policy IotDomainConfiguration#security_policy}. |

---

##### `SecurityPolicy`<sup>Optional</sup> <a name="SecurityPolicy" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfig.property.securityPolicy"></a>

```go
SecurityPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/iot_domain_configuration#security_policy IotDomainConfiguration#security_policy}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotDomainConfigurationAuthorizerConfigOutputReference <a name="IotDomainConfigurationAuthorizerConfigOutputReference" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/iotdomainconfiguration"

iotdomainconfiguration.NewIotDomainConfigurationAuthorizerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotDomainConfigurationAuthorizerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.resetAllowAuthorizerOverride">ResetAllowAuthorizerOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.resetDefaultAuthorizerName">ResetDefaultAuthorizerName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowAuthorizerOverride` <a name="ResetAllowAuthorizerOverride" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.resetAllowAuthorizerOverride"></a>

```go
func ResetAllowAuthorizerOverride()
```

##### `ResetDefaultAuthorizerName` <a name="ResetDefaultAuthorizerName" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.resetDefaultAuthorizerName"></a>

```go
func ResetDefaultAuthorizerName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.allowAuthorizerOverrideInput">AllowAuthorizerOverrideInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.defaultAuthorizerNameInput">DefaultAuthorizerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.allowAuthorizerOverride">AllowAuthorizerOverride</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.defaultAuthorizerName">DefaultAuthorizerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig">IotDomainConfigurationAuthorizerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowAuthorizerOverrideInput`<sup>Optional</sup> <a name="AllowAuthorizerOverrideInput" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.allowAuthorizerOverrideInput"></a>

```go
func AllowAuthorizerOverrideInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultAuthorizerNameInput`<sup>Optional</sup> <a name="DefaultAuthorizerNameInput" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.defaultAuthorizerNameInput"></a>

```go
func DefaultAuthorizerNameInput() *string
```

- *Type:* *string

---

##### `AllowAuthorizerOverride`<sup>Required</sup> <a name="AllowAuthorizerOverride" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.allowAuthorizerOverride"></a>

```go
func AllowAuthorizerOverride() interface{}
```

- *Type:* interface{}

---

##### `DefaultAuthorizerName`<sup>Required</sup> <a name="DefaultAuthorizerName" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.defaultAuthorizerName"></a>

```go
func DefaultAuthorizerName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() IotDomainConfigurationAuthorizerConfig
```

- *Type:* <a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig">IotDomainConfigurationAuthorizerConfig</a>

---


### IotDomainConfigurationTlsConfigOutputReference <a name="IotDomainConfigurationTlsConfigOutputReference" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/iotdomainconfiguration"

iotdomainconfiguration.NewIotDomainConfigurationTlsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotDomainConfigurationTlsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.resetSecurityPolicy">ResetSecurityPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityPolicy` <a name="ResetSecurityPolicy" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.resetSecurityPolicy"></a>

```go
func ResetSecurityPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.securityPolicyInput">SecurityPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.securityPolicy">SecurityPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfig">IotDomainConfigurationTlsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityPolicyInput`<sup>Optional</sup> <a name="SecurityPolicyInput" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.securityPolicyInput"></a>

```go
func SecurityPolicyInput() *string
```

- *Type:* *string

---

##### `SecurityPolicy`<sup>Required</sup> <a name="SecurityPolicy" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.securityPolicy"></a>

```go
func SecurityPolicy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() IotDomainConfigurationTlsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfig">IotDomainConfigurationTlsConfig</a>

---



