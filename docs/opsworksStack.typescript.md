# `opsworksStack` Submodule <a name="`opsworksStack` Submodule" id="@cdktf/provider-aws.opsworksStack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsworksStack <a name="OpsworksStack" id="@cdktf/provider-aws.opsworksStack.OpsworksStack"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack aws_opsworks_stack}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer"></a>

```typescript
import { opsworksStack } from '@cdktf/provider-aws'

new opsworksStack.OpsworksStack(scope: Construct, id: string, config: OpsworksStackConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig">OpsworksStackConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig">OpsworksStackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.putCustomCookbooksSource">putCustomCookbooksSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetAgentVersion">resetAgentVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetBerkshelfVersion">resetBerkshelfVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetColor">resetColor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetConfigurationManagerName">resetConfigurationManagerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetConfigurationManagerVersion">resetConfigurationManagerVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetCustomCookbooksSource">resetCustomCookbooksSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetCustomJson">resetCustomJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultAvailabilityZone">resetDefaultAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultOs">resetDefaultOs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultRootDeviceType">resetDefaultRootDeviceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultSshKeyName">resetDefaultSshKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultSubnetId">resetDefaultSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetHostnameTheme">resetHostnameTheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetManageBerkshelf">resetManageBerkshelf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetUseCustomCookbooks">resetUseCustomCookbooks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetUseOpsworksSecurityGroups">resetUseOpsworksSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCustomCookbooksSource` <a name="putCustomCookbooksSource" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.putCustomCookbooksSource"></a>

```typescript
public putCustomCookbooksSource(value: OpsworksStackCustomCookbooksSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.putCustomCookbooksSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource">OpsworksStackCustomCookbooksSource</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.putTimeouts"></a>

```typescript
public putTimeouts(value: OpsworksStackTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts">OpsworksStackTimeouts</a>

---

##### `resetAgentVersion` <a name="resetAgentVersion" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetAgentVersion"></a>

```typescript
public resetAgentVersion(): void
```

##### `resetBerkshelfVersion` <a name="resetBerkshelfVersion" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetBerkshelfVersion"></a>

```typescript
public resetBerkshelfVersion(): void
```

##### `resetColor` <a name="resetColor" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetColor"></a>

```typescript
public resetColor(): void
```

##### `resetConfigurationManagerName` <a name="resetConfigurationManagerName" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetConfigurationManagerName"></a>

```typescript
public resetConfigurationManagerName(): void
```

##### `resetConfigurationManagerVersion` <a name="resetConfigurationManagerVersion" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetConfigurationManagerVersion"></a>

```typescript
public resetConfigurationManagerVersion(): void
```

##### `resetCustomCookbooksSource` <a name="resetCustomCookbooksSource" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetCustomCookbooksSource"></a>

```typescript
public resetCustomCookbooksSource(): void
```

##### `resetCustomJson` <a name="resetCustomJson" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetCustomJson"></a>

```typescript
public resetCustomJson(): void
```

##### `resetDefaultAvailabilityZone` <a name="resetDefaultAvailabilityZone" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultAvailabilityZone"></a>

```typescript
public resetDefaultAvailabilityZone(): void
```

##### `resetDefaultOs` <a name="resetDefaultOs" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultOs"></a>

```typescript
public resetDefaultOs(): void
```

##### `resetDefaultRootDeviceType` <a name="resetDefaultRootDeviceType" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultRootDeviceType"></a>

```typescript
public resetDefaultRootDeviceType(): void
```

##### `resetDefaultSshKeyName` <a name="resetDefaultSshKeyName" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultSshKeyName"></a>

```typescript
public resetDefaultSshKeyName(): void
```

##### `resetDefaultSubnetId` <a name="resetDefaultSubnetId" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultSubnetId"></a>

```typescript
public resetDefaultSubnetId(): void
```

##### `resetHostnameTheme` <a name="resetHostnameTheme" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetHostnameTheme"></a>

```typescript
public resetHostnameTheme(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetId"></a>

```typescript
public resetId(): void
```

##### `resetManageBerkshelf` <a name="resetManageBerkshelf" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetManageBerkshelf"></a>

```typescript
public resetManageBerkshelf(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUseCustomCookbooks` <a name="resetUseCustomCookbooks" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetUseCustomCookbooks"></a>

```typescript
public resetUseCustomCookbooks(): void
```

##### `resetUseOpsworksSecurityGroups` <a name="resetUseOpsworksSecurityGroups" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetUseOpsworksSecurityGroups"></a>

```typescript
public resetUseOpsworksSecurityGroups(): void
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetVpcId"></a>

```typescript
public resetVpcId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.isConstruct"></a>

```typescript
import { opsworksStack } from '@cdktf/provider-aws'

opsworksStack.OpsworksStack.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.isTerraformElement"></a>

```typescript
import { opsworksStack } from '@cdktf/provider-aws'

opsworksStack.OpsworksStack.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.isTerraformResource"></a>

```typescript
import { opsworksStack } from '@cdktf/provider-aws'

opsworksStack.OpsworksStack.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.customCookbooksSource">customCookbooksSource</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference">OpsworksStackCustomCookbooksSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.stackEndpoint">stackEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference">OpsworksStackTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.agentVersionInput">agentVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.berkshelfVersionInput">berkshelfVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.colorInput">colorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.configurationManagerNameInput">configurationManagerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.configurationManagerVersionInput">configurationManagerVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.customCookbooksSourceInput">customCookbooksSourceInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource">OpsworksStackCustomCookbooksSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.customJsonInput">customJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultAvailabilityZoneInput">defaultAvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultInstanceProfileArnInput">defaultInstanceProfileArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultOsInput">defaultOsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultRootDeviceTypeInput">defaultRootDeviceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultSshKeyNameInput">defaultSshKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultSubnetIdInput">defaultSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.hostnameThemeInput">hostnameThemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.manageBerkshelfInput">manageBerkshelfInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.serviceRoleArnInput">serviceRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts">OpsworksStackTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.useCustomCookbooksInput">useCustomCookbooksInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.useOpsworksSecurityGroupsInput">useOpsworksSecurityGroupsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.agentVersion">agentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.berkshelfVersion">berkshelfVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.color">color</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.configurationManagerName">configurationManagerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.configurationManagerVersion">configurationManagerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.customJson">customJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultAvailabilityZone">defaultAvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultInstanceProfileArn">defaultInstanceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultOs">defaultOs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultRootDeviceType">defaultRootDeviceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultSshKeyName">defaultSshKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultSubnetId">defaultSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.hostnameTheme">hostnameTheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.manageBerkshelf">manageBerkshelf</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.serviceRoleArn">serviceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.useCustomCookbooks">useCustomCookbooks</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.useOpsworksSecurityGroups">useOpsworksSecurityGroups</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `customCookbooksSource`<sup>Required</sup> <a name="customCookbooksSource" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.customCookbooksSource"></a>

```typescript
public readonly customCookbooksSource: OpsworksStackCustomCookbooksSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference">OpsworksStackCustomCookbooksSourceOutputReference</a>

---

##### `stackEndpoint`<sup>Required</sup> <a name="stackEndpoint" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.stackEndpoint"></a>

```typescript
public readonly stackEndpoint: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.timeouts"></a>

```typescript
public readonly timeouts: OpsworksStackTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference">OpsworksStackTimeoutsOutputReference</a>

---

##### `agentVersionInput`<sup>Optional</sup> <a name="agentVersionInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.agentVersionInput"></a>

```typescript
public readonly agentVersionInput: string;
```

- *Type:* string

---

##### `berkshelfVersionInput`<sup>Optional</sup> <a name="berkshelfVersionInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.berkshelfVersionInput"></a>

```typescript
public readonly berkshelfVersionInput: string;
```

- *Type:* string

---

##### `colorInput`<sup>Optional</sup> <a name="colorInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.colorInput"></a>

```typescript
public readonly colorInput: string;
```

- *Type:* string

---

##### `configurationManagerNameInput`<sup>Optional</sup> <a name="configurationManagerNameInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.configurationManagerNameInput"></a>

```typescript
public readonly configurationManagerNameInput: string;
```

- *Type:* string

---

##### `configurationManagerVersionInput`<sup>Optional</sup> <a name="configurationManagerVersionInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.configurationManagerVersionInput"></a>

```typescript
public readonly configurationManagerVersionInput: string;
```

- *Type:* string

---

##### `customCookbooksSourceInput`<sup>Optional</sup> <a name="customCookbooksSourceInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.customCookbooksSourceInput"></a>

```typescript
public readonly customCookbooksSourceInput: OpsworksStackCustomCookbooksSource;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource">OpsworksStackCustomCookbooksSource</a>

---

##### `customJsonInput`<sup>Optional</sup> <a name="customJsonInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.customJsonInput"></a>

```typescript
public readonly customJsonInput: string;
```

- *Type:* string

---

##### `defaultAvailabilityZoneInput`<sup>Optional</sup> <a name="defaultAvailabilityZoneInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultAvailabilityZoneInput"></a>

```typescript
public readonly defaultAvailabilityZoneInput: string;
```

- *Type:* string

---

##### `defaultInstanceProfileArnInput`<sup>Optional</sup> <a name="defaultInstanceProfileArnInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultInstanceProfileArnInput"></a>

```typescript
public readonly defaultInstanceProfileArnInput: string;
```

- *Type:* string

---

##### `defaultOsInput`<sup>Optional</sup> <a name="defaultOsInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultOsInput"></a>

```typescript
public readonly defaultOsInput: string;
```

- *Type:* string

---

##### `defaultRootDeviceTypeInput`<sup>Optional</sup> <a name="defaultRootDeviceTypeInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultRootDeviceTypeInput"></a>

```typescript
public readonly defaultRootDeviceTypeInput: string;
```

- *Type:* string

---

##### `defaultSshKeyNameInput`<sup>Optional</sup> <a name="defaultSshKeyNameInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultSshKeyNameInput"></a>

```typescript
public readonly defaultSshKeyNameInput: string;
```

- *Type:* string

---

##### `defaultSubnetIdInput`<sup>Optional</sup> <a name="defaultSubnetIdInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultSubnetIdInput"></a>

```typescript
public readonly defaultSubnetIdInput: string;
```

- *Type:* string

---

##### `hostnameThemeInput`<sup>Optional</sup> <a name="hostnameThemeInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.hostnameThemeInput"></a>

```typescript
public readonly hostnameThemeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `manageBerkshelfInput`<sup>Optional</sup> <a name="manageBerkshelfInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.manageBerkshelfInput"></a>

```typescript
public readonly manageBerkshelfInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `serviceRoleArnInput`<sup>Optional</sup> <a name="serviceRoleArnInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.serviceRoleArnInput"></a>

```typescript
public readonly serviceRoleArnInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: OpsworksStackTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts">OpsworksStackTimeouts</a> | cdktf.IResolvable

---

##### `useCustomCookbooksInput`<sup>Optional</sup> <a name="useCustomCookbooksInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.useCustomCookbooksInput"></a>

```typescript
public readonly useCustomCookbooksInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useOpsworksSecurityGroupsInput`<sup>Optional</sup> <a name="useOpsworksSecurityGroupsInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.useOpsworksSecurityGroupsInput"></a>

```typescript
public readonly useOpsworksSecurityGroupsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `agentVersion`<sup>Required</sup> <a name="agentVersion" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.agentVersion"></a>

```typescript
public readonly agentVersion: string;
```

- *Type:* string

---

##### `berkshelfVersion`<sup>Required</sup> <a name="berkshelfVersion" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.berkshelfVersion"></a>

```typescript
public readonly berkshelfVersion: string;
```

- *Type:* string

---

##### `color`<sup>Required</sup> <a name="color" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.color"></a>

```typescript
public readonly color: string;
```

- *Type:* string

---

##### `configurationManagerName`<sup>Required</sup> <a name="configurationManagerName" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.configurationManagerName"></a>

```typescript
public readonly configurationManagerName: string;
```

- *Type:* string

---

##### `configurationManagerVersion`<sup>Required</sup> <a name="configurationManagerVersion" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.configurationManagerVersion"></a>

```typescript
public readonly configurationManagerVersion: string;
```

- *Type:* string

---

##### `customJson`<sup>Required</sup> <a name="customJson" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.customJson"></a>

```typescript
public readonly customJson: string;
```

- *Type:* string

---

##### `defaultAvailabilityZone`<sup>Required</sup> <a name="defaultAvailabilityZone" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultAvailabilityZone"></a>

```typescript
public readonly defaultAvailabilityZone: string;
```

- *Type:* string

---

##### `defaultInstanceProfileArn`<sup>Required</sup> <a name="defaultInstanceProfileArn" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultInstanceProfileArn"></a>

```typescript
public readonly defaultInstanceProfileArn: string;
```

- *Type:* string

---

##### `defaultOs`<sup>Required</sup> <a name="defaultOs" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultOs"></a>

```typescript
public readonly defaultOs: string;
```

- *Type:* string

---

##### `defaultRootDeviceType`<sup>Required</sup> <a name="defaultRootDeviceType" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultRootDeviceType"></a>

```typescript
public readonly defaultRootDeviceType: string;
```

- *Type:* string

---

##### `defaultSshKeyName`<sup>Required</sup> <a name="defaultSshKeyName" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultSshKeyName"></a>

```typescript
public readonly defaultSshKeyName: string;
```

- *Type:* string

---

##### `defaultSubnetId`<sup>Required</sup> <a name="defaultSubnetId" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultSubnetId"></a>

```typescript
public readonly defaultSubnetId: string;
```

- *Type:* string

---

##### `hostnameTheme`<sup>Required</sup> <a name="hostnameTheme" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.hostnameTheme"></a>

```typescript
public readonly hostnameTheme: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `manageBerkshelf`<sup>Required</sup> <a name="manageBerkshelf" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.manageBerkshelf"></a>

```typescript
public readonly manageBerkshelf: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `serviceRoleArn`<sup>Required</sup> <a name="serviceRoleArn" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.serviceRoleArn"></a>

```typescript
public readonly serviceRoleArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `useCustomCookbooks`<sup>Required</sup> <a name="useCustomCookbooks" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.useCustomCookbooks"></a>

```typescript
public readonly useCustomCookbooks: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useOpsworksSecurityGroups`<sup>Required</sup> <a name="useOpsworksSecurityGroups" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.useOpsworksSecurityGroups"></a>

```typescript
public readonly useOpsworksSecurityGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpsworksStackConfig <a name="OpsworksStackConfig" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.Initializer"></a>

```typescript
import { opsworksStack } from '@cdktf/provider-aws'

const opsworksStackConfig: opsworksStack.OpsworksStackConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultInstanceProfileArn">defaultInstanceProfileArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_instance_profile_arn OpsworksStack#default_instance_profile_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#name OpsworksStack#name}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#region OpsworksStack#region}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.serviceRoleArn">serviceRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#service_role_arn OpsworksStack#service_role_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.agentVersion">agentVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#agent_version OpsworksStack#agent_version}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.berkshelfVersion">berkshelfVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#berkshelf_version OpsworksStack#berkshelf_version}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.color">color</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#color OpsworksStack#color}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.configurationManagerName">configurationManagerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#configuration_manager_name OpsworksStack#configuration_manager_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.configurationManagerVersion">configurationManagerVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#configuration_manager_version OpsworksStack#configuration_manager_version}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.customCookbooksSource">customCookbooksSource</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource">OpsworksStackCustomCookbooksSource</a></code> | custom_cookbooks_source block. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.customJson">customJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#custom_json OpsworksStack#custom_json}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultAvailabilityZone">defaultAvailabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_availability_zone OpsworksStack#default_availability_zone}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultOs">defaultOs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_os OpsworksStack#default_os}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultRootDeviceType">defaultRootDeviceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_root_device_type OpsworksStack#default_root_device_type}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultSshKeyName">defaultSshKeyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_ssh_key_name OpsworksStack#default_ssh_key_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultSubnetId">defaultSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_subnet_id OpsworksStack#default_subnet_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.hostnameTheme">hostnameTheme</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#hostname_theme OpsworksStack#hostname_theme}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#id OpsworksStack#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.manageBerkshelf">manageBerkshelf</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#manage_berkshelf OpsworksStack#manage_berkshelf}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#tags OpsworksStack#tags}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#tags_all OpsworksStack#tags_all}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts">OpsworksStackTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.useCustomCookbooks">useCustomCookbooks</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#use_custom_cookbooks OpsworksStack#use_custom_cookbooks}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.useOpsworksSecurityGroups">useOpsworksSecurityGroups</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#use_opsworks_security_groups OpsworksStack#use_opsworks_security_groups}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#vpc_id OpsworksStack#vpc_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `defaultInstanceProfileArn`<sup>Required</sup> <a name="defaultInstanceProfileArn" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultInstanceProfileArn"></a>

```typescript
public readonly defaultInstanceProfileArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_instance_profile_arn OpsworksStack#default_instance_profile_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#name OpsworksStack#name}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#region OpsworksStack#region}.

---

##### `serviceRoleArn`<sup>Required</sup> <a name="serviceRoleArn" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.serviceRoleArn"></a>

```typescript
public readonly serviceRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#service_role_arn OpsworksStack#service_role_arn}.

---

##### `agentVersion`<sup>Optional</sup> <a name="agentVersion" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.agentVersion"></a>

```typescript
public readonly agentVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#agent_version OpsworksStack#agent_version}.

---

##### `berkshelfVersion`<sup>Optional</sup> <a name="berkshelfVersion" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.berkshelfVersion"></a>

```typescript
public readonly berkshelfVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#berkshelf_version OpsworksStack#berkshelf_version}.

---

##### `color`<sup>Optional</sup> <a name="color" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.color"></a>

```typescript
public readonly color: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#color OpsworksStack#color}.

---

##### `configurationManagerName`<sup>Optional</sup> <a name="configurationManagerName" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.configurationManagerName"></a>

```typescript
public readonly configurationManagerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#configuration_manager_name OpsworksStack#configuration_manager_name}.

---

##### `configurationManagerVersion`<sup>Optional</sup> <a name="configurationManagerVersion" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.configurationManagerVersion"></a>

```typescript
public readonly configurationManagerVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#configuration_manager_version OpsworksStack#configuration_manager_version}.

---

##### `customCookbooksSource`<sup>Optional</sup> <a name="customCookbooksSource" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.customCookbooksSource"></a>

```typescript
public readonly customCookbooksSource: OpsworksStackCustomCookbooksSource;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource">OpsworksStackCustomCookbooksSource</a>

custom_cookbooks_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#custom_cookbooks_source OpsworksStack#custom_cookbooks_source}

---

##### `customJson`<sup>Optional</sup> <a name="customJson" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.customJson"></a>

```typescript
public readonly customJson: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#custom_json OpsworksStack#custom_json}.

---

##### `defaultAvailabilityZone`<sup>Optional</sup> <a name="defaultAvailabilityZone" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultAvailabilityZone"></a>

```typescript
public readonly defaultAvailabilityZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_availability_zone OpsworksStack#default_availability_zone}.

---

##### `defaultOs`<sup>Optional</sup> <a name="defaultOs" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultOs"></a>

```typescript
public readonly defaultOs: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_os OpsworksStack#default_os}.

---

##### `defaultRootDeviceType`<sup>Optional</sup> <a name="defaultRootDeviceType" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultRootDeviceType"></a>

```typescript
public readonly defaultRootDeviceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_root_device_type OpsworksStack#default_root_device_type}.

---

##### `defaultSshKeyName`<sup>Optional</sup> <a name="defaultSshKeyName" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultSshKeyName"></a>

```typescript
public readonly defaultSshKeyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_ssh_key_name OpsworksStack#default_ssh_key_name}.

---

##### `defaultSubnetId`<sup>Optional</sup> <a name="defaultSubnetId" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultSubnetId"></a>

```typescript
public readonly defaultSubnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_subnet_id OpsworksStack#default_subnet_id}.

---

##### `hostnameTheme`<sup>Optional</sup> <a name="hostnameTheme" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.hostnameTheme"></a>

```typescript
public readonly hostnameTheme: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#hostname_theme OpsworksStack#hostname_theme}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#id OpsworksStack#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `manageBerkshelf`<sup>Optional</sup> <a name="manageBerkshelf" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.manageBerkshelf"></a>

```typescript
public readonly manageBerkshelf: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#manage_berkshelf OpsworksStack#manage_berkshelf}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#tags OpsworksStack#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#tags_all OpsworksStack#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OpsworksStackTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts">OpsworksStackTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#timeouts OpsworksStack#timeouts}

---

##### `useCustomCookbooks`<sup>Optional</sup> <a name="useCustomCookbooks" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.useCustomCookbooks"></a>

```typescript
public readonly useCustomCookbooks: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#use_custom_cookbooks OpsworksStack#use_custom_cookbooks}.

---

##### `useOpsworksSecurityGroups`<sup>Optional</sup> <a name="useOpsworksSecurityGroups" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.useOpsworksSecurityGroups"></a>

```typescript
public readonly useOpsworksSecurityGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#use_opsworks_security_groups OpsworksStack#use_opsworks_security_groups}.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#vpc_id OpsworksStack#vpc_id}.

---

### OpsworksStackCustomCookbooksSource <a name="OpsworksStackCustomCookbooksSource" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.Initializer"></a>

```typescript
import { opsworksStack } from '@cdktf/provider-aws'

const opsworksStackCustomCookbooksSource: opsworksStack.OpsworksStackCustomCookbooksSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#type OpsworksStack#type}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#url OpsworksStack#url}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#password OpsworksStack#password}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.revision">revision</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#revision OpsworksStack#revision}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.sshKey">sshKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#ssh_key OpsworksStack#ssh_key}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#username OpsworksStack#username}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#type OpsworksStack#type}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#url OpsworksStack#url}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#password OpsworksStack#password}.

---

##### `revision`<sup>Optional</sup> <a name="revision" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.revision"></a>

```typescript
public readonly revision: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#revision OpsworksStack#revision}.

---

##### `sshKey`<sup>Optional</sup> <a name="sshKey" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.sshKey"></a>

```typescript
public readonly sshKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#ssh_key OpsworksStack#ssh_key}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#username OpsworksStack#username}.

---

### OpsworksStackTimeouts <a name="OpsworksStackTimeouts" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts.Initializer"></a>

```typescript
import { opsworksStack } from '@cdktf/provider-aws'

const opsworksStackTimeouts: opsworksStack.OpsworksStackTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#create OpsworksStack#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#create OpsworksStack#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsworksStackCustomCookbooksSourceOutputReference <a name="OpsworksStackCustomCookbooksSourceOutputReference" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.Initializer"></a>

```typescript
import { opsworksStack } from '@cdktf/provider-aws'

new opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resetRevision">resetRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resetSshKey">resetSshKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetRevision` <a name="resetRevision" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resetRevision"></a>

```typescript
public resetRevision(): void
```

##### `resetSshKey` <a name="resetSshKey" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resetSshKey"></a>

```typescript
public resetSshKey(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.revisionInput">revisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.sshKeyInput">sshKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.revision">revision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.sshKey">sshKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource">OpsworksStackCustomCookbooksSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `revisionInput`<sup>Optional</sup> <a name="revisionInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.revisionInput"></a>

```typescript
public readonly revisionInput: string;
```

- *Type:* string

---

##### `sshKeyInput`<sup>Optional</sup> <a name="sshKeyInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.sshKeyInput"></a>

```typescript
public readonly sshKeyInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.revision"></a>

```typescript
public readonly revision: string;
```

- *Type:* string

---

##### `sshKey`<sup>Required</sup> <a name="sshKey" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.sshKey"></a>

```typescript
public readonly sshKey: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpsworksStackCustomCookbooksSource;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource">OpsworksStackCustomCookbooksSource</a>

---


### OpsworksStackTimeoutsOutputReference <a name="OpsworksStackTimeoutsOutputReference" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.Initializer"></a>

```typescript
import { opsworksStack } from '@cdktf/provider-aws'

new opsworksStack.OpsworksStackTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts">OpsworksStackTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpsworksStackTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts">OpsworksStackTimeouts</a> | cdktf.IResolvable

---



