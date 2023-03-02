# `directoryServiceRadiusSettings` Submodule <a name="`directoryServiceRadiusSettings` Submodule" id="@cdktf/provider-aws.directoryServiceRadiusSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryServiceRadiusSettings <a name="DirectoryServiceRadiusSettings" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings aws_directory_service_radius_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer"></a>

```typescript
import { directoryServiceRadiusSettings } from '@cdktf/provider-aws'

new directoryServiceRadiusSettings.DirectoryServiceRadiusSettings(scope: Construct, id: string, config: DirectoryServiceRadiusSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig">DirectoryServiceRadiusSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig">DirectoryServiceRadiusSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.resetUseSameUsername">resetUseSameUsername</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.putTimeouts"></a>

```typescript
public putTimeouts(value: DirectoryServiceRadiusSettingsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts">DirectoryServiceRadiusSettingsTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUseSameUsername` <a name="resetUseSameUsername" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.resetUseSameUsername"></a>

```typescript
public resetUseSameUsername(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.isConstruct"></a>

```typescript
import { directoryServiceRadiusSettings } from '@cdktf/provider-aws'

directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.isTerraformElement"></a>

```typescript
import { directoryServiceRadiusSettings } from '@cdktf/provider-aws'

directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.isTerraformResource"></a>

```typescript
import { directoryServiceRadiusSettings } from '@cdktf/provider-aws'

directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference">DirectoryServiceRadiusSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.authenticationProtocolInput">authenticationProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.directoryIdInput">directoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.displayLabelInput">displayLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusPortInput">radiusPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusRetriesInput">radiusRetriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusServersInput">radiusServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusTimeoutInput">radiusTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.sharedSecretInput">sharedSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts">DirectoryServiceRadiusSettingsTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.useSameUsernameInput">useSameUsernameInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.authenticationProtocol">authenticationProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.directoryId">directoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.displayLabel">displayLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusPort">radiusPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusRetries">radiusRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusServers">radiusServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusTimeout">radiusTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.sharedSecret">sharedSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.useSameUsername">useSameUsername</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.timeouts"></a>

```typescript
public readonly timeouts: DirectoryServiceRadiusSettingsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference">DirectoryServiceRadiusSettingsTimeoutsOutputReference</a>

---

##### `authenticationProtocolInput`<sup>Optional</sup> <a name="authenticationProtocolInput" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.authenticationProtocolInput"></a>

```typescript
public readonly authenticationProtocolInput: string;
```

- *Type:* string

---

##### `directoryIdInput`<sup>Optional</sup> <a name="directoryIdInput" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.directoryIdInput"></a>

```typescript
public readonly directoryIdInput: string;
```

- *Type:* string

---

##### `displayLabelInput`<sup>Optional</sup> <a name="displayLabelInput" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.displayLabelInput"></a>

```typescript
public readonly displayLabelInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `radiusPortInput`<sup>Optional</sup> <a name="radiusPortInput" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusPortInput"></a>

```typescript
public readonly radiusPortInput: number;
```

- *Type:* number

---

##### `radiusRetriesInput`<sup>Optional</sup> <a name="radiusRetriesInput" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusRetriesInput"></a>

```typescript
public readonly radiusRetriesInput: number;
```

- *Type:* number

---

##### `radiusServersInput`<sup>Optional</sup> <a name="radiusServersInput" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusServersInput"></a>

```typescript
public readonly radiusServersInput: string[];
```

- *Type:* string[]

---

##### `radiusTimeoutInput`<sup>Optional</sup> <a name="radiusTimeoutInput" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusTimeoutInput"></a>

```typescript
public readonly radiusTimeoutInput: number;
```

- *Type:* number

---

##### `sharedSecretInput`<sup>Optional</sup> <a name="sharedSecretInput" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.sharedSecretInput"></a>

```typescript
public readonly sharedSecretInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DirectoryServiceRadiusSettingsTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts">DirectoryServiceRadiusSettingsTimeouts</a> | cdktf.IResolvable

---

##### `useSameUsernameInput`<sup>Optional</sup> <a name="useSameUsernameInput" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.useSameUsernameInput"></a>

```typescript
public readonly useSameUsernameInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `authenticationProtocol`<sup>Required</sup> <a name="authenticationProtocol" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.authenticationProtocol"></a>

```typescript
public readonly authenticationProtocol: string;
```

- *Type:* string

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

---

##### `displayLabel`<sup>Required</sup> <a name="displayLabel" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.displayLabel"></a>

```typescript
public readonly displayLabel: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `radiusPort`<sup>Required</sup> <a name="radiusPort" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusPort"></a>

```typescript
public readonly radiusPort: number;
```

- *Type:* number

---

##### `radiusRetries`<sup>Required</sup> <a name="radiusRetries" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusRetries"></a>

```typescript
public readonly radiusRetries: number;
```

- *Type:* number

---

##### `radiusServers`<sup>Required</sup> <a name="radiusServers" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusServers"></a>

```typescript
public readonly radiusServers: string[];
```

- *Type:* string[]

---

##### `radiusTimeout`<sup>Required</sup> <a name="radiusTimeout" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusTimeout"></a>

```typescript
public readonly radiusTimeout: number;
```

- *Type:* number

---

##### `sharedSecret`<sup>Required</sup> <a name="sharedSecret" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.sharedSecret"></a>

```typescript
public readonly sharedSecret: string;
```

- *Type:* string

---

##### `useSameUsername`<sup>Required</sup> <a name="useSameUsername" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.useSameUsername"></a>

```typescript
public readonly useSameUsername: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryServiceRadiusSettingsConfig <a name="DirectoryServiceRadiusSettingsConfig" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.Initializer"></a>

```typescript
import { directoryServiceRadiusSettings } from '@cdktf/provider-aws'

const directoryServiceRadiusSettingsConfig: directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.authenticationProtocol">authenticationProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#authentication_protocol DirectoryServiceRadiusSettings#authentication_protocol}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.directoryId">directoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#directory_id DirectoryServiceRadiusSettings#directory_id}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.displayLabel">displayLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#display_label DirectoryServiceRadiusSettings#display_label}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.radiusPort">radiusPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#radius_port DirectoryServiceRadiusSettings#radius_port}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.radiusRetries">radiusRetries</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#radius_retries DirectoryServiceRadiusSettings#radius_retries}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.radiusServers">radiusServers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#radius_servers DirectoryServiceRadiusSettings#radius_servers}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.radiusTimeout">radiusTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#radius_timeout DirectoryServiceRadiusSettings#radius_timeout}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.sharedSecret">sharedSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#shared_secret DirectoryServiceRadiusSettings#shared_secret}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#id DirectoryServiceRadiusSettings#id}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts">DirectoryServiceRadiusSettingsTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.useSameUsername">useSameUsername</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#use_same_username DirectoryServiceRadiusSettings#use_same_username}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authenticationProtocol`<sup>Required</sup> <a name="authenticationProtocol" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.authenticationProtocol"></a>

```typescript
public readonly authenticationProtocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#authentication_protocol DirectoryServiceRadiusSettings#authentication_protocol}.

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#directory_id DirectoryServiceRadiusSettings#directory_id}.

---

##### `displayLabel`<sup>Required</sup> <a name="displayLabel" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.displayLabel"></a>

```typescript
public readonly displayLabel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#display_label DirectoryServiceRadiusSettings#display_label}.

---

##### `radiusPort`<sup>Required</sup> <a name="radiusPort" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.radiusPort"></a>

```typescript
public readonly radiusPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#radius_port DirectoryServiceRadiusSettings#radius_port}.

---

##### `radiusRetries`<sup>Required</sup> <a name="radiusRetries" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.radiusRetries"></a>

```typescript
public readonly radiusRetries: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#radius_retries DirectoryServiceRadiusSettings#radius_retries}.

---

##### `radiusServers`<sup>Required</sup> <a name="radiusServers" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.radiusServers"></a>

```typescript
public readonly radiusServers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#radius_servers DirectoryServiceRadiusSettings#radius_servers}.

---

##### `radiusTimeout`<sup>Required</sup> <a name="radiusTimeout" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.radiusTimeout"></a>

```typescript
public readonly radiusTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#radius_timeout DirectoryServiceRadiusSettings#radius_timeout}.

---

##### `sharedSecret`<sup>Required</sup> <a name="sharedSecret" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.sharedSecret"></a>

```typescript
public readonly sharedSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#shared_secret DirectoryServiceRadiusSettings#shared_secret}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#id DirectoryServiceRadiusSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DirectoryServiceRadiusSettingsTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts">DirectoryServiceRadiusSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#timeouts DirectoryServiceRadiusSettings#timeouts}

---

##### `useSameUsername`<sup>Optional</sup> <a name="useSameUsername" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.useSameUsername"></a>

```typescript
public readonly useSameUsername: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#use_same_username DirectoryServiceRadiusSettings#use_same_username}.

---

### DirectoryServiceRadiusSettingsTimeouts <a name="DirectoryServiceRadiusSettingsTimeouts" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts.Initializer"></a>

```typescript
import { directoryServiceRadiusSettings } from '@cdktf/provider-aws'

const directoryServiceRadiusSettingsTimeouts: directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#create DirectoryServiceRadiusSettings#create}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#update DirectoryServiceRadiusSettings#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#create DirectoryServiceRadiusSettings#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#update DirectoryServiceRadiusSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DirectoryServiceRadiusSettingsTimeoutsOutputReference <a name="DirectoryServiceRadiusSettingsTimeoutsOutputReference" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.Initializer"></a>

```typescript
import { directoryServiceRadiusSettings } from '@cdktf/provider-aws'

new directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts">DirectoryServiceRadiusSettingsTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DirectoryServiceRadiusSettingsTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts">DirectoryServiceRadiusSettingsTimeouts</a> | cdktf.IResolvable

---



