# `eksIdentityProviderConfig` Submodule <a name="`eksIdentityProviderConfig` Submodule" id="@cdktf/provider-aws.eksIdentityProviderConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EksIdentityProviderConfig <a name="EksIdentityProviderConfig" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config aws_eks_identity_provider_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer"></a>

```typescript
import { eksIdentityProviderConfig } from '@cdktf/provider-aws'

new eksIdentityProviderConfig.EksIdentityProviderConfig(scope: Construct, id: string, config: EksIdentityProviderConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig">EksIdentityProviderConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig">EksIdentityProviderConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.putOidc">putOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putOidc` <a name="putOidc" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.putOidc"></a>

```typescript
public putOidc(value: EksIdentityProviderConfigOidc): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.putOidc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc">EksIdentityProviderConfigOidc</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: EksIdentityProviderConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts">EksIdentityProviderConfigTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.isConstruct"></a>

```typescript
import { eksIdentityProviderConfig } from '@cdktf/provider-aws'

eksIdentityProviderConfig.EksIdentityProviderConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.isTerraformElement"></a>

```typescript
import { eksIdentityProviderConfig } from '@cdktf/provider-aws'

eksIdentityProviderConfig.EksIdentityProviderConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.isTerraformResource"></a>

```typescript
import { eksIdentityProviderConfig } from '@cdktf/provider-aws'

eksIdentityProviderConfig.EksIdentityProviderConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.oidc">oidc</a></code> | <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference">EksIdentityProviderConfigOidcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference">EksIdentityProviderConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.clusterNameInput">clusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.oidcInput">oidcInput</a></code> | <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc">EksIdentityProviderConfigOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts">EksIdentityProviderConfigTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `oidc`<sup>Required</sup> <a name="oidc" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.oidc"></a>

```typescript
public readonly oidc: EksIdentityProviderConfigOidcOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference">EksIdentityProviderConfigOidcOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.timeouts"></a>

```typescript
public readonly timeouts: EksIdentityProviderConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference">EksIdentityProviderConfigTimeoutsOutputReference</a>

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.clusterNameInput"></a>

```typescript
public readonly clusterNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `oidcInput`<sup>Optional</sup> <a name="oidcInput" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.oidcInput"></a>

```typescript
public readonly oidcInput: EksIdentityProviderConfigOidc;
```

- *Type:* <a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc">EksIdentityProviderConfigOidc</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: EksIdentityProviderConfigTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts">EksIdentityProviderConfigTimeouts</a> | cdktf.IResolvable

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EksIdentityProviderConfigConfig <a name="EksIdentityProviderConfigConfig" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.Initializer"></a>

```typescript
import { eksIdentityProviderConfig } from '@cdktf/provider-aws'

const eksIdentityProviderConfigConfig: eksIdentityProviderConfig.EksIdentityProviderConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.clusterName">clusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#cluster_name EksIdentityProviderConfig#cluster_name}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.oidc">oidc</a></code> | <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc">EksIdentityProviderConfigOidc</a></code> | oidc block. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#id EksIdentityProviderConfig#id}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#tags EksIdentityProviderConfig#tags}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#tags_all EksIdentityProviderConfig#tags_all}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts">EksIdentityProviderConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#cluster_name EksIdentityProviderConfig#cluster_name}.

---

##### `oidc`<sup>Required</sup> <a name="oidc" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.oidc"></a>

```typescript
public readonly oidc: EksIdentityProviderConfigOidc;
```

- *Type:* <a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc">EksIdentityProviderConfigOidc</a>

oidc block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#oidc EksIdentityProviderConfig#oidc}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#id EksIdentityProviderConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#tags EksIdentityProviderConfig#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#tags_all EksIdentityProviderConfig#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: EksIdentityProviderConfigTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts">EksIdentityProviderConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#timeouts EksIdentityProviderConfig#timeouts}

---

### EksIdentityProviderConfigOidc <a name="EksIdentityProviderConfigOidc" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.Initializer"></a>

```typescript
import { eksIdentityProviderConfig } from '@cdktf/provider-aws'

const eksIdentityProviderConfigOidc: eksIdentityProviderConfig.EksIdentityProviderConfigOidc = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#client_id EksIdentityProviderConfig#client_id}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.identityProviderConfigName">identityProviderConfigName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#identity_provider_config_name EksIdentityProviderConfig#identity_provider_config_name}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.issuerUrl">issuerUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#issuer_url EksIdentityProviderConfig#issuer_url}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.groupsClaim">groupsClaim</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#groups_claim EksIdentityProviderConfig#groups_claim}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.groupsPrefix">groupsPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#groups_prefix EksIdentityProviderConfig#groups_prefix}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.requiredClaims">requiredClaims</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#required_claims EksIdentityProviderConfig#required_claims}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.usernameClaim">usernameClaim</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#username_claim EksIdentityProviderConfig#username_claim}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.usernamePrefix">usernamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#username_prefix EksIdentityProviderConfig#username_prefix}. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#client_id EksIdentityProviderConfig#client_id}.

---

##### `identityProviderConfigName`<sup>Required</sup> <a name="identityProviderConfigName" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.identityProviderConfigName"></a>

```typescript
public readonly identityProviderConfigName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#identity_provider_config_name EksIdentityProviderConfig#identity_provider_config_name}.

---

##### `issuerUrl`<sup>Required</sup> <a name="issuerUrl" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.issuerUrl"></a>

```typescript
public readonly issuerUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#issuer_url EksIdentityProviderConfig#issuer_url}.

---

##### `groupsClaim`<sup>Optional</sup> <a name="groupsClaim" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.groupsClaim"></a>

```typescript
public readonly groupsClaim: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#groups_claim EksIdentityProviderConfig#groups_claim}.

---

##### `groupsPrefix`<sup>Optional</sup> <a name="groupsPrefix" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.groupsPrefix"></a>

```typescript
public readonly groupsPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#groups_prefix EksIdentityProviderConfig#groups_prefix}.

---

##### `requiredClaims`<sup>Optional</sup> <a name="requiredClaims" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.requiredClaims"></a>

```typescript
public readonly requiredClaims: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#required_claims EksIdentityProviderConfig#required_claims}.

---

##### `usernameClaim`<sup>Optional</sup> <a name="usernameClaim" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.usernameClaim"></a>

```typescript
public readonly usernameClaim: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#username_claim EksIdentityProviderConfig#username_claim}.

---

##### `usernamePrefix`<sup>Optional</sup> <a name="usernamePrefix" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.usernamePrefix"></a>

```typescript
public readonly usernamePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#username_prefix EksIdentityProviderConfig#username_prefix}.

---

### EksIdentityProviderConfigTimeouts <a name="EksIdentityProviderConfigTimeouts" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts.Initializer"></a>

```typescript
import { eksIdentityProviderConfig } from '@cdktf/provider-aws'

const eksIdentityProviderConfigTimeouts: eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#create EksIdentityProviderConfig#create}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#delete EksIdentityProviderConfig#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#create EksIdentityProviderConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#delete EksIdentityProviderConfig#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### EksIdentityProviderConfigOidcOutputReference <a name="EksIdentityProviderConfigOidcOutputReference" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.Initializer"></a>

```typescript
import { eksIdentityProviderConfig } from '@cdktf/provider-aws'

new eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetGroupsClaim">resetGroupsClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetGroupsPrefix">resetGroupsPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetRequiredClaims">resetRequiredClaims</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetUsernameClaim">resetUsernameClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetUsernamePrefix">resetUsernamePrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupsClaim` <a name="resetGroupsClaim" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetGroupsClaim"></a>

```typescript
public resetGroupsClaim(): void
```

##### `resetGroupsPrefix` <a name="resetGroupsPrefix" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetGroupsPrefix"></a>

```typescript
public resetGroupsPrefix(): void
```

##### `resetRequiredClaims` <a name="resetRequiredClaims" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetRequiredClaims"></a>

```typescript
public resetRequiredClaims(): void
```

##### `resetUsernameClaim` <a name="resetUsernameClaim" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetUsernameClaim"></a>

```typescript
public resetUsernameClaim(): void
```

##### `resetUsernamePrefix` <a name="resetUsernamePrefix" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetUsernamePrefix"></a>

```typescript
public resetUsernamePrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.groupsClaimInput">groupsClaimInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.groupsPrefixInput">groupsPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.identityProviderConfigNameInput">identityProviderConfigNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.issuerUrlInput">issuerUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.requiredClaimsInput">requiredClaimsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.usernameClaimInput">usernameClaimInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.usernamePrefixInput">usernamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.groupsClaim">groupsClaim</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.groupsPrefix">groupsPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.identityProviderConfigName">identityProviderConfigName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.issuerUrl">issuerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.requiredClaims">requiredClaims</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.usernameClaim">usernameClaim</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.usernamePrefix">usernamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc">EksIdentityProviderConfigOidc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `groupsClaimInput`<sup>Optional</sup> <a name="groupsClaimInput" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.groupsClaimInput"></a>

```typescript
public readonly groupsClaimInput: string;
```

- *Type:* string

---

##### `groupsPrefixInput`<sup>Optional</sup> <a name="groupsPrefixInput" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.groupsPrefixInput"></a>

```typescript
public readonly groupsPrefixInput: string;
```

- *Type:* string

---

##### `identityProviderConfigNameInput`<sup>Optional</sup> <a name="identityProviderConfigNameInput" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.identityProviderConfigNameInput"></a>

```typescript
public readonly identityProviderConfigNameInput: string;
```

- *Type:* string

---

##### `issuerUrlInput`<sup>Optional</sup> <a name="issuerUrlInput" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.issuerUrlInput"></a>

```typescript
public readonly issuerUrlInput: string;
```

- *Type:* string

---

##### `requiredClaimsInput`<sup>Optional</sup> <a name="requiredClaimsInput" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.requiredClaimsInput"></a>

```typescript
public readonly requiredClaimsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `usernameClaimInput`<sup>Optional</sup> <a name="usernameClaimInput" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.usernameClaimInput"></a>

```typescript
public readonly usernameClaimInput: string;
```

- *Type:* string

---

##### `usernamePrefixInput`<sup>Optional</sup> <a name="usernamePrefixInput" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.usernamePrefixInput"></a>

```typescript
public readonly usernamePrefixInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `groupsClaim`<sup>Required</sup> <a name="groupsClaim" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.groupsClaim"></a>

```typescript
public readonly groupsClaim: string;
```

- *Type:* string

---

##### `groupsPrefix`<sup>Required</sup> <a name="groupsPrefix" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.groupsPrefix"></a>

```typescript
public readonly groupsPrefix: string;
```

- *Type:* string

---

##### `identityProviderConfigName`<sup>Required</sup> <a name="identityProviderConfigName" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.identityProviderConfigName"></a>

```typescript
public readonly identityProviderConfigName: string;
```

- *Type:* string

---

##### `issuerUrl`<sup>Required</sup> <a name="issuerUrl" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.issuerUrl"></a>

```typescript
public readonly issuerUrl: string;
```

- *Type:* string

---

##### `requiredClaims`<sup>Required</sup> <a name="requiredClaims" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.requiredClaims"></a>

```typescript
public readonly requiredClaims: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `usernameClaim`<sup>Required</sup> <a name="usernameClaim" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.usernameClaim"></a>

```typescript
public readonly usernameClaim: string;
```

- *Type:* string

---

##### `usernamePrefix`<sup>Required</sup> <a name="usernamePrefix" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.usernamePrefix"></a>

```typescript
public readonly usernamePrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksIdentityProviderConfigOidc;
```

- *Type:* <a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc">EksIdentityProviderConfigOidc</a>

---


### EksIdentityProviderConfigTimeoutsOutputReference <a name="EksIdentityProviderConfigTimeoutsOutputReference" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { eksIdentityProviderConfig } from '@cdktf/provider-aws'

new eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts">EksIdentityProviderConfigTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksIdentityProviderConfigTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts">EksIdentityProviderConfigTimeouts</a> | cdktf.IResolvable

---



