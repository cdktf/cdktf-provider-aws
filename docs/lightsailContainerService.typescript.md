# `lightsailContainerService` Submodule <a name="`lightsailContainerService` Submodule" id="@cdktf/provider-aws.lightsailContainerService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailContainerService <a name="LightsailContainerService" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service aws_lightsail_container_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer"></a>

```typescript
import { lightsailContainerService } from '@cdktf/provider-aws'

new lightsailContainerService.LightsailContainerService(scope: Construct, id: string, config: LightsailContainerServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig">LightsailContainerServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig">LightsailContainerServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.putPrivateRegistryAccess">putPrivateRegistryAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.putPublicDomainNames">putPublicDomainNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetIsDisabled">resetIsDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetPrivateRegistryAccess">resetPrivateRegistryAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetPublicDomainNames">resetPublicDomainNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putPrivateRegistryAccess` <a name="putPrivateRegistryAccess" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.putPrivateRegistryAccess"></a>

```typescript
public putPrivateRegistryAccess(value: LightsailContainerServicePrivateRegistryAccess): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.putPrivateRegistryAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess">LightsailContainerServicePrivateRegistryAccess</a>

---

##### `putPublicDomainNames` <a name="putPublicDomainNames" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.putPublicDomainNames"></a>

```typescript
public putPublicDomainNames(value: LightsailContainerServicePublicDomainNames): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.putPublicDomainNames.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames">LightsailContainerServicePublicDomainNames</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.putTimeouts"></a>

```typescript
public putTimeouts(value: LightsailContainerServiceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts">LightsailContainerServiceTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsDisabled` <a name="resetIsDisabled" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetIsDisabled"></a>

```typescript
public resetIsDisabled(): void
```

##### `resetPrivateRegistryAccess` <a name="resetPrivateRegistryAccess" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetPrivateRegistryAccess"></a>

```typescript
public resetPrivateRegistryAccess(): void
```

##### `resetPublicDomainNames` <a name="resetPublicDomainNames" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetPublicDomainNames"></a>

```typescript
public resetPublicDomainNames(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.isConstruct"></a>

```typescript
import { lightsailContainerService } from '@cdktf/provider-aws'

lightsailContainerService.LightsailContainerService.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.isTerraformElement"></a>

```typescript
import { lightsailContainerService } from '@cdktf/provider-aws'

lightsailContainerService.LightsailContainerService.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.isTerraformResource"></a>

```typescript
import { lightsailContainerService } from '@cdktf/provider-aws'

lightsailContainerService.LightsailContainerService.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.powerId">powerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.principalArn">principalArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.privateDomainName">privateDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.privateRegistryAccess">privateRegistryAccess</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference">LightsailContainerServicePrivateRegistryAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.publicDomainNames">publicDomainNames</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference">LightsailContainerServicePublicDomainNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference">LightsailContainerServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.isDisabledInput">isDisabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.powerInput">powerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.privateRegistryAccessInput">privateRegistryAccessInput</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess">LightsailContainerServicePrivateRegistryAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.publicDomainNamesInput">publicDomainNamesInput</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames">LightsailContainerServicePublicDomainNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.scaleInput">scaleInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts">LightsailContainerServiceTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.isDisabled">isDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.power">power</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.scale">scale</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `powerId`<sup>Required</sup> <a name="powerId" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.powerId"></a>

```typescript
public readonly powerId: string;
```

- *Type:* string

---

##### `principalArn`<sup>Required</sup> <a name="principalArn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.principalArn"></a>

```typescript
public readonly principalArn: string;
```

- *Type:* string

---

##### `privateDomainName`<sup>Required</sup> <a name="privateDomainName" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.privateDomainName"></a>

```typescript
public readonly privateDomainName: string;
```

- *Type:* string

---

##### `privateRegistryAccess`<sup>Required</sup> <a name="privateRegistryAccess" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.privateRegistryAccess"></a>

```typescript
public readonly privateRegistryAccess: LightsailContainerServicePrivateRegistryAccessOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference">LightsailContainerServicePrivateRegistryAccessOutputReference</a>

---

##### `publicDomainNames`<sup>Required</sup> <a name="publicDomainNames" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.publicDomainNames"></a>

```typescript
public readonly publicDomainNames: LightsailContainerServicePublicDomainNamesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference">LightsailContainerServicePublicDomainNamesOutputReference</a>

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.timeouts"></a>

```typescript
public readonly timeouts: LightsailContainerServiceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference">LightsailContainerServiceTimeoutsOutputReference</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isDisabledInput`<sup>Optional</sup> <a name="isDisabledInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.isDisabledInput"></a>

```typescript
public readonly isDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `powerInput`<sup>Optional</sup> <a name="powerInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.powerInput"></a>

```typescript
public readonly powerInput: string;
```

- *Type:* string

---

##### `privateRegistryAccessInput`<sup>Optional</sup> <a name="privateRegistryAccessInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.privateRegistryAccessInput"></a>

```typescript
public readonly privateRegistryAccessInput: LightsailContainerServicePrivateRegistryAccess;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess">LightsailContainerServicePrivateRegistryAccess</a>

---

##### `publicDomainNamesInput`<sup>Optional</sup> <a name="publicDomainNamesInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.publicDomainNamesInput"></a>

```typescript
public readonly publicDomainNamesInput: LightsailContainerServicePublicDomainNames;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames">LightsailContainerServicePublicDomainNames</a>

---

##### `scaleInput`<sup>Optional</sup> <a name="scaleInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.scaleInput"></a>

```typescript
public readonly scaleInput: number;
```

- *Type:* number

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: LightsailContainerServiceTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts">LightsailContainerServiceTimeouts</a> | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isDisabled`<sup>Required</sup> <a name="isDisabled" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.isDisabled"></a>

```typescript
public readonly isDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `power`<sup>Required</sup> <a name="power" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.power"></a>

```typescript
public readonly power: string;
```

- *Type:* string

---

##### `scale`<sup>Required</sup> <a name="scale" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.scale"></a>

```typescript
public readonly scale: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailContainerServiceConfig <a name="LightsailContainerServiceConfig" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.Initializer"></a>

```typescript
import { lightsailContainerService } from '@cdktf/provider-aws'

const lightsailContainerServiceConfig: lightsailContainerService.LightsailContainerServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#name LightsailContainerService#name}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.power">power</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#power LightsailContainerService#power}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.scale">scale</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#scale LightsailContainerService#scale}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#id LightsailContainerService#id}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.isDisabled">isDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#is_disabled LightsailContainerService#is_disabled}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.privateRegistryAccess">privateRegistryAccess</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess">LightsailContainerServicePrivateRegistryAccess</a></code> | private_registry_access block. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.publicDomainNames">publicDomainNames</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames">LightsailContainerServicePublicDomainNames</a></code> | public_domain_names block. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#tags LightsailContainerService#tags}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#tags_all LightsailContainerService#tags_all}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts">LightsailContainerServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#name LightsailContainerService#name}.

---

##### `power`<sup>Required</sup> <a name="power" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.power"></a>

```typescript
public readonly power: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#power LightsailContainerService#power}.

---

##### `scale`<sup>Required</sup> <a name="scale" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.scale"></a>

```typescript
public readonly scale: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#scale LightsailContainerService#scale}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#id LightsailContainerService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isDisabled`<sup>Optional</sup> <a name="isDisabled" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.isDisabled"></a>

```typescript
public readonly isDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#is_disabled LightsailContainerService#is_disabled}.

---

##### `privateRegistryAccess`<sup>Optional</sup> <a name="privateRegistryAccess" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.privateRegistryAccess"></a>

```typescript
public readonly privateRegistryAccess: LightsailContainerServicePrivateRegistryAccess;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess">LightsailContainerServicePrivateRegistryAccess</a>

private_registry_access block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#private_registry_access LightsailContainerService#private_registry_access}

---

##### `publicDomainNames`<sup>Optional</sup> <a name="publicDomainNames" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.publicDomainNames"></a>

```typescript
public readonly publicDomainNames: LightsailContainerServicePublicDomainNames;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames">LightsailContainerServicePublicDomainNames</a>

public_domain_names block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#public_domain_names LightsailContainerService#public_domain_names}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#tags LightsailContainerService#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#tags_all LightsailContainerService#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LightsailContainerServiceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts">LightsailContainerServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#timeouts LightsailContainerService#timeouts}

---

### LightsailContainerServicePrivateRegistryAccess <a name="LightsailContainerServicePrivateRegistryAccess" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess.Initializer"></a>

```typescript
import { lightsailContainerService } from '@cdktf/provider-aws'

const lightsailContainerServicePrivateRegistryAccess: lightsailContainerService.LightsailContainerServicePrivateRegistryAccess = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess.property.ecrImagePullerRole">ecrImagePullerRole</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole">LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole</a></code> | ecr_image_puller_role block. |

---

##### `ecrImagePullerRole`<sup>Optional</sup> <a name="ecrImagePullerRole" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess.property.ecrImagePullerRole"></a>

```typescript
public readonly ecrImagePullerRole: LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole">LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole</a>

ecr_image_puller_role block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#ecr_image_puller_role LightsailContainerService#ecr_image_puller_role}

---

### LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole <a name="LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole.Initializer"></a>

```typescript
import { lightsailContainerService } from '@cdktf/provider-aws'

const lightsailContainerServicePrivateRegistryAccessEcrImagePullerRole: lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole.property.isActive">isActive</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#is_active LightsailContainerService#is_active}. |

---

##### `isActive`<sup>Optional</sup> <a name="isActive" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole.property.isActive"></a>

```typescript
public readonly isActive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#is_active LightsailContainerService#is_active}.

---

### LightsailContainerServicePublicDomainNames <a name="LightsailContainerServicePublicDomainNames" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames.Initializer"></a>

```typescript
import { lightsailContainerService } from '@cdktf/provider-aws'

const lightsailContainerServicePublicDomainNames: lightsailContainerService.LightsailContainerServicePublicDomainNames = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames.property.certificate">certificate</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate">LightsailContainerServicePublicDomainNamesCertificate</a>[]</code> | certificate block. |

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames.property.certificate"></a>

```typescript
public readonly certificate: IResolvable | LightsailContainerServicePublicDomainNamesCertificate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate">LightsailContainerServicePublicDomainNamesCertificate</a>[]

certificate block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#certificate LightsailContainerService#certificate}

---

### LightsailContainerServicePublicDomainNamesCertificate <a name="LightsailContainerServicePublicDomainNamesCertificate" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate.Initializer"></a>

```typescript
import { lightsailContainerService } from '@cdktf/provider-aws'

const lightsailContainerServicePublicDomainNamesCertificate: lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate.property.certificateName">certificateName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#certificate_name LightsailContainerService#certificate_name}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate.property.domainNames">domainNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#domain_names LightsailContainerService#domain_names}. |

---

##### `certificateName`<sup>Required</sup> <a name="certificateName" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate.property.certificateName"></a>

```typescript
public readonly certificateName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#certificate_name LightsailContainerService#certificate_name}.

---

##### `domainNames`<sup>Required</sup> <a name="domainNames" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate.property.domainNames"></a>

```typescript
public readonly domainNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#domain_names LightsailContainerService#domain_names}.

---

### LightsailContainerServiceTimeouts <a name="LightsailContainerServiceTimeouts" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts.Initializer"></a>

```typescript
import { lightsailContainerService } from '@cdktf/provider-aws'

const lightsailContainerServiceTimeouts: lightsailContainerService.LightsailContainerServiceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#create LightsailContainerService#create}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#delete LightsailContainerService#delete}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#update LightsailContainerService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#create LightsailContainerService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#delete LightsailContainerService#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#update LightsailContainerService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference <a name="LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer"></a>

```typescript
import { lightsailContainerService } from '@cdktf/provider-aws'

new lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.resetIsActive">resetIsActive</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsActive` <a name="resetIsActive" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.resetIsActive"></a>

```typescript
public resetIsActive(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.principalArn">principalArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.isActiveInput">isActiveInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.isActive">isActive</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole">LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalArn`<sup>Required</sup> <a name="principalArn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.principalArn"></a>

```typescript
public readonly principalArn: string;
```

- *Type:* string

---

##### `isActiveInput`<sup>Optional</sup> <a name="isActiveInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.isActiveInput"></a>

```typescript
public readonly isActiveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isActive`<sup>Required</sup> <a name="isActive" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.isActive"></a>

```typescript
public readonly isActive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole">LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole</a>

---


### LightsailContainerServicePrivateRegistryAccessOutputReference <a name="LightsailContainerServicePrivateRegistryAccessOutputReference" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.Initializer"></a>

```typescript
import { lightsailContainerService } from '@cdktf/provider-aws'

new lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.putEcrImagePullerRole">putEcrImagePullerRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.resetEcrImagePullerRole">resetEcrImagePullerRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEcrImagePullerRole` <a name="putEcrImagePullerRole" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.putEcrImagePullerRole"></a>

```typescript
public putEcrImagePullerRole(value: LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.putEcrImagePullerRole.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole">LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole</a>

---

##### `resetEcrImagePullerRole` <a name="resetEcrImagePullerRole" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.resetEcrImagePullerRole"></a>

```typescript
public resetEcrImagePullerRole(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.ecrImagePullerRole">ecrImagePullerRole</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference">LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.ecrImagePullerRoleInput">ecrImagePullerRoleInput</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole">LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess">LightsailContainerServicePrivateRegistryAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ecrImagePullerRole`<sup>Required</sup> <a name="ecrImagePullerRole" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.ecrImagePullerRole"></a>

```typescript
public readonly ecrImagePullerRole: LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference">LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference</a>

---

##### `ecrImagePullerRoleInput`<sup>Optional</sup> <a name="ecrImagePullerRoleInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.ecrImagePullerRoleInput"></a>

```typescript
public readonly ecrImagePullerRoleInput: LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole">LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LightsailContainerServicePrivateRegistryAccess;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess">LightsailContainerServicePrivateRegistryAccess</a>

---


### LightsailContainerServicePublicDomainNamesCertificateList <a name="LightsailContainerServicePublicDomainNamesCertificateList" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.Initializer"></a>

```typescript
import { lightsailContainerService } from '@cdktf/provider-aws'

new lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.get"></a>

```typescript
public get(index: number): LightsailContainerServicePublicDomainNamesCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate">LightsailContainerServicePublicDomainNamesCertificate</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LightsailContainerServicePublicDomainNamesCertificate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate">LightsailContainerServicePublicDomainNamesCertificate</a>[]

---


### LightsailContainerServicePublicDomainNamesCertificateOutputReference <a name="LightsailContainerServicePublicDomainNamesCertificateOutputReference" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.Initializer"></a>

```typescript
import { lightsailContainerService } from '@cdktf/provider-aws'

new lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.certificateNameInput">certificateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.domainNamesInput">domainNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.certificateName">certificateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.domainNames">domainNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate">LightsailContainerServicePublicDomainNamesCertificate</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateNameInput`<sup>Optional</sup> <a name="certificateNameInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.certificateNameInput"></a>

```typescript
public readonly certificateNameInput: string;
```

- *Type:* string

---

##### `domainNamesInput`<sup>Optional</sup> <a name="domainNamesInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.domainNamesInput"></a>

```typescript
public readonly domainNamesInput: string[];
```

- *Type:* string[]

---

##### `certificateName`<sup>Required</sup> <a name="certificateName" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.certificateName"></a>

```typescript
public readonly certificateName: string;
```

- *Type:* string

---

##### `domainNames`<sup>Required</sup> <a name="domainNames" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.domainNames"></a>

```typescript
public readonly domainNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LightsailContainerServicePublicDomainNamesCertificate | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate">LightsailContainerServicePublicDomainNamesCertificate</a> | cdktf.IResolvable

---


### LightsailContainerServicePublicDomainNamesOutputReference <a name="LightsailContainerServicePublicDomainNamesOutputReference" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.Initializer"></a>

```typescript
import { lightsailContainerService } from '@cdktf/provider-aws'

new lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.putCertificate">putCertificate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCertificate` <a name="putCertificate" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.putCertificate"></a>

```typescript
public putCertificate(value: IResolvable | LightsailContainerServicePublicDomainNamesCertificate[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.putCertificate.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate">LightsailContainerServicePublicDomainNamesCertificate</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.certificate">certificate</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList">LightsailContainerServicePublicDomainNamesCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.certificateInput">certificateInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate">LightsailContainerServicePublicDomainNamesCertificate</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames">LightsailContainerServicePublicDomainNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.certificate"></a>

```typescript
public readonly certificate: LightsailContainerServicePublicDomainNamesCertificateList;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList">LightsailContainerServicePublicDomainNamesCertificateList</a>

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.certificateInput"></a>

```typescript
public readonly certificateInput: IResolvable | LightsailContainerServicePublicDomainNamesCertificate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate">LightsailContainerServicePublicDomainNamesCertificate</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LightsailContainerServicePublicDomainNames;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames">LightsailContainerServicePublicDomainNames</a>

---


### LightsailContainerServiceTimeoutsOutputReference <a name="LightsailContainerServiceTimeoutsOutputReference" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.Initializer"></a>

```typescript
import { lightsailContainerService } from '@cdktf/provider-aws'

new lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts">LightsailContainerServiceTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LightsailContainerServiceTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts">LightsailContainerServiceTimeouts</a> | cdktf.IResolvable

---



