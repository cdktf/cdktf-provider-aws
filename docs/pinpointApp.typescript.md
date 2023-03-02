# `pinpointApp` Submodule <a name="`pinpointApp` Submodule" id="@cdktf/provider-aws.pinpointApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PinpointApp <a name="PinpointApp" id="@cdktf/provider-aws.pinpointApp.PinpointApp"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app aws_pinpoint_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer"></a>

```typescript
import { pinpointApp } from '@cdktf/provider-aws'

new pinpointApp.PinpointApp(scope: Construct, id: string, config?: PinpointAppConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig">PinpointAppConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig">PinpointAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.putCampaignHook">putCampaignHook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.putLimits">putLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.putQuietTime">putQuietTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.resetCampaignHook">resetCampaignHook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.resetLimits">resetLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.resetQuietTime">resetQuietTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.pinpointApp.PinpointApp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.pinpointApp.PinpointApp.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.pinpointApp.PinpointApp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.pinpointApp.PinpointApp.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.pinpointApp.PinpointApp.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.pinpointApp.PinpointApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.pinpointApp.PinpointApp.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.pinpointApp.PinpointApp.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.pinpointApp.PinpointApp.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCampaignHook` <a name="putCampaignHook" id="@cdktf/provider-aws.pinpointApp.PinpointApp.putCampaignHook"></a>

```typescript
public putCampaignHook(value: PinpointAppCampaignHook): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.pinpointApp.PinpointApp.putCampaignHook.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook">PinpointAppCampaignHook</a>

---

##### `putLimits` <a name="putLimits" id="@cdktf/provider-aws.pinpointApp.PinpointApp.putLimits"></a>

```typescript
public putLimits(value: PinpointAppLimits): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.pinpointApp.PinpointApp.putLimits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimits">PinpointAppLimits</a>

---

##### `putQuietTime` <a name="putQuietTime" id="@cdktf/provider-aws.pinpointApp.PinpointApp.putQuietTime"></a>

```typescript
public putQuietTime(value: PinpointAppQuietTime): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.pinpointApp.PinpointApp.putQuietTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime">PinpointAppQuietTime</a>

---

##### `resetCampaignHook` <a name="resetCampaignHook" id="@cdktf/provider-aws.pinpointApp.PinpointApp.resetCampaignHook"></a>

```typescript
public resetCampaignHook(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.pinpointApp.PinpointApp.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLimits` <a name="resetLimits" id="@cdktf/provider-aws.pinpointApp.PinpointApp.resetLimits"></a>

```typescript
public resetLimits(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.pinpointApp.PinpointApp.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-aws.pinpointApp.PinpointApp.resetNamePrefix"></a>

```typescript
public resetNamePrefix(): void
```

##### `resetQuietTime` <a name="resetQuietTime" id="@cdktf/provider-aws.pinpointApp.PinpointApp.resetQuietTime"></a>

```typescript
public resetQuietTime(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.pinpointApp.PinpointApp.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.pinpointApp.PinpointApp.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.pinpointApp.PinpointApp.isConstruct"></a>

```typescript
import { pinpointApp } from '@cdktf/provider-aws'

pinpointApp.PinpointApp.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointApp.PinpointApp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.pinpointApp.PinpointApp.isTerraformElement"></a>

```typescript
import { pinpointApp } from '@cdktf/provider-aws'

pinpointApp.PinpointApp.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointApp.PinpointApp.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.pinpointApp.PinpointApp.isTerraformResource"></a>

```typescript
import { pinpointApp } from '@cdktf/provider-aws'

pinpointApp.PinpointApp.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointApp.PinpointApp.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.campaignHook">campaignHook</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference">PinpointAppCampaignHookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.limits">limits</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference">PinpointAppLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.quietTime">quietTime</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference">PinpointAppQuietTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.campaignHookInput">campaignHookInput</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook">PinpointAppCampaignHook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.limitsInput">limitsInput</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimits">PinpointAppLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.namePrefixInput">namePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.quietTimeInput">quietTimeInput</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime">PinpointAppQuietTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.namePrefix">namePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `campaignHook`<sup>Required</sup> <a name="campaignHook" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.campaignHook"></a>

```typescript
public readonly campaignHook: PinpointAppCampaignHookOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference">PinpointAppCampaignHookOutputReference</a>

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.limits"></a>

```typescript
public readonly limits: PinpointAppLimitsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference">PinpointAppLimitsOutputReference</a>

---

##### `quietTime`<sup>Required</sup> <a name="quietTime" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.quietTime"></a>

```typescript
public readonly quietTime: PinpointAppQuietTimeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference">PinpointAppQuietTimeOutputReference</a>

---

##### `campaignHookInput`<sup>Optional</sup> <a name="campaignHookInput" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.campaignHookInput"></a>

```typescript
public readonly campaignHookInput: PinpointAppCampaignHook;
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook">PinpointAppCampaignHook</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `limitsInput`<sup>Optional</sup> <a name="limitsInput" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.limitsInput"></a>

```typescript
public readonly limitsInput: PinpointAppLimits;
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimits">PinpointAppLimits</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.namePrefixInput"></a>

```typescript
public readonly namePrefixInput: string;
```

- *Type:* string

---

##### `quietTimeInput`<sup>Optional</sup> <a name="quietTimeInput" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.quietTimeInput"></a>

```typescript
public readonly quietTimeInput: PinpointAppQuietTime;
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime">PinpointAppQuietTime</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PinpointAppCampaignHook <a name="PinpointAppCampaignHook" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook.Initializer"></a>

```typescript
import { pinpointApp } from '@cdktf/provider-aws'

const pinpointAppCampaignHook: pinpointApp.PinpointAppCampaignHook = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook.property.lambdaFunctionName">lambdaFunctionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#lambda_function_name PinpointApp#lambda_function_name}. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#mode PinpointApp#mode}. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook.property.webUrl">webUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#web_url PinpointApp#web_url}. |

---

##### `lambdaFunctionName`<sup>Optional</sup> <a name="lambdaFunctionName" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook.property.lambdaFunctionName"></a>

```typescript
public readonly lambdaFunctionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#lambda_function_name PinpointApp#lambda_function_name}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#mode PinpointApp#mode}.

---

##### `webUrl`<sup>Optional</sup> <a name="webUrl" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook.property.webUrl"></a>

```typescript
public readonly webUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#web_url PinpointApp#web_url}.

---

### PinpointAppConfig <a name="PinpointAppConfig" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.Initializer"></a>

```typescript
import { pinpointApp } from '@cdktf/provider-aws'

const pinpointAppConfig: pinpointApp.PinpointAppConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.campaignHook">campaignHook</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook">PinpointAppCampaignHook</a></code> | campaign_hook block. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#id PinpointApp#id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.limits">limits</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimits">PinpointAppLimits</a></code> | limits block. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#name PinpointApp#name}. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.namePrefix">namePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#name_prefix PinpointApp#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.quietTime">quietTime</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime">PinpointAppQuietTime</a></code> | quiet_time block. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#tags PinpointApp#tags}. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#tags_all PinpointApp#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `campaignHook`<sup>Optional</sup> <a name="campaignHook" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.campaignHook"></a>

```typescript
public readonly campaignHook: PinpointAppCampaignHook;
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook">PinpointAppCampaignHook</a>

campaign_hook block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#campaign_hook PinpointApp#campaign_hook}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#id PinpointApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.limits"></a>

```typescript
public readonly limits: PinpointAppLimits;
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimits">PinpointAppLimits</a>

limits block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#limits PinpointApp#limits}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#name PinpointApp#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#name_prefix PinpointApp#name_prefix}.

---

##### `quietTime`<sup>Optional</sup> <a name="quietTime" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.quietTime"></a>

```typescript
public readonly quietTime: PinpointAppQuietTime;
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime">PinpointAppQuietTime</a>

quiet_time block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#quiet_time PinpointApp#quiet_time}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#tags PinpointApp#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#tags_all PinpointApp#tags_all}.

---

### PinpointAppLimits <a name="PinpointAppLimits" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimits.Initializer"></a>

```typescript
import { pinpointApp } from '@cdktf/provider-aws'

const pinpointAppLimits: pinpointApp.PinpointAppLimits = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimits.property.daily">daily</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#daily PinpointApp#daily}. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimits.property.maximumDuration">maximumDuration</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#maximum_duration PinpointApp#maximum_duration}. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimits.property.messagesPerSecond">messagesPerSecond</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#messages_per_second PinpointApp#messages_per_second}. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimits.property.total">total</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#total PinpointApp#total}. |

---

##### `daily`<sup>Optional</sup> <a name="daily" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimits.property.daily"></a>

```typescript
public readonly daily: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#daily PinpointApp#daily}.

---

##### `maximumDuration`<sup>Optional</sup> <a name="maximumDuration" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimits.property.maximumDuration"></a>

```typescript
public readonly maximumDuration: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#maximum_duration PinpointApp#maximum_duration}.

---

##### `messagesPerSecond`<sup>Optional</sup> <a name="messagesPerSecond" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimits.property.messagesPerSecond"></a>

```typescript
public readonly messagesPerSecond: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#messages_per_second PinpointApp#messages_per_second}.

---

##### `total`<sup>Optional</sup> <a name="total" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimits.property.total"></a>

```typescript
public readonly total: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#total PinpointApp#total}.

---

### PinpointAppQuietTime <a name="PinpointAppQuietTime" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime.Initializer"></a>

```typescript
import { pinpointApp } from '@cdktf/provider-aws'

const pinpointAppQuietTime: pinpointApp.PinpointAppQuietTime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime.property.end">end</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#end PinpointApp#end}. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime.property.start">start</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#start PinpointApp#start}. |

---

##### `end`<sup>Optional</sup> <a name="end" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#end PinpointApp#end}.

---

##### `start`<sup>Optional</sup> <a name="start" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#start PinpointApp#start}.

---

## Classes <a name="Classes" id="Classes"></a>

### PinpointAppCampaignHookOutputReference <a name="PinpointAppCampaignHookOutputReference" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.Initializer"></a>

```typescript
import { pinpointApp } from '@cdktf/provider-aws'

new pinpointApp.PinpointAppCampaignHookOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.resetLambdaFunctionName">resetLambdaFunctionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.resetWebUrl">resetWebUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLambdaFunctionName` <a name="resetLambdaFunctionName" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.resetLambdaFunctionName"></a>

```typescript
public resetLambdaFunctionName(): void
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetWebUrl` <a name="resetWebUrl" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.resetWebUrl"></a>

```typescript
public resetWebUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.lambdaFunctionNameInput">lambdaFunctionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.webUrlInput">webUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.lambdaFunctionName">lambdaFunctionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.webUrl">webUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook">PinpointAppCampaignHook</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lambdaFunctionNameInput`<sup>Optional</sup> <a name="lambdaFunctionNameInput" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.lambdaFunctionNameInput"></a>

```typescript
public readonly lambdaFunctionNameInput: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `webUrlInput`<sup>Optional</sup> <a name="webUrlInput" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.webUrlInput"></a>

```typescript
public readonly webUrlInput: string;
```

- *Type:* string

---

##### `lambdaFunctionName`<sup>Required</sup> <a name="lambdaFunctionName" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.lambdaFunctionName"></a>

```typescript
public readonly lambdaFunctionName: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `webUrl`<sup>Required</sup> <a name="webUrl" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.webUrl"></a>

```typescript
public readonly webUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PinpointAppCampaignHook;
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook">PinpointAppCampaignHook</a>

---


### PinpointAppLimitsOutputReference <a name="PinpointAppLimitsOutputReference" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.Initializer"></a>

```typescript
import { pinpointApp } from '@cdktf/provider-aws'

new pinpointApp.PinpointAppLimitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.resetDaily">resetDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.resetMaximumDuration">resetMaximumDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.resetMessagesPerSecond">resetMessagesPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.resetTotal">resetTotal</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDaily` <a name="resetDaily" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.resetDaily"></a>

```typescript
public resetDaily(): void
```

##### `resetMaximumDuration` <a name="resetMaximumDuration" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.resetMaximumDuration"></a>

```typescript
public resetMaximumDuration(): void
```

##### `resetMessagesPerSecond` <a name="resetMessagesPerSecond" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.resetMessagesPerSecond"></a>

```typescript
public resetMessagesPerSecond(): void
```

##### `resetTotal` <a name="resetTotal" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.resetTotal"></a>

```typescript
public resetTotal(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.dailyInput">dailyInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.maximumDurationInput">maximumDurationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.messagesPerSecondInput">messagesPerSecondInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.totalInput">totalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.daily">daily</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.maximumDuration">maximumDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.messagesPerSecond">messagesPerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.total">total</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimits">PinpointAppLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dailyInput`<sup>Optional</sup> <a name="dailyInput" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.dailyInput"></a>

```typescript
public readonly dailyInput: number;
```

- *Type:* number

---

##### `maximumDurationInput`<sup>Optional</sup> <a name="maximumDurationInput" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.maximumDurationInput"></a>

```typescript
public readonly maximumDurationInput: number;
```

- *Type:* number

---

##### `messagesPerSecondInput`<sup>Optional</sup> <a name="messagesPerSecondInput" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.messagesPerSecondInput"></a>

```typescript
public readonly messagesPerSecondInput: number;
```

- *Type:* number

---

##### `totalInput`<sup>Optional</sup> <a name="totalInput" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.totalInput"></a>

```typescript
public readonly totalInput: number;
```

- *Type:* number

---

##### `daily`<sup>Required</sup> <a name="daily" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.daily"></a>

```typescript
public readonly daily: number;
```

- *Type:* number

---

##### `maximumDuration`<sup>Required</sup> <a name="maximumDuration" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.maximumDuration"></a>

```typescript
public readonly maximumDuration: number;
```

- *Type:* number

---

##### `messagesPerSecond`<sup>Required</sup> <a name="messagesPerSecond" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.messagesPerSecond"></a>

```typescript
public readonly messagesPerSecond: number;
```

- *Type:* number

---

##### `total`<sup>Required</sup> <a name="total" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.total"></a>

```typescript
public readonly total: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PinpointAppLimits;
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimits">PinpointAppLimits</a>

---


### PinpointAppQuietTimeOutputReference <a name="PinpointAppQuietTimeOutputReference" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.Initializer"></a>

```typescript
import { pinpointApp } from '@cdktf/provider-aws'

new pinpointApp.PinpointAppQuietTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.resetEnd">resetEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.resetStart">resetStart</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnd` <a name="resetEnd" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.resetEnd"></a>

```typescript
public resetEnd(): void
```

##### `resetStart` <a name="resetStart" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.resetStart"></a>

```typescript
public resetStart(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.endInput">endInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.startInput">startInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.end">end</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.start">start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime">PinpointAppQuietTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endInput`<sup>Optional</sup> <a name="endInput" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.endInput"></a>

```typescript
public readonly endInput: string;
```

- *Type:* string

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.startInput"></a>

```typescript
public readonly startInput: string;
```

- *Type:* string

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PinpointAppQuietTime;
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime">PinpointAppQuietTime</a>

---



