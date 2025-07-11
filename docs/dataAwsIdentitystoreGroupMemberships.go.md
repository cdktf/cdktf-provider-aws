# `dataAwsIdentitystoreGroupMemberships` Submodule <a name="`dataAwsIdentitystoreGroupMemberships` Submodule" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsIdentitystoreGroupMemberships <a name="DataAwsIdentitystoreGroupMemberships" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/identitystore_group_memberships aws_identitystore_group_memberships}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsidentitystoregroupmemberships"

dataawsidentitystoregroupmemberships.NewDataAwsIdentitystoreGroupMemberships(scope Construct, id *string, config DataAwsIdentitystoreGroupMembershipsConfig) DataAwsIdentitystoreGroupMemberships
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsConfig">DataAwsIdentitystoreGroupMembershipsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsConfig">DataAwsIdentitystoreGroupMembershipsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsIdentitystoreGroupMemberships resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsidentitystoregroupmemberships"

dataawsidentitystoregroupmemberships.DataAwsIdentitystoreGroupMemberships_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsidentitystoregroupmemberships"

dataawsidentitystoregroupmemberships.DataAwsIdentitystoreGroupMemberships_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsidentitystoregroupmemberships"

dataawsidentitystoregroupmemberships.DataAwsIdentitystoreGroupMemberships_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsidentitystoregroupmemberships"

dataawsidentitystoregroupmemberships.DataAwsIdentitystoreGroupMemberships_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAwsIdentitystoreGroupMemberships resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsIdentitystoreGroupMemberships to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsIdentitystoreGroupMemberships that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/identitystore_group_memberships#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsIdentitystoreGroupMemberships to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.groupMemberships">GroupMemberships</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList">DataAwsIdentitystoreGroupMembershipsGroupMembershipsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.groupIdInput">GroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.identityStoreIdInput">IdentityStoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.identityStoreId">IdentityStoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `GroupMemberships`<sup>Required</sup> <a name="GroupMemberships" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.groupMemberships"></a>

```go
func GroupMemberships() DataAwsIdentitystoreGroupMembershipsGroupMembershipsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList">DataAwsIdentitystoreGroupMembershipsGroupMembershipsList</a>

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.groupIdInput"></a>

```go
func GroupIdInput() *string
```

- *Type:* *string

---

##### `IdentityStoreIdInput`<sup>Optional</sup> <a name="IdentityStoreIdInput" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.identityStoreIdInput"></a>

```go
func IdentityStoreIdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `IdentityStoreId`<sup>Required</sup> <a name="IdentityStoreId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.identityStoreId"></a>

```go
func IdentityStoreId() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsIdentitystoreGroupMembershipsConfig <a name="DataAwsIdentitystoreGroupMembershipsConfig" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsidentitystoregroupmemberships"

&dataawsidentitystoregroupmemberships.DataAwsIdentitystoreGroupMembershipsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	GroupId: *string,
	IdentityStoreId: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsConfig.property.groupId">GroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/identitystore_group_memberships#group_id DataAwsIdentitystoreGroupMemberships#group_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsConfig.property.identityStoreId">IdentityStoreId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/identitystore_group_memberships#identity_store_id DataAwsIdentitystoreGroupMemberships#identity_store_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsConfig.property.groupId"></a>

```go
GroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/identitystore_group_memberships#group_id DataAwsIdentitystoreGroupMemberships#group_id}.

---

##### `IdentityStoreId`<sup>Required</sup> <a name="IdentityStoreId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsConfig.property.identityStoreId"></a>

```go
IdentityStoreId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/identitystore_group_memberships#identity_store_id DataAwsIdentitystoreGroupMemberships#identity_store_id}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/identitystore_group_memberships#region DataAwsIdentitystoreGroupMemberships#region}

---

### DataAwsIdentitystoreGroupMembershipsGroupMemberships <a name="DataAwsIdentitystoreGroupMembershipsGroupMemberships" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMemberships"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMemberships.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsidentitystoregroupmemberships"

&dataawsidentitystoregroupmemberships.DataAwsIdentitystoreGroupMembershipsGroupMemberships {

}
```


### DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberId <a name="DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberId.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsidentitystoregroupmemberships"

&dataawsidentitystoregroupmemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberId {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsIdentitystoreGroupMembershipsGroupMembershipsList <a name="DataAwsIdentitystoreGroupMembershipsGroupMembershipsList" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsidentitystoregroupmemberships"

dataawsidentitystoregroupmemberships.NewDataAwsIdentitystoreGroupMembershipsGroupMembershipsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsIdentitystoreGroupMembershipsGroupMembershipsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList.get"></a>

```go
func Get(index *f64) DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference <a name="DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsidentitystoregroupmemberships"

dataawsidentitystoregroupmemberships.NewDataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.property.userId">UserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberId">DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.property.userId"></a>

```go
func UserId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberId
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberId">DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberId</a>

---


### DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference <a name="DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsidentitystoregroupmemberships"

dataawsidentitystoregroupmemberships.NewDataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.property.identityStoreId">IdentityStoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.property.memberId">MemberId</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference">DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.property.membershipId">MembershipId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMemberships">DataAwsIdentitystoreGroupMembershipsGroupMemberships</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `IdentityStoreId`<sup>Required</sup> <a name="IdentityStoreId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.property.identityStoreId"></a>

```go
func IdentityStoreId() *string
```

- *Type:* *string

---

##### `MemberId`<sup>Required</sup> <a name="MemberId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.property.memberId"></a>

```go
func MemberId() DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference">DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference</a>

---

##### `MembershipId`<sup>Required</sup> <a name="MembershipId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.property.membershipId"></a>

```go
func MembershipId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsIdentitystoreGroupMembershipsGroupMemberships
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMemberships">DataAwsIdentitystoreGroupMembershipsGroupMemberships</a>

---



