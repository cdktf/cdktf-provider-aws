# `route53ResolverQueryLogConfig` Submodule <a name="`route53ResolverQueryLogConfig` Submodule" id="@cdktf/provider-aws.route53ResolverQueryLogConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53ResolverQueryLogConfig <a name="Route53ResolverQueryLogConfig" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_query_log_config aws_route53_resolver_query_log_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.Initializer"></a>

```typescript
import { route53ResolverQueryLogConfig } from '@cdktf/provider-aws'

new route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig(scope: Construct, id: string, config: Route53ResolverQueryLogConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfigConfig">Route53ResolverQueryLogConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfigConfig">Route53ResolverQueryLogConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.isConstruct"></a>

```typescript
import { route53ResolverQueryLogConfig } from '@cdktf/provider-aws'

route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.isTerraformElement"></a>

```typescript
import { route53ResolverQueryLogConfig } from '@cdktf/provider-aws'

route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.isTerraformResource"></a>

```typescript
import { route53ResolverQueryLogConfig } from '@cdktf/provider-aws'

route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.shareStatus">shareStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.destinationArnInput">destinationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.destinationArn">destinationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `shareStatus`<sup>Required</sup> <a name="shareStatus" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.shareStatus"></a>

```typescript
public readonly shareStatus: string;
```

- *Type:* string

---

##### `destinationArnInput`<sup>Optional</sup> <a name="destinationArnInput" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.destinationArnInput"></a>

```typescript
public readonly destinationArnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `destinationArn`<sup>Required</sup> <a name="destinationArn" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.destinationArn"></a>

```typescript
public readonly destinationArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53ResolverQueryLogConfigConfig <a name="Route53ResolverQueryLogConfigConfig" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfigConfig.Initializer"></a>

```typescript
import { route53ResolverQueryLogConfig } from '@cdktf/provider-aws'

const route53ResolverQueryLogConfigConfig: route53ResolverQueryLogConfig.Route53ResolverQueryLogConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfigConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfigConfig.property.destinationArn">destinationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_query_log_config#destination_arn Route53ResolverQueryLogConfig#destination_arn}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfigConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_query_log_config#name Route53ResolverQueryLogConfig#name}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_query_log_config#id Route53ResolverQueryLogConfig#id}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfigConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_query_log_config#tags Route53ResolverQueryLogConfig#tags}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfigConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_query_log_config#tags_all Route53ResolverQueryLogConfig#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfigConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `destinationArn`<sup>Required</sup> <a name="destinationArn" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfigConfig.property.destinationArn"></a>

```typescript
public readonly destinationArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_query_log_config#destination_arn Route53ResolverQueryLogConfig#destination_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfigConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_query_log_config#name Route53ResolverQueryLogConfig#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_query_log_config#id Route53ResolverQueryLogConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfigConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_query_log_config#tags Route53ResolverQueryLogConfig#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.route53ResolverQueryLogConfig.Route53ResolverQueryLogConfigConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_query_log_config#tags_all Route53ResolverQueryLogConfig#tags_all}.

---



