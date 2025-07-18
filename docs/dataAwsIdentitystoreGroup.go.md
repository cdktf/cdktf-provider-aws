# `dataAwsIdentitystoreGroup` Submodule <a name="`dataAwsIdentitystoreGroup` Submodule" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsIdentitystoreGroup <a name="DataAwsIdentitystoreGroup" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/identitystore_group aws_identitystore_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsidentitystoregroup"

dataawsidentitystoregroup.NewDataAwsIdentitystoreGroup(scope Construct, id *string, config DataAwsIdentitystoreGroupConfig) DataAwsIdentitystoreGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig">DataAwsIdentitystoreGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig">DataAwsIdentitystoreGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.putAlternateIdentifier">PutAlternateIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.resetAlternateIdentifier">ResetAlternateIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.resetGroupId">ResetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAlternateIdentifier` <a name="PutAlternateIdentifier" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.putAlternateIdentifier"></a>

```go
func PutAlternateIdentifier(value DataAwsIdentitystoreGroupAlternateIdentifier)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.putAlternateIdentifier.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier">DataAwsIdentitystoreGroupAlternateIdentifier</a>

---

##### `ResetAlternateIdentifier` <a name="ResetAlternateIdentifier" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.resetAlternateIdentifier"></a>

```go
func ResetAlternateIdentifier()
```

##### `ResetGroupId` <a name="ResetGroupId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.resetGroupId"></a>

```go
func ResetGroupId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsIdentitystoreGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsidentitystoregroup"

dataawsidentitystoregroup.DataAwsIdentitystoreGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsidentitystoregroup"

dataawsidentitystoregroup.DataAwsIdentitystoreGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsidentitystoregroup"

dataawsidentitystoregroup.DataAwsIdentitystoreGroup_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsidentitystoregroup"

dataawsidentitystoregroup.DataAwsIdentitystoreGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAwsIdentitystoreGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsIdentitystoreGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsIdentitystoreGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/identitystore_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsIdentitystoreGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.alternateIdentifier">AlternateIdentifier</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference">DataAwsIdentitystoreGroupAlternateIdentifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.externalIds">ExternalIds</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList">DataAwsIdentitystoreGroupExternalIdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.alternateIdentifierInput">AlternateIdentifierInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier">DataAwsIdentitystoreGroupAlternateIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.groupIdInput">GroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.identityStoreIdInput">IdentityStoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.identityStoreId">IdentityStoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AlternateIdentifier`<sup>Required</sup> <a name="AlternateIdentifier" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.alternateIdentifier"></a>

```go
func AlternateIdentifier() DataAwsIdentitystoreGroupAlternateIdentifierOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference">DataAwsIdentitystoreGroupAlternateIdentifierOutputReference</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExternalIds`<sup>Required</sup> <a name="ExternalIds" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.externalIds"></a>

```go
func ExternalIds() DataAwsIdentitystoreGroupExternalIdsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList">DataAwsIdentitystoreGroupExternalIdsList</a>

---

##### `AlternateIdentifierInput`<sup>Optional</sup> <a name="AlternateIdentifierInput" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.alternateIdentifierInput"></a>

```go
func AlternateIdentifierInput() DataAwsIdentitystoreGroupAlternateIdentifier
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier">DataAwsIdentitystoreGroupAlternateIdentifier</a>

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.groupIdInput"></a>

```go
func GroupIdInput() *string
```

- *Type:* *string

---

##### `IdentityStoreIdInput`<sup>Optional</sup> <a name="IdentityStoreIdInput" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.identityStoreIdInput"></a>

```go
func IdentityStoreIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdentityStoreId`<sup>Required</sup> <a name="IdentityStoreId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.identityStoreId"></a>

```go
func IdentityStoreId() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsIdentitystoreGroupAlternateIdentifier <a name="DataAwsIdentitystoreGroupAlternateIdentifier" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsidentitystoregroup"

&dataawsidentitystoregroup.DataAwsIdentitystoreGroupAlternateIdentifier {
	ExternalId: github.com/cdktf/cdktf-provider-aws-go/aws/v21.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId,
	UniqueAttribute: github.com/cdktf/cdktf-provider-aws-go/aws/v21.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier.property.externalId">ExternalId</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId">DataAwsIdentitystoreGroupAlternateIdentifierExternalId</a></code> | external_id block. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier.property.uniqueAttribute">UniqueAttribute</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute</a></code> | unique_attribute block. |

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier.property.externalId"></a>

```go
ExternalId DataAwsIdentitystoreGroupAlternateIdentifierExternalId
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId">DataAwsIdentitystoreGroupAlternateIdentifierExternalId</a>

external_id block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/identitystore_group#external_id DataAwsIdentitystoreGroup#external_id}

---

##### `UniqueAttribute`<sup>Optional</sup> <a name="UniqueAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier.property.uniqueAttribute"></a>

```go
UniqueAttribute DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute</a>

unique_attribute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/identitystore_group#unique_attribute DataAwsIdentitystoreGroup#unique_attribute}

---

### DataAwsIdentitystoreGroupAlternateIdentifierExternalId <a name="DataAwsIdentitystoreGroupAlternateIdentifierExternalId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsidentitystoregroup"

&dataawsidentitystoregroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId {
	Id: *string,
	Issuer: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/identitystore_group#id DataAwsIdentitystoreGroup#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId.property.issuer">Issuer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/identitystore_group#issuer DataAwsIdentitystoreGroup#issuer}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/identitystore_group#id DataAwsIdentitystoreGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId.property.issuer"></a>

```go
Issuer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/identitystore_group#issuer DataAwsIdentitystoreGroup#issuer}.

---

### DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute <a name="DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsidentitystoregroup"

&dataawsidentitystoregroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute {
	AttributePath: *string,
	AttributeValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute.property.attributePath">AttributePath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/identitystore_group#attribute_path DataAwsIdentitystoreGroup#attribute_path}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute.property.attributeValue">AttributeValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/identitystore_group#attribute_value DataAwsIdentitystoreGroup#attribute_value}. |

---

##### `AttributePath`<sup>Required</sup> <a name="AttributePath" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute.property.attributePath"></a>

```go
AttributePath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/identitystore_group#attribute_path DataAwsIdentitystoreGroup#attribute_path}.

---

##### `AttributeValue`<sup>Required</sup> <a name="AttributeValue" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute.property.attributeValue"></a>

```go
AttributeValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/identitystore_group#attribute_value DataAwsIdentitystoreGroup#attribute_value}.

---

### DataAwsIdentitystoreGroupConfig <a name="DataAwsIdentitystoreGroupConfig" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsidentitystoregroup"

&dataawsidentitystoregroup.DataAwsIdentitystoreGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	IdentityStoreId: *string,
	AlternateIdentifier: github.com/cdktf/cdktf-provider-aws-go/aws/v21.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier,
	GroupId: *string,
	Id: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.identityStoreId">IdentityStoreId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/identitystore_group#identity_store_id DataAwsIdentitystoreGroup#identity_store_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.alternateIdentifier">AlternateIdentifier</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier">DataAwsIdentitystoreGroupAlternateIdentifier</a></code> | alternate_identifier block. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.groupId">GroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/identitystore_group#group_id DataAwsIdentitystoreGroup#group_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/identitystore_group#id DataAwsIdentitystoreGroup#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdentityStoreId`<sup>Required</sup> <a name="IdentityStoreId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.identityStoreId"></a>

```go
IdentityStoreId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/identitystore_group#identity_store_id DataAwsIdentitystoreGroup#identity_store_id}.

---

##### `AlternateIdentifier`<sup>Optional</sup> <a name="AlternateIdentifier" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.alternateIdentifier"></a>

```go
AlternateIdentifier DataAwsIdentitystoreGroupAlternateIdentifier
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier">DataAwsIdentitystoreGroupAlternateIdentifier</a>

alternate_identifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/identitystore_group#alternate_identifier DataAwsIdentitystoreGroup#alternate_identifier}

---

##### `GroupId`<sup>Optional</sup> <a name="GroupId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.groupId"></a>

```go
GroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/identitystore_group#group_id DataAwsIdentitystoreGroup#group_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/identitystore_group#id DataAwsIdentitystoreGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/identitystore_group#region DataAwsIdentitystoreGroup#region}

---

### DataAwsIdentitystoreGroupExternalIds <a name="DataAwsIdentitystoreGroupExternalIds" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIds.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsidentitystoregroup"

&dataawsidentitystoregroup.DataAwsIdentitystoreGroupExternalIds {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference <a name="DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsidentitystoregroup"

dataawsidentitystoregroup.NewDataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.issuerInput">IssuerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId">DataAwsIdentitystoreGroupAlternateIdentifierExternalId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.issuerInput"></a>

```go
func IssuerInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsIdentitystoreGroupAlternateIdentifierExternalId
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId">DataAwsIdentitystoreGroupAlternateIdentifierExternalId</a>

---


### DataAwsIdentitystoreGroupAlternateIdentifierOutputReference <a name="DataAwsIdentitystoreGroupAlternateIdentifierOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsidentitystoregroup"

dataawsidentitystoregroup.NewDataAwsIdentitystoreGroupAlternateIdentifierOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsIdentitystoreGroupAlternateIdentifierOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.putExternalId">PutExternalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.putUniqueAttribute">PutUniqueAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.resetExternalId">ResetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.resetUniqueAttribute">ResetUniqueAttribute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExternalId` <a name="PutExternalId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.putExternalId"></a>

```go
func PutExternalId(value DataAwsIdentitystoreGroupAlternateIdentifierExternalId)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.putExternalId.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId">DataAwsIdentitystoreGroupAlternateIdentifierExternalId</a>

---

##### `PutUniqueAttribute` <a name="PutUniqueAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.putUniqueAttribute"></a>

```go
func PutUniqueAttribute(value DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.putUniqueAttribute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute</a>

---

##### `ResetExternalId` <a name="ResetExternalId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.resetExternalId"></a>

```go
func ResetExternalId()
```

##### `ResetUniqueAttribute` <a name="ResetUniqueAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.resetUniqueAttribute"></a>

```go
func ResetUniqueAttribute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.externalId">ExternalId</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference">DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.uniqueAttribute">UniqueAttribute</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference">DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.externalIdInput">ExternalIdInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId">DataAwsIdentitystoreGroupAlternateIdentifierExternalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.uniqueAttributeInput">UniqueAttributeInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier">DataAwsIdentitystoreGroupAlternateIdentifier</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.externalId"></a>

```go
func ExternalId() DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference">DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference</a>

---

##### `UniqueAttribute`<sup>Required</sup> <a name="UniqueAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.uniqueAttribute"></a>

```go
func UniqueAttribute() DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference">DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference</a>

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.externalIdInput"></a>

```go
func ExternalIdInput() DataAwsIdentitystoreGroupAlternateIdentifierExternalId
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId">DataAwsIdentitystoreGroupAlternateIdentifierExternalId</a>

---

##### `UniqueAttributeInput`<sup>Optional</sup> <a name="UniqueAttributeInput" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.uniqueAttributeInput"></a>

```go
func UniqueAttributeInput() DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsIdentitystoreGroupAlternateIdentifier
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier">DataAwsIdentitystoreGroupAlternateIdentifier</a>

---


### DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference <a name="DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsidentitystoregroup"

dataawsidentitystoregroup.NewDataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.attributePathInput">AttributePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.attributeValueInput">AttributeValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.attributePath">AttributePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.attributeValue">AttributeValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributePathInput`<sup>Optional</sup> <a name="AttributePathInput" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.attributePathInput"></a>

```go
func AttributePathInput() *string
```

- *Type:* *string

---

##### `AttributeValueInput`<sup>Optional</sup> <a name="AttributeValueInput" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.attributeValueInput"></a>

```go
func AttributeValueInput() *string
```

- *Type:* *string

---

##### `AttributePath`<sup>Required</sup> <a name="AttributePath" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.attributePath"></a>

```go
func AttributePath() *string
```

- *Type:* *string

---

##### `AttributeValue`<sup>Required</sup> <a name="AttributeValue" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.attributeValue"></a>

```go
func AttributeValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute</a>

---


### DataAwsIdentitystoreGroupExternalIdsList <a name="DataAwsIdentitystoreGroupExternalIdsList" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsidentitystoregroup"

dataawsidentitystoregroup.NewDataAwsIdentitystoreGroupExternalIdsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsIdentitystoreGroupExternalIdsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.get"></a>

```go
func Get(index *f64) DataAwsIdentitystoreGroupExternalIdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsIdentitystoreGroupExternalIdsOutputReference <a name="DataAwsIdentitystoreGroupExternalIdsOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsidentitystoregroup"

dataawsidentitystoregroup.NewDataAwsIdentitystoreGroupExternalIdsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsIdentitystoreGroupExternalIdsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIds">DataAwsIdentitystoreGroupExternalIds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsIdentitystoreGroupExternalIds
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIds">DataAwsIdentitystoreGroupExternalIds</a>

---



