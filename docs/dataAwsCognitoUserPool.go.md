# `dataAwsCognitoUserPool` Submodule <a name="`dataAwsCognitoUserPool` Submodule" id="@cdktf/provider-aws.dataAwsCognitoUserPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCognitoUserPool <a name="DataAwsCognitoUserPool" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/data-sources/cognito_user_pool aws_cognito_user_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

dataawscognitouserpool.NewDataAwsCognitoUserPool(scope Construct, id *string, config DataAwsCognitoUserPoolConfig) DataAwsCognitoUserPool
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolConfig">DataAwsCognitoUserPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolConfig">DataAwsCognitoUserPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsCognitoUserPool resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

dataawscognitouserpool.DataAwsCognitoUserPool_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

dataawscognitouserpool.DataAwsCognitoUserPool_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

dataawscognitouserpool.DataAwsCognitoUserPool_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

dataawscognitouserpool.DataAwsCognitoUserPool_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAwsCognitoUserPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsCognitoUserPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsCognitoUserPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/data-sources/cognito_user_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsCognitoUserPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.accountRecoverySetting">AccountRecoverySetting</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingList">DataAwsCognitoUserPoolAccountRecoverySettingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.adminCreateUserConfig">AdminCreateUserConfig</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigList">DataAwsCognitoUserPoolAdminCreateUserConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.autoVerifiedAttributes">AutoVerifiedAttributes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.creationDate">CreationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.customDomain">CustomDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.deletionProtection">DeletionProtection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.deviceConfiguration">DeviceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationList">DataAwsCognitoUserPoolDeviceConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.emailConfiguration">EmailConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationList">DataAwsCognitoUserPoolEmailConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.estimatedNumberOfUsers">EstimatedNumberOfUsers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.lambdaConfig">LambdaConfig</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigList">DataAwsCognitoUserPoolLambdaConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.lastModifiedDate">LastModifiedDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.mfaConfiguration">MfaConfiguration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.schemaAttributes">SchemaAttributes</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesList">DataAwsCognitoUserPoolSchemaAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.smsAuthenticationMessage">SmsAuthenticationMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.smsConfigurationFailure">SmsConfigurationFailure</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.smsVerificationMessage">SmsVerificationMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.tags">Tags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.usernameAttributes">UsernameAttributes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.userPoolAddOns">UserPoolAddOns</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsList">DataAwsCognitoUserPoolUserPoolAddOnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.userPoolTags">UserPoolTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.userPoolIdInput">UserPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.userPoolId">UserPoolId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AccountRecoverySetting`<sup>Required</sup> <a name="AccountRecoverySetting" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.accountRecoverySetting"></a>

```go
func AccountRecoverySetting() DataAwsCognitoUserPoolAccountRecoverySettingList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingList">DataAwsCognitoUserPoolAccountRecoverySettingList</a>

---

##### `AdminCreateUserConfig`<sup>Required</sup> <a name="AdminCreateUserConfig" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.adminCreateUserConfig"></a>

```go
func AdminCreateUserConfig() DataAwsCognitoUserPoolAdminCreateUserConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigList">DataAwsCognitoUserPoolAdminCreateUserConfigList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AutoVerifiedAttributes`<sup>Required</sup> <a name="AutoVerifiedAttributes" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.autoVerifiedAttributes"></a>

```go
func AutoVerifiedAttributes() *[]*string
```

- *Type:* *[]*string

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.creationDate"></a>

```go
func CreationDate() *string
```

- *Type:* *string

---

##### `CustomDomain`<sup>Required</sup> <a name="CustomDomain" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.customDomain"></a>

```go
func CustomDomain() *string
```

- *Type:* *string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.deletionProtection"></a>

```go
func DeletionProtection() *string
```

- *Type:* *string

---

##### `DeviceConfiguration`<sup>Required</sup> <a name="DeviceConfiguration" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.deviceConfiguration"></a>

```go
func DeviceConfiguration() DataAwsCognitoUserPoolDeviceConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationList">DataAwsCognitoUserPoolDeviceConfigurationList</a>

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `EmailConfiguration`<sup>Required</sup> <a name="EmailConfiguration" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.emailConfiguration"></a>

```go
func EmailConfiguration() DataAwsCognitoUserPoolEmailConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationList">DataAwsCognitoUserPoolEmailConfigurationList</a>

---

##### `EstimatedNumberOfUsers`<sup>Required</sup> <a name="EstimatedNumberOfUsers" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.estimatedNumberOfUsers"></a>

```go
func EstimatedNumberOfUsers() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LambdaConfig`<sup>Required</sup> <a name="LambdaConfig" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.lambdaConfig"></a>

```go
func LambdaConfig() DataAwsCognitoUserPoolLambdaConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigList">DataAwsCognitoUserPoolLambdaConfigList</a>

---

##### `LastModifiedDate`<sup>Required</sup> <a name="LastModifiedDate" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.lastModifiedDate"></a>

```go
func LastModifiedDate() *string
```

- *Type:* *string

---

##### `MfaConfiguration`<sup>Required</sup> <a name="MfaConfiguration" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.mfaConfiguration"></a>

```go
func MfaConfiguration() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SchemaAttributes`<sup>Required</sup> <a name="SchemaAttributes" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.schemaAttributes"></a>

```go
func SchemaAttributes() DataAwsCognitoUserPoolSchemaAttributesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesList">DataAwsCognitoUserPoolSchemaAttributesList</a>

---

##### `SmsAuthenticationMessage`<sup>Required</sup> <a name="SmsAuthenticationMessage" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.smsAuthenticationMessage"></a>

```go
func SmsAuthenticationMessage() *string
```

- *Type:* *string

---

##### `SmsConfigurationFailure`<sup>Required</sup> <a name="SmsConfigurationFailure" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.smsConfigurationFailure"></a>

```go
func SmsConfigurationFailure() *string
```

- *Type:* *string

---

##### `SmsVerificationMessage`<sup>Required</sup> <a name="SmsVerificationMessage" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.smsVerificationMessage"></a>

```go
func SmsVerificationMessage() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `UsernameAttributes`<sup>Required</sup> <a name="UsernameAttributes" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.usernameAttributes"></a>

```go
func UsernameAttributes() *[]*string
```

- *Type:* *[]*string

---

##### `UserPoolAddOns`<sup>Required</sup> <a name="UserPoolAddOns" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.userPoolAddOns"></a>

```go
func UserPoolAddOns() DataAwsCognitoUserPoolUserPoolAddOnsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsList">DataAwsCognitoUserPoolUserPoolAddOnsList</a>

---

##### `UserPoolTags`<sup>Required</sup> <a name="UserPoolTags" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.userPoolTags"></a>

```go
func UserPoolTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `UserPoolIdInput`<sup>Optional</sup> <a name="UserPoolIdInput" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.userPoolIdInput"></a>

```go
func UserPoolIdInput() *string
```

- *Type:* *string

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.userPoolId"></a>

```go
func UserPoolId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPool.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCognitoUserPoolAccountRecoverySetting <a name="DataAwsCognitoUserPoolAccountRecoverySetting" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySetting.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

&dataawscognitouserpool.DataAwsCognitoUserPoolAccountRecoverySetting {

}
```


### DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanism <a name="DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanism" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanism"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanism.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

&dataawscognitouserpool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanism {

}
```


### DataAwsCognitoUserPoolAdminCreateUserConfig <a name="DataAwsCognitoUserPoolAdminCreateUserConfig" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

&dataawscognitouserpool.DataAwsCognitoUserPoolAdminCreateUserConfig {

}
```


### DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplate <a name="DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplate" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

&dataawscognitouserpool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplate {

}
```


### DataAwsCognitoUserPoolConfig <a name="DataAwsCognitoUserPoolConfig" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

&dataawscognitouserpool.DataAwsCognitoUserPoolConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	UserPoolId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolConfig.property.userPoolId">UserPoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/data-sources/cognito_user_pool#user_pool_id DataAwsCognitoUserPool#user_pool_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolConfig.property.userPoolId"></a>

```go
UserPoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/data-sources/cognito_user_pool#user_pool_id DataAwsCognitoUserPool#user_pool_id}.

---

### DataAwsCognitoUserPoolDeviceConfiguration <a name="DataAwsCognitoUserPoolDeviceConfiguration" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

&dataawscognitouserpool.DataAwsCognitoUserPoolDeviceConfiguration {

}
```


### DataAwsCognitoUserPoolEmailConfiguration <a name="DataAwsCognitoUserPoolEmailConfiguration" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

&dataawscognitouserpool.DataAwsCognitoUserPoolEmailConfiguration {

}
```


### DataAwsCognitoUserPoolLambdaConfig <a name="DataAwsCognitoUserPoolLambdaConfig" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

&dataawscognitouserpool.DataAwsCognitoUserPoolLambdaConfig {

}
```


### DataAwsCognitoUserPoolLambdaConfigCustomEmailSender <a name="DataAwsCognitoUserPoolLambdaConfigCustomEmailSender" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSender"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSender.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

&dataawscognitouserpool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSender {

}
```


### DataAwsCognitoUserPoolLambdaConfigCustomSmsSender <a name="DataAwsCognitoUserPoolLambdaConfigCustomSmsSender" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSender"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSender.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

&dataawscognitouserpool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSender {

}
```


### DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfig <a name="DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfig" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

&dataawscognitouserpool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfig {

}
```


### DataAwsCognitoUserPoolSchemaAttributes <a name="DataAwsCognitoUserPoolSchemaAttributes" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

&dataawscognitouserpool.DataAwsCognitoUserPoolSchemaAttributes {

}
```


### DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraints <a name="DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraints" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

&dataawscognitouserpool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraints {

}
```


### DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraints <a name="DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraints" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

&dataawscognitouserpool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraints {

}
```


### DataAwsCognitoUserPoolUserPoolAddOns <a name="DataAwsCognitoUserPoolUserPoolAddOns" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOns.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

&dataawscognitouserpool.DataAwsCognitoUserPoolUserPoolAddOns {

}
```


### DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlows <a name="DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlows" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlows"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlows.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

&dataawscognitouserpool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlows {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsCognitoUserPoolAccountRecoverySettingList <a name="DataAwsCognitoUserPoolAccountRecoverySettingList" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

dataawscognitouserpool.NewDataAwsCognitoUserPoolAccountRecoverySettingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCognitoUserPoolAccountRecoverySettingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingList.get"></a>

```go
func Get(index *f64) DataAwsCognitoUserPoolAccountRecoverySettingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCognitoUserPoolAccountRecoverySettingOutputReference <a name="DataAwsCognitoUserPoolAccountRecoverySettingOutputReference" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

dataawscognitouserpool.NewDataAwsCognitoUserPoolAccountRecoverySettingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCognitoUserPoolAccountRecoverySettingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.property.recoveryMechanism">RecoveryMechanism</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismList">DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySetting">DataAwsCognitoUserPoolAccountRecoverySetting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RecoveryMechanism`<sup>Required</sup> <a name="RecoveryMechanism" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.property.recoveryMechanism"></a>

```go
func RecoveryMechanism() DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismList">DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCognitoUserPoolAccountRecoverySetting
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySetting">DataAwsCognitoUserPoolAccountRecoverySetting</a>

---


### DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismList <a name="DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismList" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

dataawscognitouserpool.NewDataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismList.get"></a>

```go
func Get(index *f64) DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference <a name="DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

dataawscognitouserpool.NewDataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanism">DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanism</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanism
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanism">DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanism</a>

---


### DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateList <a name="DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateList" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

dataawscognitouserpool.NewDataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateList.get"></a>

```go
func Get(index *f64) DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference <a name="DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

dataawscognitouserpool.NewDataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.emailMessage">EmailMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.emailSubject">EmailSubject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.smsMessage">SmsMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplate">DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmailMessage`<sup>Required</sup> <a name="EmailMessage" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.emailMessage"></a>

```go
func EmailMessage() *string
```

- *Type:* *string

---

##### `EmailSubject`<sup>Required</sup> <a name="EmailSubject" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.emailSubject"></a>

```go
func EmailSubject() *string
```

- *Type:* *string

---

##### `SmsMessage`<sup>Required</sup> <a name="SmsMessage" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.smsMessage"></a>

```go
func SmsMessage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplate">DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplate</a>

---


### DataAwsCognitoUserPoolAdminCreateUserConfigList <a name="DataAwsCognitoUserPoolAdminCreateUserConfigList" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

dataawscognitouserpool.NewDataAwsCognitoUserPoolAdminCreateUserConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCognitoUserPoolAdminCreateUserConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigList.get"></a>

```go
func Get(index *f64) DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference <a name="DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

dataawscognitouserpool.NewDataAwsCognitoUserPoolAdminCreateUserConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.property.allowAdminCreateUserOnly">AllowAdminCreateUserOnly</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.property.inviteMessageTemplate">InviteMessageTemplate</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateList">DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.property.unusedAccountValidityDays">UnusedAccountValidityDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfig">DataAwsCognitoUserPoolAdminCreateUserConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowAdminCreateUserOnly`<sup>Required</sup> <a name="AllowAdminCreateUserOnly" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.property.allowAdminCreateUserOnly"></a>

```go
func AllowAdminCreateUserOnly() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InviteMessageTemplate`<sup>Required</sup> <a name="InviteMessageTemplate" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.property.inviteMessageTemplate"></a>

```go
func InviteMessageTemplate() DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateList">DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateList</a>

---

##### `UnusedAccountValidityDays`<sup>Required</sup> <a name="UnusedAccountValidityDays" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.property.unusedAccountValidityDays"></a>

```go
func UnusedAccountValidityDays() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCognitoUserPoolAdminCreateUserConfig
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolAdminCreateUserConfig">DataAwsCognitoUserPoolAdminCreateUserConfig</a>

---


### DataAwsCognitoUserPoolDeviceConfigurationList <a name="DataAwsCognitoUserPoolDeviceConfigurationList" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

dataawscognitouserpool.NewDataAwsCognitoUserPoolDeviceConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCognitoUserPoolDeviceConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationList.get"></a>

```go
func Get(index *f64) DataAwsCognitoUserPoolDeviceConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCognitoUserPoolDeviceConfigurationOutputReference <a name="DataAwsCognitoUserPoolDeviceConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

dataawscognitouserpool.NewDataAwsCognitoUserPoolDeviceConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCognitoUserPoolDeviceConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.property.challengeRequiredOnNewDevice">ChallengeRequiredOnNewDevice</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.property.deviceOnlyRememberedOnUserPrompt">DeviceOnlyRememberedOnUserPrompt</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfiguration">DataAwsCognitoUserPoolDeviceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChallengeRequiredOnNewDevice`<sup>Required</sup> <a name="ChallengeRequiredOnNewDevice" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.property.challengeRequiredOnNewDevice"></a>

```go
func ChallengeRequiredOnNewDevice() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DeviceOnlyRememberedOnUserPrompt`<sup>Required</sup> <a name="DeviceOnlyRememberedOnUserPrompt" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.property.deviceOnlyRememberedOnUserPrompt"></a>

```go
func DeviceOnlyRememberedOnUserPrompt() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCognitoUserPoolDeviceConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolDeviceConfiguration">DataAwsCognitoUserPoolDeviceConfiguration</a>

---


### DataAwsCognitoUserPoolEmailConfigurationList <a name="DataAwsCognitoUserPoolEmailConfigurationList" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

dataawscognitouserpool.NewDataAwsCognitoUserPoolEmailConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCognitoUserPoolEmailConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationList.get"></a>

```go
func Get(index *f64) DataAwsCognitoUserPoolEmailConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCognitoUserPoolEmailConfigurationOutputReference <a name="DataAwsCognitoUserPoolEmailConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

dataawscognitouserpool.NewDataAwsCognitoUserPoolEmailConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCognitoUserPoolEmailConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.property.configurationSet">ConfigurationSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.property.emailSendingAccount">EmailSendingAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.property.from">From</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.property.replyToEmailAddress">ReplyToEmailAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.property.sourceArn">SourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfiguration">DataAwsCognitoUserPoolEmailConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfigurationSet`<sup>Required</sup> <a name="ConfigurationSet" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.property.configurationSet"></a>

```go
func ConfigurationSet() *string
```

- *Type:* *string

---

##### `EmailSendingAccount`<sup>Required</sup> <a name="EmailSendingAccount" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.property.emailSendingAccount"></a>

```go
func EmailSendingAccount() *string
```

- *Type:* *string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.property.from"></a>

```go
func From() *string
```

- *Type:* *string

---

##### `ReplyToEmailAddress`<sup>Required</sup> <a name="ReplyToEmailAddress" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.property.replyToEmailAddress"></a>

```go
func ReplyToEmailAddress() *string
```

- *Type:* *string

---

##### `SourceArn`<sup>Required</sup> <a name="SourceArn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.property.sourceArn"></a>

```go
func SourceArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCognitoUserPoolEmailConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolEmailConfiguration">DataAwsCognitoUserPoolEmailConfiguration</a>

---


### DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderList <a name="DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderList" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

dataawscognitouserpool.NewDataAwsCognitoUserPoolLambdaConfigCustomEmailSenderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderList.get"></a>

```go
func Get(index *f64) DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference <a name="DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

dataawscognitouserpool.NewDataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.lambdaArn">LambdaArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.lambdaVersion">LambdaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSender">DataAwsCognitoUserPoolLambdaConfigCustomEmailSender</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.lambdaArn"></a>

```go
func LambdaArn() *string
```

- *Type:* *string

---

##### `LambdaVersion`<sup>Required</sup> <a name="LambdaVersion" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.lambdaVersion"></a>

```go
func LambdaVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCognitoUserPoolLambdaConfigCustomEmailSender
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSender">DataAwsCognitoUserPoolLambdaConfigCustomEmailSender</a>

---


### DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderList <a name="DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderList" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

dataawscognitouserpool.NewDataAwsCognitoUserPoolLambdaConfigCustomSmsSenderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderList.get"></a>

```go
func Get(index *f64) DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference <a name="DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

dataawscognitouserpool.NewDataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.lambdaArn">LambdaArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.lambdaVersion">LambdaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSender">DataAwsCognitoUserPoolLambdaConfigCustomSmsSender</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.lambdaArn"></a>

```go
func LambdaArn() *string
```

- *Type:* *string

---

##### `LambdaVersion`<sup>Required</sup> <a name="LambdaVersion" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.lambdaVersion"></a>

```go
func LambdaVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCognitoUserPoolLambdaConfigCustomSmsSender
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSender">DataAwsCognitoUserPoolLambdaConfigCustomSmsSender</a>

---


### DataAwsCognitoUserPoolLambdaConfigList <a name="DataAwsCognitoUserPoolLambdaConfigList" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

dataawscognitouserpool.NewDataAwsCognitoUserPoolLambdaConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCognitoUserPoolLambdaConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigList.get"></a>

```go
func Get(index *f64) DataAwsCognitoUserPoolLambdaConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCognitoUserPoolLambdaConfigOutputReference <a name="DataAwsCognitoUserPoolLambdaConfigOutputReference" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

dataawscognitouserpool.NewDataAwsCognitoUserPoolLambdaConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCognitoUserPoolLambdaConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.property.createAuthChallenge">CreateAuthChallenge</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.property.customEmailSender">CustomEmailSender</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderList">DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.property.customMessage">CustomMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.property.customSmsSender">CustomSmsSender</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderList">DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.property.defineAuthChallenge">DefineAuthChallenge</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.property.postAuthentication">PostAuthentication</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.property.postConfirmation">PostConfirmation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.property.preAuthentication">PreAuthentication</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.property.preSignUp">PreSignUp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.property.preTokenGeneration">PreTokenGeneration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.property.preTokenGenerationConfig">PreTokenGenerationConfig</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigList">DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.property.userMigration">UserMigration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.property.verifyAuthChallengeResponse">VerifyAuthChallengeResponse</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfig">DataAwsCognitoUserPoolLambdaConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateAuthChallenge`<sup>Required</sup> <a name="CreateAuthChallenge" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.property.createAuthChallenge"></a>

```go
func CreateAuthChallenge() *string
```

- *Type:* *string

---

##### `CustomEmailSender`<sup>Required</sup> <a name="CustomEmailSender" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.property.customEmailSender"></a>

```go
func CustomEmailSender() DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderList">DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderList</a>

---

##### `CustomMessage`<sup>Required</sup> <a name="CustomMessage" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.property.customMessage"></a>

```go
func CustomMessage() *string
```

- *Type:* *string

---

##### `CustomSmsSender`<sup>Required</sup> <a name="CustomSmsSender" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.property.customSmsSender"></a>

```go
func CustomSmsSender() DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderList">DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderList</a>

---

##### `DefineAuthChallenge`<sup>Required</sup> <a name="DefineAuthChallenge" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.property.defineAuthChallenge"></a>

```go
func DefineAuthChallenge() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `PostAuthentication`<sup>Required</sup> <a name="PostAuthentication" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.property.postAuthentication"></a>

```go
func PostAuthentication() *string
```

- *Type:* *string

---

##### `PostConfirmation`<sup>Required</sup> <a name="PostConfirmation" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.property.postConfirmation"></a>

```go
func PostConfirmation() *string
```

- *Type:* *string

---

##### `PreAuthentication`<sup>Required</sup> <a name="PreAuthentication" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.property.preAuthentication"></a>

```go
func PreAuthentication() *string
```

- *Type:* *string

---

##### `PreSignUp`<sup>Required</sup> <a name="PreSignUp" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.property.preSignUp"></a>

```go
func PreSignUp() *string
```

- *Type:* *string

---

##### `PreTokenGeneration`<sup>Required</sup> <a name="PreTokenGeneration" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.property.preTokenGeneration"></a>

```go
func PreTokenGeneration() *string
```

- *Type:* *string

---

##### `PreTokenGenerationConfig`<sup>Required</sup> <a name="PreTokenGenerationConfig" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.property.preTokenGenerationConfig"></a>

```go
func PreTokenGenerationConfig() DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigList">DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigList</a>

---

##### `UserMigration`<sup>Required</sup> <a name="UserMigration" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.property.userMigration"></a>

```go
func UserMigration() *string
```

- *Type:* *string

---

##### `VerifyAuthChallengeResponse`<sup>Required</sup> <a name="VerifyAuthChallengeResponse" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.property.verifyAuthChallengeResponse"></a>

```go
func VerifyAuthChallengeResponse() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCognitoUserPoolLambdaConfig
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfig">DataAwsCognitoUserPoolLambdaConfig</a>

---


### DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigList <a name="DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigList" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

dataawscognitouserpool.NewDataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigList.get"></a>

```go
func Get(index *f64) DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference <a name="DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

dataawscognitouserpool.NewDataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaArn">LambdaArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaVersion">LambdaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfig">DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaArn"></a>

```go
func LambdaArn() *string
```

- *Type:* *string

---

##### `LambdaVersion`<sup>Required</sup> <a name="LambdaVersion" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaVersion"></a>

```go
func LambdaVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfig
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfig">DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfig</a>

---


### DataAwsCognitoUserPoolSchemaAttributesList <a name="DataAwsCognitoUserPoolSchemaAttributesList" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

dataawscognitouserpool.NewDataAwsCognitoUserPoolSchemaAttributesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCognitoUserPoolSchemaAttributesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesList.get"></a>

```go
func Get(index *f64) DataAwsCognitoUserPoolSchemaAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsList <a name="DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsList" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

dataawscognitouserpool.NewDataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsList.get"></a>

```go
func Get(index *f64) DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference <a name="DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

dataawscognitouserpool.NewDataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.property.maxValue">MaxValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.property.minValue">MinValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraints">DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxValue`<sup>Required</sup> <a name="MaxValue" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.property.maxValue"></a>

```go
func MaxValue() *string
```

- *Type:* *string

---

##### `MinValue`<sup>Required</sup> <a name="MinValue" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.property.minValue"></a>

```go
func MinValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraints
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraints">DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraints</a>

---


### DataAwsCognitoUserPoolSchemaAttributesOutputReference <a name="DataAwsCognitoUserPoolSchemaAttributesOutputReference" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

dataawscognitouserpool.NewDataAwsCognitoUserPoolSchemaAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCognitoUserPoolSchemaAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.property.attributeDataType">AttributeDataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.property.developerOnlyAttribute">DeveloperOnlyAttribute</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.property.mutable">Mutable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.property.numberAttributeConstraints">NumberAttributeConstraints</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsList">DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.property.required">Required</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.property.stringAttributeConstraints">StringAttributeConstraints</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsList">DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributes">DataAwsCognitoUserPoolSchemaAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeDataType`<sup>Required</sup> <a name="AttributeDataType" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.property.attributeDataType"></a>

```go
func AttributeDataType() *string
```

- *Type:* *string

---

##### `DeveloperOnlyAttribute`<sup>Required</sup> <a name="DeveloperOnlyAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.property.developerOnlyAttribute"></a>

```go
func DeveloperOnlyAttribute() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Mutable`<sup>Required</sup> <a name="Mutable" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.property.mutable"></a>

```go
func Mutable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NumberAttributeConstraints`<sup>Required</sup> <a name="NumberAttributeConstraints" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.property.numberAttributeConstraints"></a>

```go
func NumberAttributeConstraints() DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsList">DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsList</a>

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.property.required"></a>

```go
func Required() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `StringAttributeConstraints`<sup>Required</sup> <a name="StringAttributeConstraints" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.property.stringAttributeConstraints"></a>

```go
func StringAttributeConstraints() DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsList">DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCognitoUserPoolSchemaAttributes
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributes">DataAwsCognitoUserPoolSchemaAttributes</a>

---


### DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsList <a name="DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsList" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

dataawscognitouserpool.NewDataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsList.get"></a>

```go
func Get(index *f64) DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference <a name="DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

dataawscognitouserpool.NewDataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.property.maxLength">MaxLength</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.property.minLength">MinLength</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraints">DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxLength`<sup>Required</sup> <a name="MaxLength" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.property.maxLength"></a>

```go
func MaxLength() *string
```

- *Type:* *string

---

##### `MinLength`<sup>Required</sup> <a name="MinLength" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.property.minLength"></a>

```go
func MinLength() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraints
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraints">DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraints</a>

---


### DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsList <a name="DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsList" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

dataawscognitouserpool.NewDataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsList.get"></a>

```go
func Get(index *f64) DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference <a name="DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

dataawscognitouserpool.NewDataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.property.customAuthMode">CustomAuthMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlows">DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlows</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomAuthMode`<sup>Required</sup> <a name="CustomAuthMode" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.property.customAuthMode"></a>

```go
func CustomAuthMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlows
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlows">DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlows</a>

---


### DataAwsCognitoUserPoolUserPoolAddOnsList <a name="DataAwsCognitoUserPoolUserPoolAddOnsList" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

dataawscognitouserpool.NewDataAwsCognitoUserPoolUserPoolAddOnsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCognitoUserPoolUserPoolAddOnsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsList.get"></a>

```go
func Get(index *f64) DataAwsCognitoUserPoolUserPoolAddOnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCognitoUserPoolUserPoolAddOnsOutputReference <a name="DataAwsCognitoUserPoolUserPoolAddOnsOutputReference" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawscognitouserpool"

dataawscognitouserpool.NewDataAwsCognitoUserPoolUserPoolAddOnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCognitoUserPoolUserPoolAddOnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.property.advancedSecurityAdditionalFlows">AdvancedSecurityAdditionalFlows</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsList">DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.property.advancedSecurityMode">AdvancedSecurityMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOns">DataAwsCognitoUserPoolUserPoolAddOns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdvancedSecurityAdditionalFlows`<sup>Required</sup> <a name="AdvancedSecurityAdditionalFlows" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.property.advancedSecurityAdditionalFlows"></a>

```go
func AdvancedSecurityAdditionalFlows() DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsList">DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsList</a>

---

##### `AdvancedSecurityMode`<sup>Required</sup> <a name="AdvancedSecurityMode" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.property.advancedSecurityMode"></a>

```go
func AdvancedSecurityMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOnsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCognitoUserPoolUserPoolAddOns
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoUserPool.DataAwsCognitoUserPoolUserPoolAddOns">DataAwsCognitoUserPoolUserPoolAddOns</a>

---



