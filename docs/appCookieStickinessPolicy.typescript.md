# `appCookieStickinessPolicy` Submodule <a name="`appCookieStickinessPolicy` Submodule" id="@cdktf/provider-aws.appCookieStickinessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppCookieStickinessPolicy <a name="AppCookieStickinessPolicy" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/app_cookie_stickiness_policy aws_app_cookie_stickiness_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.Initializer"></a>

```typescript
import { appCookieStickinessPolicy } from '@cdktf/provider-aws'

new appCookieStickinessPolicy.AppCookieStickinessPolicy(scope: Construct, id: string, config: AppCookieStickinessPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicyConfig">AppCookieStickinessPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicyConfig">AppCookieStickinessPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.isConstruct"></a>

```typescript
import { appCookieStickinessPolicy } from '@cdktf/provider-aws'

appCookieStickinessPolicy.AppCookieStickinessPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.isTerraformElement"></a>

```typescript
import { appCookieStickinessPolicy } from '@cdktf/provider-aws'

appCookieStickinessPolicy.AppCookieStickinessPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.isTerraformResource"></a>

```typescript
import { appCookieStickinessPolicy } from '@cdktf/provider-aws'

appCookieStickinessPolicy.AppCookieStickinessPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.cookieNameInput">cookieNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.lbPortInput">lbPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.loadBalancerInput">loadBalancerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.cookieName">cookieName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.lbPort">lbPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.loadBalancer">loadBalancer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cookieNameInput`<sup>Optional</sup> <a name="cookieNameInput" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.cookieNameInput"></a>

```typescript
public readonly cookieNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `lbPortInput`<sup>Optional</sup> <a name="lbPortInput" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.lbPortInput"></a>

```typescript
public readonly lbPortInput: number;
```

- *Type:* number

---

##### `loadBalancerInput`<sup>Optional</sup> <a name="loadBalancerInput" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.loadBalancerInput"></a>

```typescript
public readonly loadBalancerInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `cookieName`<sup>Required</sup> <a name="cookieName" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.cookieName"></a>

```typescript
public readonly cookieName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lbPort`<sup>Required</sup> <a name="lbPort" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.lbPort"></a>

```typescript
public readonly lbPort: number;
```

- *Type:* number

---

##### `loadBalancer`<sup>Required</sup> <a name="loadBalancer" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.loadBalancer"></a>

```typescript
public readonly loadBalancer: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppCookieStickinessPolicyConfig <a name="AppCookieStickinessPolicyConfig" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicyConfig.Initializer"></a>

```typescript
import { appCookieStickinessPolicy } from '@cdktf/provider-aws'

const appCookieStickinessPolicyConfig: appCookieStickinessPolicy.AppCookieStickinessPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicyConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicyConfig.property.cookieName">cookieName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/app_cookie_stickiness_policy#cookie_name AppCookieStickinessPolicy#cookie_name}. |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicyConfig.property.lbPort">lbPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/app_cookie_stickiness_policy#lb_port AppCookieStickinessPolicy#lb_port}. |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicyConfig.property.loadBalancer">loadBalancer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/app_cookie_stickiness_policy#load_balancer AppCookieStickinessPolicy#load_balancer}. |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/app_cookie_stickiness_policy#name AppCookieStickinessPolicy#name}. |
| <code><a href="#@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/app_cookie_stickiness_policy#id AppCookieStickinessPolicy#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicyConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cookieName`<sup>Required</sup> <a name="cookieName" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicyConfig.property.cookieName"></a>

```typescript
public readonly cookieName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/app_cookie_stickiness_policy#cookie_name AppCookieStickinessPolicy#cookie_name}.

---

##### `lbPort`<sup>Required</sup> <a name="lbPort" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicyConfig.property.lbPort"></a>

```typescript
public readonly lbPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/app_cookie_stickiness_policy#lb_port AppCookieStickinessPolicy#lb_port}.

---

##### `loadBalancer`<sup>Required</sup> <a name="loadBalancer" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicyConfig.property.loadBalancer"></a>

```typescript
public readonly loadBalancer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/app_cookie_stickiness_policy#load_balancer AppCookieStickinessPolicy#load_balancer}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/app_cookie_stickiness_policy#name AppCookieStickinessPolicy#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appCookieStickinessPolicy.AppCookieStickinessPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/app_cookie_stickiness_policy#id AppCookieStickinessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



