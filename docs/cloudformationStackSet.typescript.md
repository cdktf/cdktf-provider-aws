# `cloudformationStackSet` Submodule <a name="`cloudformationStackSet` Submodule" id="@cdktf/provider-aws.cloudformationStackSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudformationStackSet <a name="CloudformationStackSet" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set aws_cloudformation_stack_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer"></a>

```typescript
import { cloudformationStackSet } from '@cdktf/provider-aws'

new cloudformationStackSet.CloudformationStackSet(scope: Construct, id: string, config: CloudformationStackSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig">CloudformationStackSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig">CloudformationStackSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.putAutoDeployment">putAutoDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.putOperationPreferences">putOperationPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetAdministrationRoleArn">resetAdministrationRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetAutoDeployment">resetAutoDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetCallAs">resetCallAs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetCapabilities">resetCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetExecutionRoleName">resetExecutionRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetOperationPreferences">resetOperationPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetPermissionModel">resetPermissionModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetTemplateBody">resetTemplateBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetTemplateUrl">resetTemplateUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAutoDeployment` <a name="putAutoDeployment" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.putAutoDeployment"></a>

```typescript
public putAutoDeployment(value: CloudformationStackSetAutoDeployment): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.putAutoDeployment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment">CloudformationStackSetAutoDeployment</a>

---

##### `putOperationPreferences` <a name="putOperationPreferences" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.putOperationPreferences"></a>

```typescript
public putOperationPreferences(value: CloudformationStackSetOperationPreferences): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.putOperationPreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences">CloudformationStackSetOperationPreferences</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.putTimeouts"></a>

```typescript
public putTimeouts(value: CloudformationStackSetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeouts">CloudformationStackSetTimeouts</a>

---

##### `resetAdministrationRoleArn` <a name="resetAdministrationRoleArn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetAdministrationRoleArn"></a>

```typescript
public resetAdministrationRoleArn(): void
```

##### `resetAutoDeployment` <a name="resetAutoDeployment" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetAutoDeployment"></a>

```typescript
public resetAutoDeployment(): void
```

##### `resetCallAs` <a name="resetCallAs" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetCallAs"></a>

```typescript
public resetCallAs(): void
```

##### `resetCapabilities` <a name="resetCapabilities" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetCapabilities"></a>

```typescript
public resetCapabilities(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExecutionRoleName` <a name="resetExecutionRoleName" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetExecutionRoleName"></a>

```typescript
public resetExecutionRoleName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOperationPreferences` <a name="resetOperationPreferences" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetOperationPreferences"></a>

```typescript
public resetOperationPreferences(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetPermissionModel` <a name="resetPermissionModel" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetPermissionModel"></a>

```typescript
public resetPermissionModel(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTemplateBody` <a name="resetTemplateBody" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetTemplateBody"></a>

```typescript
public resetTemplateBody(): void
```

##### `resetTemplateUrl` <a name="resetTemplateUrl" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetTemplateUrl"></a>

```typescript
public resetTemplateUrl(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.isConstruct"></a>

```typescript
import { cloudformationStackSet } from '@cdktf/provider-aws'

cloudformationStackSet.CloudformationStackSet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.isTerraformElement"></a>

```typescript
import { cloudformationStackSet } from '@cdktf/provider-aws'

cloudformationStackSet.CloudformationStackSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.isTerraformResource"></a>

```typescript
import { cloudformationStackSet } from '@cdktf/provider-aws'

cloudformationStackSet.CloudformationStackSet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.autoDeployment">autoDeployment</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference">CloudformationStackSetAutoDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.operationPreferences">operationPreferences</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference">CloudformationStackSetOperationPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.stackSetId">stackSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference">CloudformationStackSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.administrationRoleArnInput">administrationRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.autoDeploymentInput">autoDeploymentInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment">CloudformationStackSetAutoDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.callAsInput">callAsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.capabilitiesInput">capabilitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.executionRoleNameInput">executionRoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.operationPreferencesInput">operationPreferencesInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences">CloudformationStackSetOperationPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.permissionModelInput">permissionModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.templateBodyInput">templateBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.templateUrlInput">templateUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeouts">CloudformationStackSetTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.administrationRoleArn">administrationRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.callAs">callAs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.capabilities">capabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.executionRoleName">executionRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.permissionModel">permissionModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.templateBody">templateBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.templateUrl">templateUrl</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `autoDeployment`<sup>Required</sup> <a name="autoDeployment" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.autoDeployment"></a>

```typescript
public readonly autoDeployment: CloudformationStackSetAutoDeploymentOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference">CloudformationStackSetAutoDeploymentOutputReference</a>

---

##### `operationPreferences`<sup>Required</sup> <a name="operationPreferences" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.operationPreferences"></a>

```typescript
public readonly operationPreferences: CloudformationStackSetOperationPreferencesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference">CloudformationStackSetOperationPreferencesOutputReference</a>

---

##### `stackSetId`<sup>Required</sup> <a name="stackSetId" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.stackSetId"></a>

```typescript
public readonly stackSetId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.timeouts"></a>

```typescript
public readonly timeouts: CloudformationStackSetTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference">CloudformationStackSetTimeoutsOutputReference</a>

---

##### `administrationRoleArnInput`<sup>Optional</sup> <a name="administrationRoleArnInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.administrationRoleArnInput"></a>

```typescript
public readonly administrationRoleArnInput: string;
```

- *Type:* string

---

##### `autoDeploymentInput`<sup>Optional</sup> <a name="autoDeploymentInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.autoDeploymentInput"></a>

```typescript
public readonly autoDeploymentInput: CloudformationStackSetAutoDeployment;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment">CloudformationStackSetAutoDeployment</a>

---

##### `callAsInput`<sup>Optional</sup> <a name="callAsInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.callAsInput"></a>

```typescript
public readonly callAsInput: string;
```

- *Type:* string

---

##### `capabilitiesInput`<sup>Optional</sup> <a name="capabilitiesInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.capabilitiesInput"></a>

```typescript
public readonly capabilitiesInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `executionRoleNameInput`<sup>Optional</sup> <a name="executionRoleNameInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.executionRoleNameInput"></a>

```typescript
public readonly executionRoleNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `operationPreferencesInput`<sup>Optional</sup> <a name="operationPreferencesInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.operationPreferencesInput"></a>

```typescript
public readonly operationPreferencesInput: CloudformationStackSetOperationPreferences;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences">CloudformationStackSetOperationPreferences</a>

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `permissionModelInput`<sup>Optional</sup> <a name="permissionModelInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.permissionModelInput"></a>

```typescript
public readonly permissionModelInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `templateBodyInput`<sup>Optional</sup> <a name="templateBodyInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.templateBodyInput"></a>

```typescript
public readonly templateBodyInput: string;
```

- *Type:* string

---

##### `templateUrlInput`<sup>Optional</sup> <a name="templateUrlInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.templateUrlInput"></a>

```typescript
public readonly templateUrlInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: CloudformationStackSetTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeouts">CloudformationStackSetTimeouts</a> | cdktf.IResolvable

---

##### `administrationRoleArn`<sup>Required</sup> <a name="administrationRoleArn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.administrationRoleArn"></a>

```typescript
public readonly administrationRoleArn: string;
```

- *Type:* string

---

##### `callAs`<sup>Required</sup> <a name="callAs" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.callAs"></a>

```typescript
public readonly callAs: string;
```

- *Type:* string

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.capabilities"></a>

```typescript
public readonly capabilities: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `executionRoleName`<sup>Required</sup> <a name="executionRoleName" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.executionRoleName"></a>

```typescript
public readonly executionRoleName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `permissionModel`<sup>Required</sup> <a name="permissionModel" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.permissionModel"></a>

```typescript
public readonly permissionModel: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `templateBody`<sup>Required</sup> <a name="templateBody" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.templateBody"></a>

```typescript
public readonly templateBody: string;
```

- *Type:* string

---

##### `templateUrl`<sup>Required</sup> <a name="templateUrl" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.templateUrl"></a>

```typescript
public readonly templateUrl: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudformationStackSetAutoDeployment <a name="CloudformationStackSetAutoDeployment" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment.Initializer"></a>

```typescript
import { cloudformationStackSet } from '@cdktf/provider-aws'

const cloudformationStackSetAutoDeployment: cloudformationStackSet.CloudformationStackSetAutoDeployment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#enabled CloudformationStackSet#enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment.property.retainStacksOnAccountRemoval">retainStacksOnAccountRemoval</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#retain_stacks_on_account_removal CloudformationStackSet#retain_stacks_on_account_removal}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#enabled CloudformationStackSet#enabled}.

---

##### `retainStacksOnAccountRemoval`<sup>Optional</sup> <a name="retainStacksOnAccountRemoval" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment.property.retainStacksOnAccountRemoval"></a>

```typescript
public readonly retainStacksOnAccountRemoval: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#retain_stacks_on_account_removal CloudformationStackSet#retain_stacks_on_account_removal}.

---

### CloudformationStackSetConfig <a name="CloudformationStackSetConfig" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.Initializer"></a>

```typescript
import { cloudformationStackSet } from '@cdktf/provider-aws'

const cloudformationStackSetConfig: cloudformationStackSet.CloudformationStackSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#name CloudformationStackSet#name}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.administrationRoleArn">administrationRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#administration_role_arn CloudformationStackSet#administration_role_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.autoDeployment">autoDeployment</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment">CloudformationStackSetAutoDeployment</a></code> | auto_deployment block. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.callAs">callAs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#call_as CloudformationStackSet#call_as}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.capabilities">capabilities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#capabilities CloudformationStackSet#capabilities}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#description CloudformationStackSet#description}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.executionRoleName">executionRoleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#execution_role_name CloudformationStackSet#execution_role_name}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#id CloudformationStackSet#id}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.operationPreferences">operationPreferences</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences">CloudformationStackSetOperationPreferences</a></code> | operation_preferences block. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#parameters CloudformationStackSet#parameters}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.permissionModel">permissionModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#permission_model CloudformationStackSet#permission_model}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#tags CloudformationStackSet#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#tags_all CloudformationStackSet#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.templateBody">templateBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#template_body CloudformationStackSet#template_body}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.templateUrl">templateUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#template_url CloudformationStackSet#template_url}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeouts">CloudformationStackSetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#name CloudformationStackSet#name}.

---

##### `administrationRoleArn`<sup>Optional</sup> <a name="administrationRoleArn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.administrationRoleArn"></a>

```typescript
public readonly administrationRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#administration_role_arn CloudformationStackSet#administration_role_arn}.

---

##### `autoDeployment`<sup>Optional</sup> <a name="autoDeployment" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.autoDeployment"></a>

```typescript
public readonly autoDeployment: CloudformationStackSetAutoDeployment;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment">CloudformationStackSetAutoDeployment</a>

auto_deployment block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#auto_deployment CloudformationStackSet#auto_deployment}

---

##### `callAs`<sup>Optional</sup> <a name="callAs" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.callAs"></a>

```typescript
public readonly callAs: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#call_as CloudformationStackSet#call_as}.

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.capabilities"></a>

```typescript
public readonly capabilities: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#capabilities CloudformationStackSet#capabilities}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#description CloudformationStackSet#description}.

---

##### `executionRoleName`<sup>Optional</sup> <a name="executionRoleName" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.executionRoleName"></a>

```typescript
public readonly executionRoleName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#execution_role_name CloudformationStackSet#execution_role_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#id CloudformationStackSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `operationPreferences`<sup>Optional</sup> <a name="operationPreferences" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.operationPreferences"></a>

```typescript
public readonly operationPreferences: CloudformationStackSetOperationPreferences;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences">CloudformationStackSetOperationPreferences</a>

operation_preferences block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#operation_preferences CloudformationStackSet#operation_preferences}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#parameters CloudformationStackSet#parameters}.

---

##### `permissionModel`<sup>Optional</sup> <a name="permissionModel" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.permissionModel"></a>

```typescript
public readonly permissionModel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#permission_model CloudformationStackSet#permission_model}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#tags CloudformationStackSet#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#tags_all CloudformationStackSet#tags_all}.

---

##### `templateBody`<sup>Optional</sup> <a name="templateBody" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.templateBody"></a>

```typescript
public readonly templateBody: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#template_body CloudformationStackSet#template_body}.

---

##### `templateUrl`<sup>Optional</sup> <a name="templateUrl" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.templateUrl"></a>

```typescript
public readonly templateUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#template_url CloudformationStackSet#template_url}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CloudformationStackSetTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeouts">CloudformationStackSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#timeouts CloudformationStackSet#timeouts}

---

### CloudformationStackSetOperationPreferences <a name="CloudformationStackSetOperationPreferences" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.Initializer"></a>

```typescript
import { cloudformationStackSet } from '@cdktf/provider-aws'

const cloudformationStackSetOperationPreferences: cloudformationStackSet.CloudformationStackSetOperationPreferences = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.failureToleranceCount">failureToleranceCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#failure_tolerance_count CloudformationStackSet#failure_tolerance_count}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.failureTolerancePercentage">failureTolerancePercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#failure_tolerance_percentage CloudformationStackSet#failure_tolerance_percentage}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.maxConcurrentCount">maxConcurrentCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#max_concurrent_count CloudformationStackSet#max_concurrent_count}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.maxConcurrentPercentage">maxConcurrentPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#max_concurrent_percentage CloudformationStackSet#max_concurrent_percentage}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.regionConcurrencyType">regionConcurrencyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#region_concurrency_type CloudformationStackSet#region_concurrency_type}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.regionOrder">regionOrder</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#region_order CloudformationStackSet#region_order}. |

---

##### `failureToleranceCount`<sup>Optional</sup> <a name="failureToleranceCount" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.failureToleranceCount"></a>

```typescript
public readonly failureToleranceCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#failure_tolerance_count CloudformationStackSet#failure_tolerance_count}.

---

##### `failureTolerancePercentage`<sup>Optional</sup> <a name="failureTolerancePercentage" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.failureTolerancePercentage"></a>

```typescript
public readonly failureTolerancePercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#failure_tolerance_percentage CloudformationStackSet#failure_tolerance_percentage}.

---

##### `maxConcurrentCount`<sup>Optional</sup> <a name="maxConcurrentCount" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.maxConcurrentCount"></a>

```typescript
public readonly maxConcurrentCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#max_concurrent_count CloudformationStackSet#max_concurrent_count}.

---

##### `maxConcurrentPercentage`<sup>Optional</sup> <a name="maxConcurrentPercentage" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.maxConcurrentPercentage"></a>

```typescript
public readonly maxConcurrentPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#max_concurrent_percentage CloudformationStackSet#max_concurrent_percentage}.

---

##### `regionConcurrencyType`<sup>Optional</sup> <a name="regionConcurrencyType" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.regionConcurrencyType"></a>

```typescript
public readonly regionConcurrencyType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#region_concurrency_type CloudformationStackSet#region_concurrency_type}.

---

##### `regionOrder`<sup>Optional</sup> <a name="regionOrder" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.regionOrder"></a>

```typescript
public readonly regionOrder: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#region_order CloudformationStackSet#region_order}.

---

### CloudformationStackSetTimeouts <a name="CloudformationStackSetTimeouts" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeouts.Initializer"></a>

```typescript
import { cloudformationStackSet } from '@cdktf/provider-aws'

const cloudformationStackSetTimeouts: cloudformationStackSet.CloudformationStackSetTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#update CloudformationStackSet#update}. |

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#update CloudformationStackSet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudformationStackSetAutoDeploymentOutputReference <a name="CloudformationStackSetAutoDeploymentOutputReference" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.Initializer"></a>

```typescript
import { cloudformationStackSet } from '@cdktf/provider-aws'

new cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.resetRetainStacksOnAccountRemoval">resetRetainStacksOnAccountRemoval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetRetainStacksOnAccountRemoval` <a name="resetRetainStacksOnAccountRemoval" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.resetRetainStacksOnAccountRemoval"></a>

```typescript
public resetRetainStacksOnAccountRemoval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.retainStacksOnAccountRemovalInput">retainStacksOnAccountRemovalInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.retainStacksOnAccountRemoval">retainStacksOnAccountRemoval</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment">CloudformationStackSetAutoDeployment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retainStacksOnAccountRemovalInput`<sup>Optional</sup> <a name="retainStacksOnAccountRemovalInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.retainStacksOnAccountRemovalInput"></a>

```typescript
public readonly retainStacksOnAccountRemovalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retainStacksOnAccountRemoval`<sup>Required</sup> <a name="retainStacksOnAccountRemoval" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.retainStacksOnAccountRemoval"></a>

```typescript
public readonly retainStacksOnAccountRemoval: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudformationStackSetAutoDeployment;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment">CloudformationStackSetAutoDeployment</a>

---


### CloudformationStackSetOperationPreferencesOutputReference <a name="CloudformationStackSetOperationPreferencesOutputReference" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.Initializer"></a>

```typescript
import { cloudformationStackSet } from '@cdktf/provider-aws'

new cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetFailureToleranceCount">resetFailureToleranceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetFailureTolerancePercentage">resetFailureTolerancePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetMaxConcurrentCount">resetMaxConcurrentCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetMaxConcurrentPercentage">resetMaxConcurrentPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetRegionConcurrencyType">resetRegionConcurrencyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetRegionOrder">resetRegionOrder</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFailureToleranceCount` <a name="resetFailureToleranceCount" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetFailureToleranceCount"></a>

```typescript
public resetFailureToleranceCount(): void
```

##### `resetFailureTolerancePercentage` <a name="resetFailureTolerancePercentage" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetFailureTolerancePercentage"></a>

```typescript
public resetFailureTolerancePercentage(): void
```

##### `resetMaxConcurrentCount` <a name="resetMaxConcurrentCount" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetMaxConcurrentCount"></a>

```typescript
public resetMaxConcurrentCount(): void
```

##### `resetMaxConcurrentPercentage` <a name="resetMaxConcurrentPercentage" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetMaxConcurrentPercentage"></a>

```typescript
public resetMaxConcurrentPercentage(): void
```

##### `resetRegionConcurrencyType` <a name="resetRegionConcurrencyType" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetRegionConcurrencyType"></a>

```typescript
public resetRegionConcurrencyType(): void
```

##### `resetRegionOrder` <a name="resetRegionOrder" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetRegionOrder"></a>

```typescript
public resetRegionOrder(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.failureToleranceCountInput">failureToleranceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.failureTolerancePercentageInput">failureTolerancePercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentCountInput">maxConcurrentCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentPercentageInput">maxConcurrentPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.regionConcurrencyTypeInput">regionConcurrencyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.regionOrderInput">regionOrderInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.failureToleranceCount">failureToleranceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.failureTolerancePercentage">failureTolerancePercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentCount">maxConcurrentCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentPercentage">maxConcurrentPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.regionConcurrencyType">regionConcurrencyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.regionOrder">regionOrder</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences">CloudformationStackSetOperationPreferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `failureToleranceCountInput`<sup>Optional</sup> <a name="failureToleranceCountInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.failureToleranceCountInput"></a>

```typescript
public readonly failureToleranceCountInput: number;
```

- *Type:* number

---

##### `failureTolerancePercentageInput`<sup>Optional</sup> <a name="failureTolerancePercentageInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.failureTolerancePercentageInput"></a>

```typescript
public readonly failureTolerancePercentageInput: number;
```

- *Type:* number

---

##### `maxConcurrentCountInput`<sup>Optional</sup> <a name="maxConcurrentCountInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentCountInput"></a>

```typescript
public readonly maxConcurrentCountInput: number;
```

- *Type:* number

---

##### `maxConcurrentPercentageInput`<sup>Optional</sup> <a name="maxConcurrentPercentageInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentPercentageInput"></a>

```typescript
public readonly maxConcurrentPercentageInput: number;
```

- *Type:* number

---

##### `regionConcurrencyTypeInput`<sup>Optional</sup> <a name="regionConcurrencyTypeInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.regionConcurrencyTypeInput"></a>

```typescript
public readonly regionConcurrencyTypeInput: string;
```

- *Type:* string

---

##### `regionOrderInput`<sup>Optional</sup> <a name="regionOrderInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.regionOrderInput"></a>

```typescript
public readonly regionOrderInput: string[];
```

- *Type:* string[]

---

##### `failureToleranceCount`<sup>Required</sup> <a name="failureToleranceCount" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.failureToleranceCount"></a>

```typescript
public readonly failureToleranceCount: number;
```

- *Type:* number

---

##### `failureTolerancePercentage`<sup>Required</sup> <a name="failureTolerancePercentage" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.failureTolerancePercentage"></a>

```typescript
public readonly failureTolerancePercentage: number;
```

- *Type:* number

---

##### `maxConcurrentCount`<sup>Required</sup> <a name="maxConcurrentCount" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentCount"></a>

```typescript
public readonly maxConcurrentCount: number;
```

- *Type:* number

---

##### `maxConcurrentPercentage`<sup>Required</sup> <a name="maxConcurrentPercentage" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentPercentage"></a>

```typescript
public readonly maxConcurrentPercentage: number;
```

- *Type:* number

---

##### `regionConcurrencyType`<sup>Required</sup> <a name="regionConcurrencyType" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.regionConcurrencyType"></a>

```typescript
public readonly regionConcurrencyType: string;
```

- *Type:* string

---

##### `regionOrder`<sup>Required</sup> <a name="regionOrder" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.regionOrder"></a>

```typescript
public readonly regionOrder: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudformationStackSetOperationPreferences;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences">CloudformationStackSetOperationPreferences</a>

---


### CloudformationStackSetTimeoutsOutputReference <a name="CloudformationStackSetTimeoutsOutputReference" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.Initializer"></a>

```typescript
import { cloudformationStackSet } from '@cdktf/provider-aws'

new cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeouts">CloudformationStackSetTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudformationStackSetTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeouts">CloudformationStackSetTimeouts</a> | cdktf.IResolvable

---



